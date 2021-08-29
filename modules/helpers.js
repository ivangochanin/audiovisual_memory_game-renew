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


export { stopGame, continueGame };