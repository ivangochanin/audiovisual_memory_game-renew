import './styles/style.scss';
//import {switchesDisable, switchesEnable} from "./modules/switches.js";
import { stopGame, continueGame, getRandom } from './modules/helpers.js';
import { responsiveLevel1, responsiveLevel2, responsiveLevel3 } from './modules/responsiveBoard.js';
import accordion from './modules/accordion.js';
import makeCards from './modules/cardBuilder.js';
import {animations, showCardsAnimation, bonusTimeAnimation, winLoseMessage, 
	    elementShow, elementHide, initialLoading, showSettings, showGame} from './modules/animations.js';
import theme from './modules/theme.js';
import cardsData from './modules/cardsData';
const gameBoard = document.querySelector('#gameBoard');
const cardSignal = document.querySelector('#cardSignal');
const resetGame = document.querySelector('#resetGame');
const startGameInput = document.querySelector('#startGameInput');
const nextLevel = document.querySelector('#nextLevel');
const continueAfterWin = document.querySelector('#continueAfterWin');
const resetAfterWin = document.querySelector('#resetAfterWin');
const levelAfterWin = document.querySelector('#levelAfterWin');
const currentLevel = document.querySelector('#currentLevel');
const switchLevel = document.querySelector('#switchLevel');
const time = document.querySelector('#timer');
const messageWrapper = document.querySelector('#messageWrapper');
const message = document.querySelector('#message');
const messageAddedSeconds = document.querySelector('#messageAddedSeconds');
const messageWrongGuesses = document.querySelector('#messageWrongGuesses');
const radioInputs = document.querySelectorAll('.radioInputs');
const switchRotateCard = document.querySelector('#switchRotateCard');
const switchRotateCardSlider = document.querySelector('#switchRotateCardSlider');
const switchSoundSlider = document.querySelector('#switchSoundSlider');
const switchRotateCardText = document.querySelector('#switchRotateCardText');
const switchSound = document.querySelector('#switchSound');
const switchSoundText = document.querySelector('#switchSoundText');
const switchTime = document.querySelector('#switchTime');
const switchTimeText = document.querySelector('#switchTimeText');
const switchTheme = document.querySelector('#switchTheme');
const startGameImage = document.querySelector('#startGameImage');
const firstCardIndicator = document.querySelector('#firstCardIndicator');
const secondCardIndicator = document.querySelector('#secondCardIndicator');
const goToSettingsButton = document.querySelector('#goToSettingsButton');
const goToGameButton = document.querySelector('#goToGameButton');
const blue = '#06A7A7';
const red = '#FF7070';
const green = '#B7E10F';
let firstClick = true;
let timerOnOff = true;
let addTimeFromLevel = 0;
let wrongGuesses = 0;
let openedCards = 0;
let level = 1;
let dataPack, cardWrapper, cardCounter, firstCard, secondCard, interval, seconds;

initialLoading();
theme();
animations();
accordion();
cardsData();
makeGame();

function boardStart() {
	!startGameInput.checked && firstClick ? playGame() : null;
	firstClick = false;
}

function bonusTime() {
	return level === 3 ? (seconds += 11) : (seconds += 6);
}

function setLevel() {
	let dataTonesLevel1 = cardsData().filter((tone, index) => index < 8);
	let dataTonesLevel2 = cardsData().filter((tone, index) => index < 13);
	let dataTonesLevel3 = cardsData().filter((tone, index) => index < 25);
	
	switch (level) {
		case 1:
			cardCounter = 16;
			dataPack = dataTonesLevel1.concat(dataTonesLevel1);
			seconds = 20;
			responsiveLevel1();
			window.addEventListener("resize", () => responsiveLevel1());
			break;
		case 2:
			cardCounter = 26;
			dataPack = dataTonesLevel2.concat(dataTonesLevel2);
			seconds = 30 + addTimeFromLevel;
			responsiveLevel2();
			window.addEventListener("resize", () => responsiveLevel2());
			break;
		case 3:
			cardCounter = 50;
			dataPack = dataTonesLevel3.concat(dataTonesLevel3);
			seconds = 40 + addTimeFromLevel;
			responsiveLevel3();
			window.addEventListener("resize", () => responsiveLevel3());
			break;
		default:
			cardCounter = 0;
			dataPack = [];
			seconds = 0;
	}
	return level;
}

function setNextLevel() {
	if (level < 3) {
		level++;
		currentLevel.innerHTML = level;
		switchLevel.innerHTML = level;
		cardCounter = 0;
		makeGame();
	} else {
		addTimeFromLevel = 0;
		reset();
	}
}

function randomOrder() {
	cardWrapper = document.querySelectorAll('.cardWrapper');
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
	if (!switchTheme.checked) {
		firstCardIndicator.style.background = '#505258';
		secondCardIndicator.style.background = '#505258';
	} else {
		firstCardIndicator.style.background = '#c7c8c9';
		secondCardIndicator.style.background = '#c7c8c9';
	}
}

function game() {
	if (openedCards < 2) {
		openedCards++;
	}
	if (openedCards === 1) {
		firstCard = this;
		firstCard.style.pointerEvents = 'none';
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
		if (firstCard.cardId === secondCard.cardId) {
			if (!switchTime.checked) {
				bonusTime();
				bonusTimeAnimation(time);
			}
			setTimeout(() => {
				firstCard.style.visibility = 'hidden';
				secondCard.style.visibility = 'hidden';
				indicatorOff();
				continueGame(cardWrapper, rotateOnOff, soundOnOff, game);
			}, 50);
			openedCards = 0;
			cardCounter -= 2;
		} else {
			setTimeout(() => {
				firstCard.classList.remove('rotate');
				secondCard.classList.remove('rotate');
				openedCards = 0;
				wrongGuesses++;
				continueGame(cardWrapper, rotateOnOff, soundOnOff, game);
				indicatorOff();
			}, 200);
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
	nextLevel.removeEventListener('click', setNextLevel);
	resetGame.removeEventListener('click', reset);
	gameBoard.removeEventListener('click', boardStart);
	resetGame.style.opacity = '0.35';
	nextLevel.style.opacity = '0.35';
	startGameInput.disabled = true;
	winLoseMessage(
		messageWrapper,
		message,
		continueAfterWin,
		resetAfterWin,
		levelAfterWin
	);
}
function repeatLevel() {
	addTimeFromLevel = 0;
	makeGame();
}
function winGame() {
	winLose();
	message.innerHTML = `Great Job!`;
	messageAddedSeconds.innerHTML = `Added seconds to next level: ${seconds}`;
	messageWrongGuesses.innerHTML = `Wrong guesses: ${wrongGuesses}`;
	time.style.color = blue;
	addTimeFromLevel = seconds;
}

function loseGame() {
	winLose();
	message.innerHTML = `More luck next time! `;
	messageAddedSeconds.innerHTML = `Time is up!`;
	messageWrongGuesses.innerHTML = `Wrong guesses: ${wrongGuesses}`;
}

function rotateCard() {
	openedCards < 2
		? this.classList.add('rotate')
		: cardWrapper.forEach((i) => {
				i.removeEventListener('click', rotateCard);
		  });
}

function playSound() {
	let sound = this.childNodes[2];
	sound.currentTime = 0;
	if (openedCards < 2) {
		sound.volume = 1;
		sound ? sound.play() : null;
	} else {
		cardWrapper.forEach((i) => {
			i.removeEventListener('click', playSound);
		});
	}
}

function rotateOnOff() {
	cardWrapper.forEach((i) => {
		if (switchRotateCard.checked) {
			i.removeEventListener('click', rotateCard);
			switchRotateCardText.innerHTML = 'off';
			switchSound.disabled = true;
			switchSoundSlider.style.pointerEvents = "none";
		} else {
			i.addEventListener('click', rotateCard);
			switchRotateCardText.innerHTML = 'on';
			switchSound.disabled = false;
			switchSoundSlider.style.pointerEvents = "auto";
		}
	});
}

function soundOnOff() {
	cardWrapper.forEach((i) => {
		if (switchSound.checked) {
			i.removeEventListener('click', playSound);
			switchSoundText.innerHTML = 'off';
			switchRotateCard.disabled = true;
			switchRotateCardSlider.style.pointerEvents = "none";
		} else {
			i.addEventListener('click', playSound);
			switchSoundText.innerHTML = 'on';
			switchRotateCard.disabled = false;
			switchRotateCardSlider.style.pointerEvents = "auto";
		}
	});
}

function timeOnOf() {
	if (switchTime.checked) {
		timerOnOff = false;
		switchTimeText.innerHTML = 'off';
		time.style.opacity = '.25';
	} else {
		timerOnOff = true;
		switchTimeText.innerHTML = 'on';
		time.style.opacity = '1';
	}
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
	return clearInterval(interval);
}

function playGame() {
	startGameImage.src = './assets/icons/pause.png';
	startGameInput.checked = true;
	firstClick = false;
	runTime();
	//switchesEnable(switchRotateCard, switchSound, switchTime);
	switchTime.checked ? (timerOnOff = false) : (timerOnOff = true);
	cardWrapper.forEach((i) => {
		switchRotateCard.checked
			? i.removeEventListener('click', rotateCard)
			: i.addEventListener('click', rotateCard);
		switchSound.checked
			? i.removeEventListener('click', playSound)
			: i.addEventListener('click', playSound);
		i.addEventListener('click', game);
	});
}

function pauseGame() {
	return [
		(startGameInput.checked = false),
		(startGameImage.src = './assets/icons/play.png'),
		stopTime(),
		(timerOnOff = false),
		(firstClick = true),
		//switchesDisable(switchRotateCard, switchSound, switchTime),
		removeAllListeners(),
	];
}

function removeAllListeners() {
	return cardWrapper.forEach((i) => {
		i.removeEventListener('click', rotateCard);
		i.removeEventListener('click', playSound);
		i.removeEventListener('click', game);
	});
}

function playPause() {
	startGameInput.checked ? playGame() : pauseGame();
}

function reset() {
	cardCounter = 0;
	wrongGuesses = 0;
	level = 1;
	makeGame();
	pauseGame();
}

radioInputs.forEach(i => {
	i.addEventListener('click', makeGame)
})

startGameInput.addEventListener('change', playPause);
switchRotateCard.addEventListener('change', rotateOnOff);
switchSound.addEventListener('change', soundOnOff);
switchTime.addEventListener('change', timeOnOf);
resetGame.addEventListener('click', reset);
continueAfterWin.addEventListener('click', setNextLevel);
resetAfterWin.addEventListener('click', reset);
levelAfterWin.addEventListener('click', repeatLevel);
switchTheme.addEventListener('change', theme);
goToSettingsButton.addEventListener('click', showSettings)
goToGameButton.addEventListener('click', showGame)

function makeGame() {
	gameBoard.innerHTML = null;
	openedCards = 0;
	wrongGuesses = 0;
	indicatorOff();
	elementHide(messageWrapper);
	setLevel();
	makeCards(dataPack, gameBoard, switchTheme);
	randomOrder();
	showCardsAnimation();
	timerOnOff = true;
	time.style.color = blue;
	startGameInput.disabled = false;
	//switchesDisable(switchRotateCard, switchSound, switchTime);
	pauseGame();
	nextLevel.addEventListener('click', setNextLevel);
	resetGame.addEventListener('click', reset);
	gameBoard.addEventListener('click', boardStart);
	nextLevel.style.opacity = '1';
	resetGame.style.opacity = '1';
	time.innerHTML = seconds;
	currentLevel.innerHTML = level;
	switchLevel.innerHTML = level;
}





