import './styles/style.scss';
import accordion from './modules/accordion.js';
import makeCards from './modules/cardBuilder.js';
import theme from './modules/theme.js';
import cardsData from './modules/cardsData';
import { stopGame, continueGame, disableSwitch, enableSwitch, disablePanel, enablePanel, getRandom } from './modules/helpers.js';
import { responsiveLevel1, responsiveLevel2, responsiveLevel3 } from './modules/responsiveBoard.js';
import {animations, showCardsAnimation, bonusTimeAnimation, winLoseMessage, elementHide, initialLoading, showSettings, showGame} from './modules/animations.js';
const gameBoard = document.querySelector('#gameBoard');
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
const panelCardFace = document.querySelector('#panelCardFace');
const panelInstrument = document.querySelector('#panelInstrument');
const panelCardFaceArrow = document.querySelector('#panelCardFaceArrow');
const panelInstrumentArrow = document.querySelector('#panelInstrumentArrow');
const panelCardFaceRight = document.querySelector('#panelCardFaceRight');
const panelInstrumentRight = document.querySelector('#panelInstrumentRight');
const switchRotateCardRight = document.querySelector('#switchRotateCardRight');
const switchSoundRight = document.querySelector('#switchSoundRight');
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
			// document.documentElement.clientWidth - dimensions limited by window, without scrollbars
			responsiveLevel1(document.documentElement.clientWidth); 
			window.addEventListener("resize", () => responsiveLevel1(document.documentElement.clientWidth));
			break;
		case 2:
			cardCounter = 26;
			dataPack = dataTonesLevel2.concat(dataTonesLevel2);
			seconds = 30 + addTimeFromLevel;
			responsiveLevel2(document.documentElement.clientWidth);
			window.addEventListener("resize", () => responsiveLevel2(document.documentElement.clientWidth));
			break;
		case 3:
			cardCounter = 50;
			dataPack = dataTonesLevel3.concat(dataTonesLevel3);
			seconds = 40 + addTimeFromLevel;
			responsiveLevel3(document.documentElement.clientWidth);
			window.addEventListener("resize", () => responsiveLevel3(document.documentElement.clientWidth));
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
		stopGame(cardWrapper, game);
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
				continueGame(cardWrapper, game);
			}, 50);
			openedCards = 0;
			cardCounter -= 2;
		} else {
			setTimeout(() => {
				firstCard.classList.remove('rotate');
				secondCard.classList.remove('rotate');
				openedCards = 0;
				wrongGuesses++;
				continueGame(cardWrapper, game);
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
	openedCards <= 2
		? this.classList.add('rotate')
		: cardWrapper.forEach((i) => {
				i.removeEventListener('click', rotateCard);
		  });
}

function playSound() {
	let sound = this.childNodes[2];
	sound.currentTime = 0;
	if (openedCards <= 2) {
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
			disableSwitch(switchSound, switchSoundSlider, switchSoundRight);
			disablePanel(panelCardFaceRight, panelCardFace, panelCardFaceArrow);
		} else {
			i.addEventListener('click', rotateCard);
			switchRotateCardText.innerHTML = 'on';
			enableSwitch(switchSound, switchSoundSlider, switchSoundRight);
			enablePanel(panelCardFaceRight, panelCardFace);
		}
	});
}

function soundOnOff() {
	cardWrapper.forEach((i) => {
		if (switchSound.checked) {
			i.removeEventListener('click', playSound);
			switchSoundText.innerHTML = 'off';
			disableSwitch(switchRotateCard, switchRotateCardSlider, switchRotateCardRight);
			disablePanel(panelInstrumentRight, panelInstrument, panelInstrumentArrow);
		} else {
			i.addEventListener('click', playSound);
			switchSoundText.innerHTML = 'on';
			enableSwitch(switchRotateCard, switchRotateCardSlider, switchRotateCardRight);
			enablePanel(panelInstrumentRight, panelInstrument);
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

goToSettingsButton.addEventListener('click',() => {    
	showSettings();
	timerOnOff = false;
});
goToGameButton.addEventListener('click',() => {
	showGame();
	switchTime.checked ? (timerOnOff = false) : (timerOnOff = true); 
});
startGameInput.addEventListener('change', playPause);
switchRotateCard.addEventListener('change', rotateOnOff);
switchSound.addEventListener('change', soundOnOff);
switchTime.addEventListener('change', timeOnOf);
nextLevel.addEventListener('click', setNextLevel);
continueAfterWin.addEventListener('click', setNextLevel);
resetGame.addEventListener('click', reset);
resetAfterWin.addEventListener('click', reset);
levelAfterWin.addEventListener('click', repeatLevel);
switchTheme.addEventListener('change', theme);
gameBoard.addEventListener('click', boardStart);


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
	pauseGame();
	time.innerHTML = seconds;
	currentLevel.innerHTML = level;
	switchLevel.innerHTML = level;
}





