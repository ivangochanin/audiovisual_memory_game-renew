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

function randomEndSound(x) {
	return x[Math.floor(Math.random() * x.length)];
}

export { stopGame, continueGame, randomEndSound };