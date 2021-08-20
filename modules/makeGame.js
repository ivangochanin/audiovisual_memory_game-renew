import globals from './globals.js';
import { dataLevel1, dataLevel2, dataLevel3, dataLevel4 } from "../data/data.js";
let dataPack;
let cardWrapper = globals.cardWrapper;

const addClassAndAtribute = (element, className, attribute) => {
	element.classList.add(className);
	for (let key in attribute) {
		element.setAttribute(key, attribute[key]);
	}
}

const setLevel = () => {
	globals.level === 1 ? (globals.cardCounter = 16, dataPack = dataLevel1.concat(dataLevel1)) :
	globals.level === 2 ? (globals.cardCounter = 26, dataPack = dataLevel2.concat(dataLevel2)) :
	globals.level === 3 ? (globals.cardCounter = 50, dataPack = dataLevel3.concat(dataLevel3)) :
	globals.level === 4 ? (globals.cardCounter = 74, dataPack = dataLevel4.concat(dataLevel4)) : (globals.cardCounter = 0, dataPack = []);
	return globals.level;
}

const randomOrder = () => {
	cardWrapper = document.querySelectorAll(".cardWrapper");
	cardWrapper.forEach((i) => {
		let randomData = dataPack[Math.floor(Math.random() * dataPack.length)];
		i.childNodes[0].src = randomData.img;
		i.childNodes[2].src = randomData.sound;
		let removeData = dataPack.indexOf(randomData);
		dataPack.splice(removeData, 1);
		globals.level === 1 ? Object.assign(gameBoard.style, { width: "340px", height: "auto" }) : 
		globals.level === 2 ? Object.assign(gameBoard.style, { width: "510px", height: "auto" }) : 
		globals.level === 3 ? Object.assign(gameBoard.style, { width: "680px", height: "auto"}) : 
		globals.level === 4 ? Object.assign(gameBoard.style, { width: "840px", height: "auto"}) : 
		Object.assign(gameBoard.style, { width: "0px", height: "0px" });
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

const makeGame = () => {
    gameBoard.innerHTML = null;
	globals.time.innerHTML = globals.seconds;

	setLevel();
	dataPack.forEach(() => {
		let createCards = document.createElement("div");
		createCards.classList.add("cardWrapper");
		gameBoard.appendChild(createCards);
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
	randomOrder()
}



export default makeGame;