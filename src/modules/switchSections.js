const gameWrapperSection = document.querySelector('#gameWrapperSection');
const customContainer = document.querySelector('#customContainer');

const rotateGameSections = () => {
	customContainer.classList.toggle("rotateSections");
	gameWrapperSection.classList.toggle("rotateSections");
}

export default rotateGameSections;


