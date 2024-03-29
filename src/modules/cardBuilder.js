const addClassAndAttribute = (element, className, attribute) => {
    element.classList.add(className);
    Object.keys(attribute).forEach((key) => {
        element.setAttribute(key, attribute[key]);
    });
};

const makeCards = (dataPack, game, switchTheme) => {
    return dataPack.forEach(() => {
        const createCards = document.createElement('div');
        createCards.classList.add('cardWrapper');
        game.appendChild(createCards);
        const frontImage = document.createElement('img');
        const backImage = document.createElement('img');
        const audio = document.createElement('audio');
        addClassAndAttribute(backImage, 'back', {
            src: switchTheme.checked
                ? './assets/images/backB1.svg'
                : './assets/images/backB1.svg',
            alt: 'backImage',
        });
        addClassAndAttribute(frontImage, 'front', {src: '', alt: 'frontImage'});
        addClassAndAttribute(audio, 'audio', {src: '', preload: 'auto'});
        /* addClassAndAttribute(audio, 'audio', {src: '', preload: 'auto', autoPlay: 'true', muted: 'true'}); */
        createCards.append(frontImage, backImage, audio);
    });
};

export default makeCards;
