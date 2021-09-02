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

function getRandom(x) {
	return x[Math.floor(Math.random() * x.length)];
}

function addListener(element, func) {
	return element.addEventListener('click', func);
}

function removeListener(element, func) {
	return element.removeEventListener('click', func);
}

export { stopGame, continueGame, getRandom, addListener, removeListener };