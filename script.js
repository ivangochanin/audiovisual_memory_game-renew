import { dataLevel1, dataLevel2, dataLevel3, dataLevel4 } from './data/data.js';
import { stopGame, continueGame } from './modules/helpers.js';
import makeCards from './modules/cardBuilder.js'
import {rules} from './modules/buttons.js';
import {switchesDisable, switchesEnable} from './modules/switches.js';
import {animations, showCardsAnimation} from './modules/animations.js';
import theme from './modules/theme.js';
let gameBoard = document.querySelector('#gameBoard');
let resetGame = document.querySelector('#resetGame');
let startGameInput = document.querySelector('#startGameInput');
let nextLevel = document.querySelector('#nextLevel');
let continueAfterWin = document.querySelector('#continueAfterWin');
let currentLevel = document.querySelector('#currentLevel');
let time = document.querySelector('#timer');
let message = document.querySelector('#message');
let messageWrapper = document.querySelector('#messageWrapper');
let openedCards = 0;
let timerOnOff = true;
let level =  1;
let seconds = 25;
let dataPack, cardWrapper, cardCounter, firstCard, secondCard;

animations();
theme();
rules();

function bonusTime() {
    return level === 2 ? seconds += 6 : level === 3 ? seconds += 11 : level === 4 ? seconds += 11 : seconds += 6;
}

function setLevel() {
	level === 1 ? (cardCounter = 16, dataPack = dataLevel1.concat(dataLevel1), seconds = 25, Object.assign(gameBoard.style, { width: "340px", height: "auto" })) :
	level === 2 ? (cardCounter = 26, dataPack = dataLevel2.concat(dataLevel2), seconds = 50, Object.assign(gameBoard.style, { width: "510px", height: "auto" })) :
	level === 3 ? (cardCounter = 50, dataPack = dataLevel3.concat(dataLevel3), seconds = 75, Object.assign(gameBoard.style, { width: "680px", height: "auto"})) :
	level === 4 ? (cardCounter = 74, dataPack = dataLevel4.concat(dataLevel4), seconds = 100, Object.assign(gameBoard.style, { width: "840px", height: "auto"})) : 
	(cardCounter = 0, dataPack = [], seconds = 0);
}

function setNextLevel() {
	if(level < 4) {
		level++;
		currentLevel.innerHTML = level;
    	cardCounter = 0;
		makeGame();
	} else {
		reset();
	}
};

function randomOrder() {
	cardWrapper = document.querySelectorAll(".cardWrapper");
	cardWrapper.forEach((i) => {
		let randomData = dataPack[Math.floor(Math.random() * dataPack.length)];
		i.childNodes[0].src = randomData.img;
		i.childNodes[2].src = randomData.sound;
		let removeData = dataPack.indexOf(randomData);
		dataPack.splice(removeData, 1);
	});
}

function makeGame() {
	gameBoard.innerHTML = null;
	setLevel();
	makeCards(dataPack);
	randomOrder();
	showCardsAnimation();
	time.innerHTML = seconds;
	timerOnOff = true;
	time.style.color = "#06A7A7"
	messageWrapper.style.visibility = "hidden";
	startGameImage.src = '../data/images/start.png';
	startGameInput.checked = false;
	startGameInput.disabled = false;
	startGameButton.childNodes[3].style.opacity = 1;
	switchesDisable();
	pauseGame();
}

function game() {
	if(openedCards < 2) {
		openedCards++ 
	} 
	if(openedCards === 1) {
		firstCard = this;
		firstCardIndicator.style.background = '#B7E10F';
		firstCard.style.pointerEvents = 'none';
	} 
	if(openedCards === 2) {
		secondCard = this;
		secondCardIndicator.style.background = '#B7E10F';
		stopGame(cardWrapper, rotateCard, playSound, game)
		if(firstCard.childNodes[0].currentSrc === secondCard.childNodes[0].currentSrc && firstCard.childNodes[2].currentSrc === secondCard.childNodes[2].currentSrc) {
			setTimeout(() => {
				bonusTime();
				firstCard.style.visibility = "hidden";
				secondCard.style.visibility = "hidden";
				firstCardIndicator.style.background = '#F0F0F3';
			    secondCardIndicator.style.background = '#F0F0F3';
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
				firstCardIndicator.style.background = '#F0F0F3';
			    secondCardIndicator.style.background = '#F0F0F3';
			}, 500);
			
		}
	}	
	if (cardCounter === 0 && level <= 4) {
			setTimeout(() => {
			switchesDisable()
		    timerOnOff = false;
			startGameInput.disabled = true;
		    startGameInput.checked = false;
        	startGameImage.src = '../data/images/start.png';
			startGameButton.childNodes[3].style.opacity = .2;
			messageWrapper.style.visibility = "visible";
            message.innerHTML = 'Great job!';
		    }, 1000);
		} 
		if (cardCounter === 0 && level > 4) {
		reset()
	    } 
}

function endGame() {
	switchesDisable();
	message.innerHTML = 'More luck next time! ';
	startGameInput.disabled = true;
	startGameInput.checked = true;
	startGameButton.childNodes[3].style.opacity = .2;
	startGameImage.src = '../data/images/start.png';
	messageWrapper.style.visibility = "visible";
	cardWrapper.forEach((i, index) => {
		i.removeEventListener("click", rotateCard);
		i.removeEventListener("click", playSound);
		i.removeEventListener("click", game);
	  setTimeout(() => {
		  if(i.style.visibility !== "hidden"){
			  i.classList.add("rotate");
			  i.childNodes[2].play();
		  }
	  }, index * 175)
  });
}

function rotateCard() {
	if (openedCards < 2) {
		this.classList.add("rotate");
	} else {
		cardWrapper.forEach((i) => {
			i.removeEventListener("click", rotateCard);
		});
	}
}

function playSound() {
	let sound = this.childNodes[2];
	sound.currentTime = 0;
	if (openedCards < 2) {
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
	switchTime.checked ?
	timerOnOff = false : timerOnOff = true
}

function timer() {
	if(timerOnOff){	
		seconds--;
	  }
	time.innerHTML = seconds;
	seconds <= 10 ? time.style.color = "#FF7070" : time.style.color = "#06A7A7";  
	if (seconds === 0) {
		stopTime();
		endGame();
	}
}

let interval;

function runTime() {
	interval = setInterval(timer, 1000);
}

function stopTime() {
	clearInterval(interval);
}

function playGame() {
	runTime();
	switchesEnable();
	switchTime.checked ?
	timerOnOff = false : timerOnOff = true;
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
	stopTime();
	timerOnOff = false;
	switchesDisable();
	timerOnOff = false;
	cardWrapper.forEach((i) => {
		i.removeEventListener("click", rotateCard);
		i.removeEventListener("click", playSound);
		i.removeEventListener("click", game);
	});
}

function playPause() {
	startGameInput.checked
	? playGame()
	: pauseGame();
}

function reset() {
	cardCounter = 0;
	level = 1;
	currentLevel.innerHTML = level;
	makeGame();
	pauseGame();
};

currentLevel.innerHTML = level;
nextLevel.addEventListener('click', setNextLevel);
continueAfterWin.addEventListener('click', setNextLevel);
resetGame.addEventListener('click', reset);
startGameInput.addEventListener('change', playPause);
switchVisual.addEventListener("change", rotateOnOff);
switchSound.addEventListener("change", soundOnOff);
switchTime.addEventListener("change", timeOnOf);

makeGame(); 
pauseGame();