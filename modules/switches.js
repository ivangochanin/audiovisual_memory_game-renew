function switchesDisable() {
	switchVisual.disabled = true;
	switchSound.disabled = true;
	switchTime.disabled = true;
	visualSliderLine.style.opacity = .2;
	soundSliderLine.style.opacity = .2;
	timeSliderLine.style.opacity = .2;
}

function switchesEnable() {
	switchVisual.disabled = false;
	switchSound.disabled = false;
	switchTime.disabled = false;
	visualSliderLine.style.opacity = 1;
	soundSliderLine.style.opacity = 1;
	timeSliderLine.style.opacity = 1;
}

export {switchesDisable, switchesEnable}