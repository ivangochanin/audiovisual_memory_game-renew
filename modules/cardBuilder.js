const addClassAndAtribute = (element, className, attribute) => {
	element.classList.add(className);
    Object.keys(attribute).forEach(key => {
        element.setAttribute(key, attribute[key]);
      });
}

const makeCards = (dataPack) => {
	dataPack.forEach(() => {
		const createCards = document.createElement("div");
		createCards.classList.add("cardWrapper");
		gameBoard.appendChild(createCards);
		const frontImage = document.createElement("img");
		const backImage = document.createElement("img");
		const audio = document.createElement("audio");
		addClassAndAtribute(backImage, "back", {
			src: switchTheme.checked ? "./data/images/backW.svg" : "./data/images/backB.svg",
			alt: "backImage",
		});
		addClassAndAtribute(frontImage, "front", { src: "", alt: "frontImage" });
		addClassAndAtribute(audio, "audio", { src: "", preload: "auto" });
		createCards.append(frontImage, backImage, audio);
	});
}

export default makeCards