const gameWrapperSection = document.querySelector('#gameWrapperSection');
const customContainer = document.querySelector('#customContainer');

const rotateGameSections = () => {
	//console.log('clicked');
	//console.log(customContainer.classList);
	customContainer.classList.toggle("rotateSections");
	gameWrapperSection.classList.toggle("rotateSections");
}

export default rotateGameSections;


