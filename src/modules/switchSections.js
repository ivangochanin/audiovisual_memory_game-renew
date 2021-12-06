const gameWrapperSection = document.querySelector('#gameWrapperSection');
const customContainer = document.querySelector('#customContainer');

const rotateGameSections = () => {
	customContainer.classList.toggle("showSections");
	gameWrapperSection.classList.toggle("showSections");
}

export default rotateGameSections;


