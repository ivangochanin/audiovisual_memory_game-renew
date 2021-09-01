import { dataLevel1, dataLevel2, dataLevel3, dataLevel4 } from './data/data.js';
import { stopGame, continueGame, randomEndSound, addListener, removeListener } from './modules/helpers.js';
import makeCards from './modules/cardBuilder.js';
import {rules} from './modules/buttons.js';
import {switchesDisable, switchesEnable} from './modules/switches.js';
import {animations, showCardsAnimation, bonusTimeAnimation, winLoseMessage, winLoseMessageHide} from './modules/animations.js';
import theme from './modules/theme.js';
let gameBoard = document.querySelector('#gameBoard');
let cardSignal = document.querySelector('#cardSignal');
let resetGame = document.querySelector('#resetGame');
let startGameInput = document.querySelector('#startGameInput');
let nextLevel = document.querySelector('#nextLevel');
let continueAfterWin = document.querySelector('#continueAfterWin');
let levelAfterWin = document.querySelector('#levelAfterWin');
let currentLevel = document.querySelector('#currentLevel');
let time = document.querySelector('#timer');
let messageWrapper = document.querySelector('#messageWrapper');
let message = document.querySelector('#message');
let openedCards = 0;
let timerOnOff = true;
let level =  1;
let seconds = 25;
let dataPack, cardWrapper, cardCounter, firstCard, secondCard, interval;

animations();
theme();
rules(pauseGame, playPause, boardStart);

function boardStart(){
	if(!startGameInput.checked){
		/* console.log('bord'); */
	  return alert('Press Play Button')
	}
}


function bonusTime() {
    level === 2 ? seconds += 6 : level === 3 ? seconds += 11 : level === 4 ? seconds += 11 : seconds += 6;
};

function setLevel() {
	return [
		level === 1 ? (cardCounter = 16, dataPack = dataLevel1.concat(dataLevel1), seconds = 25, Object.assign(gameBoard.style, { width: "340px", height: "auto" })) :
		level === 2 ? (cardCounter = 26, dataPack = dataLevel2.concat(dataLevel2), seconds = 50, Object.assign(gameBoard.style, { width: "510px", height: "auto" })) :
		level === 3 ? (cardCounter = 50, dataPack = dataLevel3.concat(dataLevel3), seconds = 75, Object.assign(gameBoard.style, { width: "680px", height: "auto"})) :
		level === 4 ? (cardCounter = 74, dataPack = dataLevel4.concat(dataLevel4), seconds = 100, Object.assign(gameBoard.style, { width: "840px", height: "auto"})) : 
		(cardCounter = 0, dataPack = [], seconds = 0)
	]
};

function setNextLevel() {
	if(level < 4) {
		level++;
		currentLevel.innerHTML = level;
    	cardCounter = 0;
		makeGame();
		cardSignal.style.opacity = 0;
	} else {
    	return reset();
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
};

function indicatorOff(){
	firstCardIndicator.style.background = '';
	secondCardIndicator.style.background = '';
};

function makeGame() {
	return[
		gameBoard.innerHTML = null,
		openedCards = 0,
		indicatorOff(),
		winLoseMessageHide(messageWrapper),
		setLevel(),
		makeCards(dataPack),
		randomOrder(),
		showCardsAnimation(),
		timerOnOff = true,
		time.style.color = "#06A7A7",
		startGameInput.disabled = false,
		startGameButton.childNodes[3].style.opacity = 1,
		switchesDisable(),
		pauseGame(),
		addListener(nextLevel, setNextLevel),
		time.innerHTML = seconds,
	    currentLevel.innerHTML = level
	]
};

function game() {
	if(openedCards < 2) {
		openedCards++; 
	} 
	if(openedCards === 1) {
		firstCard = this;
		firstCard.style.pointerEvents = 'none';
		seconds <= 10 ? firstCardIndicator.style.background = "#FF7070" : firstCardIndicator.style.background = '#B7E10F';
	} 
	if(openedCards === 2) {
		secondCard = this;
		stopGame(cardWrapper, rotateCard, playSound, game);
		seconds <= 10 ? secondCardIndicator.style.background = "#FF7070" : secondCardIndicator.style.background = '#B7E10F';
		if(firstCard.childNodes[0].currentSrc === secondCard.childNodes[0].currentSrc && firstCard.childNodes[2].currentSrc === secondCard.childNodes[2].currentSrc) {
			if(!switchTime.checked){
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
};

function winGame() {
	pauseGame();
	startGameInput.disabled = true;
	startGameButton.childNodes[3].style.opacity = .2;
    message.innerHTML = 'Great job!';
    winLoseMessage(messageWrapper,message, continueAfterWin, levelAfterWin);
};

function endGame() {
	const dynamics = [1, .75, .5, .25, .1, 1, 1];
	pauseGame();
	removeListener(nextLevel, setNextLevel)
	message.innerHTML = 'More luck next time!';
	winLoseMessage(messageWrapper,message, continueAfterWin, levelAfterWin);
	pauseGame();
	startGameInput.disabled = true;
	startGameButton.childNodes[3].style.opacity = .2;
	cardWrapper.forEach((i, index) => {
	  setTimeout(() => {
		  if(i.style.visibility !== "hidden"){
			i.classList.add("rotate");
			if(!switchSound.checked){
				i.childNodes[2].play();
				i.childNodes[2].volume = randomEndSound(dynamics);
			}
		  }
	  }, index * 175);
  });
};

function rotateCard() {
	if (openedCards < 2) {
		this.classList.add("rotate");
	} else {
		cardWrapper.forEach((i) => {
			i.removeEventListener("click", rotateCard);
		});
	}
};

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
};

function rotateOnOff() {
	cardWrapper.forEach((i) => {
		switchVisual.checked
			? i.removeEventListener("click", rotateCard)
			: i.addEventListener("click", rotateCard);
	});
};

function soundOnOff() {
	cardWrapper.forEach((i) => {
		switchSound.checked
			? i.removeEventListener("click", playSound)
			: i.addEventListener("click", playSound);
	});
};

function timeOnOf() {
	switchTime.checked ?
	timerOnOff = false : timerOnOff = true;
};

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
};

function runTime() {
	interval = setInterval(timer, 1000);
};

function stopTime() {
	clearInterval(interval);
};

function playGame() {
    //gameBoard.removeEventListener('click', boardStart);
	startGameImage.src = '../data/images/pause.png'; 
	startGameInput.checked = true,
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
};
	
function pauseGame() {
    //gameBoard.addEventListener('click', boardStart);
	startGameInput.checked = false,
	startGameImage.src = '../data/images/start.png';
	stopTime();
	timerOnOff = false;
	switchesDisable();
	removeAllListeners();
};

function removeAllListeners() {
	cardWrapper.forEach((i) => {
		i.removeEventListener("click", rotateCard);
		i.removeEventListener("click", playSound);
		i.removeEventListener("click", game);
	});
};

function playPause() {
	startGameInput.checked ? playGame() : pauseGame();
};

function reset() {
	cardCounter = 0;
	level = 1;
	cardSignal.style.opacity = 0;
	makeGame();
	pauseGame();
};

continueAfterWin.addEventListener('click', setNextLevel);
resetGame.addEventListener('click', reset);
startGameInput.addEventListener('change', playPause);
switchVisual.addEventListener("change", rotateOnOff);
switchSound.addEventListener("change", soundOnOff);
switchTime.addEventListener("change", timeOnOf);
gameBoard.addEventListener('click', boardStart);

makeGame(); 
pauseGame();
