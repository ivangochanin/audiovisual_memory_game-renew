const settingsWrapperSection = document.querySelector('#settingsWrapperSection');
const gameWrapperSection = document.querySelector('#gameWrapperSection');
const switchNavButton = document.querySelector('#switchNavButton');
let goToSettings = false

const switchNavbar = () => {
	if(!goToSettings) {
		settingsWrapperSection.style.left = '0%';
		gameWrapperSection.style.left = '100%';
		goToSettings = true;
	} else {
		settingsWrapperSection.style.left = '-100%';
		gameWrapperSection.style.left = '0%';
		goToSettings = false;
	}
}

export default switchNavbar;