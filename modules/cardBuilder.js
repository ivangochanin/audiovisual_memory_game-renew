const addClassAndAttribute = (element, className, attribute) => {
	element.classList.add(className);
	Object.keys(attribute).forEach((key) => {
		element.setAttribute(key, attribute[key]);
	});
};

const makeCards = (dataPack, gameBoard, switchTheme) => {
return 	dataPack.forEach(() => {
		const createCards = document.createElement('div');
		createCards.classList.add('cardWrapper');
		gameBoard.appendChild(createCards);
		const frontImage = document.createElement('img');
		const backImage = document.createElement('img');
		const audio = document.createElement('audio');
		addClassAndAttribute(backImage, 'back', {
			src: switchTheme.checked
				? './data/images/backW.svg'
				: './data/images/backB.svg',
			alt: 'backImage',
		});
		addClassAndAttribute(frontImage, 'front', { src: '', alt: 'frontImage' });
		addClassAndAttribute(audio, 'audio', { src: '', preload: 'auto' });
		createCards.append(frontImage, backImage, audio);
	});
};

export default makeCards;
