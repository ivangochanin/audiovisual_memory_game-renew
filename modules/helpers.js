const addClassAndAtribute = (element, className, attribute) => {
	element.classList.add(className);
	for (let key in attribute) {
		element.setAttribute(key, attribute[key]);
	}
}

const stopGame = (cardWrapper, rotateCard, playSound, game) => {
	cardWrapper.forEach((i) => {
		i.removeEventListener("click", rotateCard);
		i.removeEventListener("click", playSound);
		i.removeEventListener("click", game);
	});
}

const continueGame = (cardWrapper, rotateOnOff, soundOnOff, game) => {
	cardWrapper.forEach((i) => {
		rotateOnOff();
		soundOnOff();
		i.addEventListener("click", game);
		i.style.pointerEvents = 'auto';
	});
}

const runGame = (makeGame, timer) => {
	makeGame();
	setTimeout(() => {
		timer()
	}, 1000);
}

export { addClassAndAtribute, stopGame, continueGame, runGame };