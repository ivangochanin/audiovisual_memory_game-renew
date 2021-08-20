import { dataLevel1, dataLevel2, dataLevel3, dataLevel4 } from "./data/data.js";
let gameWrapper = document.querySelector('#gameWrapper');
let gameBoard = document.querySelector('#gameBoard');
let resetGame = document.querySelector('#resetGame');
let startGame = document.querySelector('#startGame');
let pauseGame = document.querySelector('#pauseGame');
let nextLevel = document.querySelector('#nextLevel');
let currentLevel = document.querySelector('#currentLevel');
let time = document.querySelector('#timer');
let openedCards = 0;
let theme = true;
let timerOnOff = true;
let dataPack, cardWrapper, seconds, cardCounter, firstCard, secondCard;
let level = sessionStorage.level ? parseInt(sessionStorage.level) : 1;

gameWrapper.style.backgroundColor = "#262627";

gsap.to(".infoWrapper", {duration: 2, delay: 1, opacity: 1});
gsap.to("#timer", {duration: 2, delay: 2, opacity: 1});
gsap.to(".currentLevel", {duration: 2, delay: 2, opacity: 1});

function addClassAndAtribute(element, className, attribute) {
	element.classList.add(className);
	for (let key in attribute) {
		element.setAttribute(key, attribute[key]);
	}
}

function setLevel() {
	level === 2 ? cardCounter = 26 : 
	level === 3 ? cardCounter = 50 : 
	level === 4 ? cardCounter = 74 : cardCounter = 16;
	level === 2 ? (dataPack = dataLevel2.concat(dataLevel2)) : 
	level === 3 ? (dataPack = dataLevel3.concat(dataLevel3)) : 
	level === 4 ? (dataPack = dataLevel4.concat(dataLevel4)) :
	(dataPack = dataLevel1.concat(dataLevel1));
	return level;
}

function makeGame() {
	setLevel();
	dataPack.forEach(() => {
		let createCards = document.createElement("div");
		createCards.classList.add("cardWrapper");
		document.querySelector("#gameBoard").appendChild(createCards);
		let frontImage = document.createElement("img");
		let backImage = document.createElement("img");
		let audio = document.createElement("audio");
		addClassAndAtribute(backImage, "back", {
			src: "./images/backB.svg",
			alt: "backImage",
		});
		addClassAndAtribute(frontImage, "front", { src: "", alt: "frontImage" });
		addClassAndAtribute(audio, "audio", { src: "", preload: "auto" });
		createCards.append(frontImage, backImage, audio);
	});
	randomOrder()
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
		continueGame()
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

		stopGame()
		if(firstCard.childNodes[0].currentSrc === secondCard.childNodes[0].currentSrc && firstCard.childNodes[2].currentSrc === secondCard.childNodes[2].currentSrc) {
			setTimeout(() => {
				level === 2 ? seconds += 6 : level === 3 ? seconds += 11 : level === 4 ? seconds += 11 : seconds += 6;
				firstCard.style.visibility = "hidden";
				secondCard.style.visibility = "hidden";
				openedCards = 0;
				continueGame();
			}, 500);
			cardCounter = cardCounter - 2
		} else {
			setTimeout(() => {
				firstCard.classList.remove("rotate");
				secondCard.classList.remove("rotate");
				openedCards = 0;
				continueGame()
			}, 500);
		}
		
	}	
	setTimeout(() => {
		if (cardCounter === 0 && level <= 4) {
			level++;
			sessionStorage.setItem("level", level);
			window.location.reload();
		} 
		if (cardCounter === 0 && level > 4) {
			level = 1;
			sessionStorage.removeItem("level");
			window.location.reload();
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

function stopGame() {
	cardWrapper.forEach((i) => {
		i.removeEventListener("click", rotateCard);
		i.removeEventListener("click", playSound);
		i.removeEventListener("click", game);
	});
}

function continueGame() {
	cardWrapper.forEach((i) => {
		rotateOnOff();
		soundOnOff();
		i.addEventListener("click", game);
		i.style.pointerEvents = 'auto';
	});
}

function themeDarkLight() {
	let backTheme = document.querySelectorAll('.back')
     if(switchTheme.checked) {
		 theme = true;
		 backTheme.forEach(i => {
			 i.src = "./images/backW.svg"
			})
			gameWrapper.style.backgroundColor = "#ebeaea"; 
		} else {
			theme = false;
			backTheme.forEach(i => {
				i.src = "./images/backB.svg"
			})
		gameWrapper.style.backgroundColor = "#262627";
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

switchTheme.addEventListener("click", themeDarkLight);
switchVisual.addEventListener("click", rotateOnOff);
switchSound.addEventListener("click", soundOnOff);
switchTime.addEventListener("click", timeOnOf);

function timer() {
	level === 2 ? seconds = 50 : level === 3 ? seconds = 75 : level === 4 ? seconds = 100 : seconds = 25;
	let countSeconds = setInterval(() => {
	  if(timerOnOff){
		seconds--;
	  }
	  time.innerHTML = seconds;
	 
	  if (seconds === 0) {
		clearInterval(countSeconds);
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
	  seconds <= 15 ? time.style.color = "orange" : time.style.color = "#262627"
	}, 1000)
  }

function reset() {
	  sessionStorage.removeItem("level");
	  level = 1;
	  window.location.reload();
	}
	resetGame.addEventListener('click', reset);
	
function setNextLevel() {
	if(level < 4) {
		level++;
		sessionStorage.setItem("level", level);
		window.location.reload();
	} else {
		reset()
	}
}

function playGameFunc() {
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
	
function pauseGameFunc() {
	  timerOnOff = false;
	  cardWrapper.forEach((i) => {
		  i.removeEventListener("click", rotateCard);
		  i.removeEventListener("click", playSound);
		  i.removeEventListener("click", game);
	  });
  }
	
nextLevel.addEventListener('click', setNextLevel);
pauseGame.addEventListener('click', pauseGameFunc);
startGame.addEventListener('click', playGameFunc);
currentLevel.innerHTML = level

function runGame() {
	makeGame();
	setTimeout(() => {
		timer()
	}, 1000);
}

runGame()
pauseGameFunc()



  

