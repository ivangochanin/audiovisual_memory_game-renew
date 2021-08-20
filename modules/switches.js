import globals from './globals.js';

function rotateCard() {
	if (openedCards < 2) {
		this.classList.add("rotate");
	} else {
		globals.cardWrapper.forEach((i) => {
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
		globals.cardWrapper.forEach((i) => {
			i.removeEventListener("click", playSound);
		});
	}
}

function rotateOnOff() {
	globals.cardWrapper.forEach((i) => {
		switchVisual.checked
			? i.removeEventListener("click", rotateCard)
			: i.addEventListener("click", rotateCard);
	});
}

function soundOnOff() {
	globals.cardWrapper.forEach((i) => {
		switchSound.checked
			? i.removeEventListener("click", playSound)
			: i.addEventListener("click", playSound);
	});
}

function timeOnOf() {
	switchTime.checked ?
	timerOnOff = false : timerOnOff = true
}

switchVisual.addEventListener("click", rotateOnOff);
switchSound.addEventListener("click", soundOnOff);
switchTime.addEventListener("click", timeOnOf);