import { dataLevel1, dataLevel2, dataLevel3, dataLevel4 } from './data/data.js';
import {addClassAndAtribute, stopGame, continueGame, runGame} from './modules/helpers.js';
import {rules} from './modules/buttons.js';
import {switchesDisable, switchesEnable} from './modules/switches.js'
import animations from './modules/animations.js';
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

function setLevel() {
	level === 1 ? (cardCounter = 16, dataPack = dataLevel1.concat(dataLevel1)) :
	level === 2 ? (cardCounter = 26, dataPack = dataLevel2.concat(dataLevel2)) :
	level === 3 ? (cardCounter = 50, dataPack = dataLevel3.concat(dataLevel3)) :
	level === 4 ? (cardCounter = 74, dataPack = dataLevel4.concat(dataLevel4)) : (cardCounter = 0, dataPack = []);
	return level;
}

function randomOrder() {
	cardWrapper = document.querySelectorAll(".cardWrapper");
	cardWrapper.forEach((i) => {
		let randomData = dataPack[Math.floor(Math.random() * dataPack.length)];
		i.childNodes[0].src = randomData.img;
		i.childNodes[2].src = randomData.sound;
		let removeData = dataPack.indexOf(randomData);
		dataPack.splice(removeData, 1);
		level === 2 ? Object.assign(gameBoard.style, { width: "510px", height: "auto" }) : 
		level === 3 ? Object.assign(gameBoard.style, { width: "680px", height: "auto"}) : 
		level === 4 ? Object.assign(gameBoard.style, { width: "840px", height: "auto"}) : 
		Object.assign(gameBoard.style, { width: "340px", height: "auto" });
	});
	gsap.to(".cardWrapper", .25, {
		opacity: 1,
		yoyo: true, 
		repeat: 0, 
		ease: "power1.inOut",
		delay:1,
		stagger: {
			amount: 1, 
			from: "top"
		}
	});
}

function makeGame() {
	gameBoard.innerHTML = null;
	level === 2 ? seconds = 50 : level === 3 ? seconds = 75 : level === 4 ? seconds = 100 : seconds = 25;
	time.innerHTML = seconds;
	setLevel();
	dataPack.forEach(() => {
		let createCards = document.createElement("div");
		createCards.classList.add("cardWrapper");
		document.querySelector("#gameBoard").appendChild(createCards);
		let frontImage = document.createElement("img");
		let backImage = document.createElement("img");
		let audio = document.createElement("audio");
		addClassAndAtribute(backImage, "back", {
			src: switchTheme.checked ? "./data/images/backW.svg" : "./data/images/backB.svg",
			alt: "backImage",
		});
		addClassAndAtribute(frontImage, "front", { src: "", alt: "frontImage" });
		addClassAndAtribute(audio, "audio", { src: "", preload: "auto" });
		createCards.append(frontImage, backImage, audio);
	});
	randomOrder();
	timerOnOff = true;
	time.style.color = "#06A7A7"
	startGameImage.src = '../data/images/start.png';
	messageWrapper.style.visibility = "hidden";
	startGameInput.checked = false;
	startGameInput.disabled = false;
	startGameButton.childNodes[3].style.opacity = 1;
	switchesDisable()
	pauseGame();
}

function game() {
	if(openedCards < 2) {
		openedCards++ 
	} 
	if(openedCards === 1) {
		firstCard = this
		firstCard.style.pointerEvents = 'none';
	} 
	if(openedCards === 2) {
		secondCard = this
		secondCard.style.pointerEvents = 'none';
		stopGame(cardWrapper, rotateCard, playSound, game)
		if(firstCard.childNodes[0].currentSrc === secondCard.childNodes[0].currentSrc && firstCard.childNodes[2].currentSrc === secondCard.childNodes[2].currentSrc) {
			setTimeout(() => {
				level === 2 ? seconds += 6 : level === 3 ? seconds += 11 : level === 4 ? seconds += 11 : seconds += 6;
				firstCard.style.visibility = "hidden";
				secondCard.style.visibility = "hidden";
				openedCards = 0;
				continueGame(cardWrapper, rotateOnOff, soundOnOff, game);
			}, 500);
			cardCounter = cardCounter - 2
		} else {
			setTimeout(() => {
				firstCard.classList.remove("rotate");
				secondCard.classList.remove("rotate");
				openedCards = 0;
				continueGame(cardWrapper, rotateOnOff, soundOnOff, game);
			}, 500);
		}
	}	
	setTimeout(() => {
		if (cardCounter === 0 && level <= 4) {
			switchesDisable()
			startGameInput.disabled = true;
		    timerOnOff = false;
		    startGameInput.checked = false;
        	startGameImage.src = '../data/images/start.png';
			startGameButton.childNodes[3].style.opacity = .2;
			messageWrapper.style.visibility = "visible";
            message.innerHTML = 'Great job!';
		} 
		if (cardCounter === 0 && level > 4) {
			reset()
	} 
	}, 1000);
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
	let countSeconds = setInterval(() => {
	  if(timerOnOff){
		seconds--;
	  }
	  time.innerHTML = seconds;
	 
	  if (seconds === 0) {
		  clearInterval(countSeconds);
		  switchesDisable();
		  messageWrapper.style.visibility = "visible";
		  message.innerHTML = 'More luck next time! ';
	      startGameInput.disabled = true;
		  startGameInput.checked = true;
		  startGameButton.childNodes[3].style.opacity = .2;
          startGameImage.src = '../data/images/start.png';
		  cardWrapper.forEach((i, index) => {
			i.removeEventListener("click", rotateCard);
			i.removeEventListener("click", playSound);
			i.removeEventListener("click", game);
			seconds = 1
			setTimeout(() => {
				if(i.style.visibility !== "hidden"){
					i.classList.add("rotate");
					i.childNodes[2].play();
				}
			}, index * 175)
		});
	  }
	  seconds <= 10 ? time.style.color = "#FF7070" : time.style.color = "#06A7A7";  
	}, 1000)
  }

function reset() {
	cardCounter = 0;
	level = 1;
	seconds = 25;
	time.innerHTML = seconds;
	currentLevel.innerHTML = level;
	makeGame();
	pauseGame();
	messageWrapper.style.visibility = "hidden";
};

function setNextLevel() {
	if(level < 4) {
		level++;
		currentLevel.innerHTML = level;
    	cardCounter = 0;
			messageWrapper.style.visibility = "hidden";
		makeGame();
	} else {
		reset()
	}
};
	
function playGame() {
	switchesEnable()
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

currentLevel.innerHTML = level;
nextLevel.addEventListener('click', setNextLevel);
continueAfterWin.addEventListener('click', setNextLevel);
resetGame.addEventListener('click', reset);
startGameInput.addEventListener('change', playPause);
switchVisual.addEventListener("change", rotateOnOff);
switchSound.addEventListener("change", soundOnOff);
switchTime.addEventListener("change", timeOnOf);

runGame(makeGame, timer);
pauseGame();