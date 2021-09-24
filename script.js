import dataTones from "./data/data.js";
import {stopGame,continueGame,getRandom,addListener,removeListener,} from "./modules/helpers.js";
import makeCards from "./modules/cardBuilder.js";
import { switchesDisable, switchesEnable } from "./modules/switches.js";
import {animations,showCardsAnimation,bonusTimeAnimation,winLoseMessage,elementShow,elementHide,} from "./modules/animations.js";
import theme from "./modules/theme.js";
const gameBoard = document.querySelector("#gameBoard");
const cardSignal = document.querySelector("#cardSignal");
const resetGame = document.querySelector("#resetGame");
const startGameInput = document.querySelector("#startGameInput");
const nextLevel = document.querySelector("#nextLevel");
const continueAfterWin = document.querySelector("#continueAfterWin");
const levelAfterWin = document.querySelector("#levelAfterWin");
const currentLevel = document.querySelector("#currentLevel");
const time = document.querySelector("#timer");
const messageWrapper = document.querySelector("#messageWrapper");
const message = document.querySelector("#message");
const openRulesButton = document.querySelector("#openRulesButton");
const closeRulesButton = document.querySelector("#closeRulesButton");
const rulesWrapper = document.querySelector("#rulesWrapper");
const switchVisual = document.querySelector("#switchVisual");
const switchSound = document.querySelector("#switchSound");
const switchTime = document.querySelector("#switchTime");
const startGameImage = document.querySelector("#startGameImage");
const startGameButton = document.querySelector("#startGameButton");
const firstCardIndicator = document.querySelector("#firstCardIndicator");
const secondCardIndicator = document.querySelector("#secondCardIndicator");
const blue = "#06A7A7";
const red = "#FF7070";
const green = "#B7E10F";
let firstClick = true;
let timerOnOff = true;
let rulesTrigger = true;
let endSoundPlay = true;
let addTimeFromLevel = 0;
let openedCards = 0;
let level = 1;
let dataPack,cardWrapper,cardCounter,firstCard,secondCard,interval,seconds;

function toggleRules() {
	 if(rulesTrigger) {
		 elementShow(rulesWrapper);
		 rulesTrigger = false;
		 pauseGame();
		 startGameImage.style.opacity = 0.2;
		 gameBoard.removeEventListener("click", boardStart);
		 startGameInput.removeEventListener("change", playPause);
	 } else {
		 elementHide(rulesWrapper);
		 rulesTrigger = true;
		 startGameImage.style.opacity = 1;
		 gameBoard.addEventListener("click", boardStart);
		 startGameInput.addEventListener("change", playPause);
	 }
}

function boardStart() {
	!startGameInput.checked && firstClick ? playGame() : null;
	firstClick = false;
}

function bonusTime() {
	return 	level === 3 || level === 4 ? seconds += 11 : seconds += 6;
}

function setLevel() {
	let dataTonesLevel1 = dataTones.filter((tone,index) => index < 8);
	let dataTonesLevel2 = dataTones.filter((tone,index) => index < 13);
	let dataTonesLevel3 = dataTones.filter((tone,index) => index < 25);
	let dataTonesLevel4 = dataTones.filter((tone,index) => index < 37);

	switch (level) {
		case 1 :
			cardCounter = 16;
			dataPack = dataTonesLevel1.concat(dataTonesLevel1);
			seconds = 20;
			Object.assign(gameBoard.style, { width: "340px", height: "auto" });
			break;
		case 2 :
			cardCounter = 26;
			dataPack = dataTonesLevel2.concat(dataTonesLevel2);
			seconds = 30 + addTimeFromLevel;
			Object.assign(gameBoard.style, { width: "510px", height: "auto" });
			break;
		case 3 :
			cardCounter = 50;
			dataPack = dataTonesLevel3.concat(dataTonesLevel3);
			seconds = 40 + addTimeFromLevel;
			Object.assign(gameBoard.style, { width: "680px", height: "auto" });
			break;
		case 4 :
			cardCounter = 74;
			dataPack = dataTonesLevel4.concat(dataTonesLevel4);
			seconds = 50 + addTimeFromLevel;
			Object.assign(gameBoard.style, { width: "840px", height: "auto" });
			break;
		default:
			cardCounter = 0;
			dataPack = [];
			seconds = 0;
	}
	return level;
}

function setNextLevel() {
	if(level < 4) {
	level++;
	currentLevel.innerHTML = level;
	cardCounter = 0;
	makeGame();
	cardSignal.style.opacity = 0;
	} else {
		addTimeFromLevel = 0;
		reset()
	}
}

function randomOrder() {
	cardWrapper = document.querySelectorAll(".cardWrapper");
	return cardWrapper.forEach((i) => {
		let randomData = getRandom(dataPack);
		i.cardId = randomData.cardId;
		i.childNodes[0].src = randomData.img;
		i.childNodes[2].src = randomData.sound;
		let removeData = dataPack.indexOf(randomData);
		dataPack.splice(removeData, 1);
	});
}

function indicatorOff() {
	return [
		firstCardIndicator.style.background = "",
		secondCardIndicator.style.background = ""
	]
}

function makeGame() {
	gameBoard.innerHTML = null;
	openedCards = 0;
	indicatorOff();
	elementHide(messageWrapper);
	setLevel();
	makeCards(dataPack, gameBoard, switchTheme);
	randomOrder();
	showCardsAnimation();
	timerOnOff = true;
	time.style.color = blue;
	startGameInput.disabled = false;
	startGameButton.childNodes[3].style.opacity = 1;
	switchesDisable();
	pauseGame();
	addListener(nextLevel, setNextLevel);
	addListener(resetGame, reset);
	addListener(openRulesButton, toggleRules);
	addListener(gameBoard, boardStart);
	nextLevel.style.opacity = 1;
	resetGame.style.opacity = 1;
	openRulesButton.style.opacity = 1;
	time.innerHTML = seconds;
	currentLevel.innerHTML = level;
}

function game() {
	if (openedCards < 2) {
		openedCards++;
	}
	if (openedCards === 1) {
		firstCard = this;
		firstCard.style.pointerEvents = "none";
		seconds <= 10
			? (firstCardIndicator.style.background = red)
			: (firstCardIndicator.style.background = green);
	}
	if (openedCards === 2) {
		secondCard = this;
		stopGame(cardWrapper, rotateCard, playSound, game);
		seconds <= 10
			? (secondCardIndicator.style.background = red)
			: (secondCardIndicator.style.background = green);
		if (
			firstCard.cardId === secondCard.cardId
		) {
			if (!switchTime.checked) {
				bonusTime();
				bonusTimeAnimation(time);
			}
			setTimeout(() => {
				firstCard.style.visibility = "hidden";
				secondCard.style.visibility = "hidden";
				indicatorOff();
				continueGame(cardWrapper, rotateOnOff, soundOnOff, game);
			}, 500);
			openedCards = 0;
			cardCounter -= 2;
		} else {
			setTimeout(() => {
				firstCard.classList.remove("rotate");
				secondCard.classList.remove("rotate");
				openedCards = 0;
				continueGame(cardWrapper, rotateOnOff, soundOnOff, game);
				indicatorOff();
			}, 500);
		}
	}
	if (cardCounter === 0 && level <= 4) {
		setTimeout(() => {
			winGame();
		}, 1000);
	}
	if (cardCounter === 0 && level > 4) {
		reset();
	}
}

function winLose() {
	pauseGame();
	removeListener(nextLevel, setNextLevel);
	removeListener(resetGame, reset);
	removeListener(openRulesButton, toggleRules);
	removeListener(gameBoard, boardStart);
	resetGame.style.opacity = 0.35;
	nextLevel.style.opacity = 0.35;
	openRulesButton.style.opacity = 0.35;
	startGameInput.disabled = true;
	startGameButton.childNodes[3].style.opacity = 0.2;
	winLoseMessage(messageWrapper, message, continueAfterWin, levelAfterWin);
}

function stopEndSound() {
	endSoundPlay = false;
	setNextLevel();
}

function repeatLevel() {
	endSoundPlay = false;
	addTimeFromLevel = 0;
	makeGame();
}

function playEndSound() {
	const dynamics = [1, 0.85, 0.75, 0.65, 0.55, 0.33, 1, 1, 1, 0.95];
	cardWrapper.forEach((i, index) => {
		setTimeout(() => {
			if (i.style.visibility !== "hidden") {
				i.classList.add("rotate");
			}
			if (!switchSound.checked && endSoundPlay) {
				i.childNodes[2].play();
				i.childNodes[2].volume = getRandom(dynamics);
			}
		}, index * 175);
	});
}

function winGame() {
	winLose();
	message.innerHTML = "Great job!";
	time.style.color = blue;
	addTimeFromLevel = seconds;
}

function loseGame() {
	endSoundPlay = true;
	winLose();
	message.innerHTML = "More luck next time!";
	playEndSound();
}

function rotateCard() {
	openedCards < 2 ? 
	this.classList.add("rotate")
	:
	cardWrapper.forEach((i) => {
		i.removeEventListener("click", rotateCard);
	});
}

function playSound() {
	let sound = this.childNodes[2];
	sound.currentTime = 0;
	if(openedCards < 2) {
		sound.volume = 1;
		sound ? sound.play() : null;
	} else {
	cardWrapper.forEach((i) => {
		i.removeEventListener("click", playSound);
	});
	}
}

function rotateOnOff() {
	cardWrapper.forEach((i) => {
		switchVisual.checked
			? i.removeEventListener("click", rotateCard)
			: i.addEventListener("click", rotateCard);
	});
}

function soundOnOff() {
	cardWrapper.forEach((i) => {
		switchSound.checked
			? i.removeEventListener("click", playSound)
			: i.addEventListener("click", playSound);
	});
}

function timeOnOf() {
	switchTime.checked ? (timerOnOff = false) : (timerOnOff = true);
}

function timer() {
	if (timerOnOff) {
		seconds--;
	}
	time.innerHTML = seconds;
	seconds <= 10 ? (time.style.color = red) : (time.style.color = blue);
	if (seconds === 0) {
		stopTime();
		loseGame();
	}
}

function runTime() {
	interval = setInterval(timer, 1000);
}

function stopTime() {
 return	clearInterval(interval);
}

function playGame() {
	startGameImage.src = "../data/images/pause.png";
	startGameInput.checked = true;
	firstClick = false;
	runTime();
	switchesEnable();
	switchTime.checked ? (timerOnOff = false) : (timerOnOff = true);
	cardWrapper.forEach((i) => {
		switchVisual.checked
			? i.removeEventListener("click", rotateCard)
			: i.addEventListener("click", rotateCard);
		switchSound.checked
			? i.removeEventListener("click", playSound)
			: i.addEventListener("click", playSound);
		i.addEventListener("click", game);
	});
}

function pauseGame() {
	return [
	startGameInput.checked = false,
	startGameImage.src = "../data/images/start.png",
	stopTime(),
	timerOnOff = false,
	firstClick = true,
	switchesDisable(),
	removeAllListeners()
	]
}

function removeAllListeners() {
return 	cardWrapper.forEach((i) => {
		i.removeEventListener("click", rotateCard);
		i.removeEventListener("click", playSound);
		i.removeEventListener("click", game);
	});
}

function playPause() {
	startGameInput.checked ? playGame() : pauseGame();
}

function reset() {
	cardCounter = 0;
	level = 1;
	cardSignal.style.opacity = 0;
	makeGame();
	pauseGame();
}

startGameInput.addEventListener("change", playPause);
switchVisual.addEventListener("change", rotateOnOff);
switchSound.addEventListener("change", soundOnOff);
switchTime.addEventListener("change", timeOnOf);
resetGame.addEventListener("click", reset);
continueAfterWin.addEventListener("click", stopEndSound);
levelAfterWin.addEventListener("click", repeatLevel);
closeRulesButton.addEventListener("click", toggleRules);

animations();
theme();
makeGame();

