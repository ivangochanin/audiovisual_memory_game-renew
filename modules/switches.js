function rotateOnOff(cardWrapper, switchVisual, rotateCard) {
	cardWrapper.forEach((i) => {
		switchVisual.checked
			? i.removeEventListener("click", rotateCard)
			: i.addEventListener("click", rotateCard);
	});
}

function soundOnOff(cardWrapper, switchSound, playSound) {
	cardWrapper.forEach((i) => {
		switchSound.checked
			? i.removeEventListener("click", playSound)
			: i.addEventListener("click", playSound);
	});
}

function timeOnOf(switchTime, timerOnOff) {
	switchTime.checked ?
	timerOnOff = false : timerOnOff = true
}

export {rotateOnOff, soundOnOff, timeOnOf}