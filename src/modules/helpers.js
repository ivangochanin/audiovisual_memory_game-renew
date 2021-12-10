const stopGame = (cardWrapper, rotateCard, playSound, game) => {
    cardWrapper.forEach((i) => {
        i.removeEventListener("click", rotateCard);
        i.removeEventListener("click", playSound);
        i.removeEventListener("click", game);
    });
}

const continueGame = (cardWrapper, rotateOnOff, soundOnOff, game) => {
    cardWrapper.forEach((i) => {
        rotateOnOff();
        soundOnOff();
        i.addEventListener("click", game);
        i.style.pointerEvents = 'auto';
    });
}

const disableSwitch = (switchInput, switchElement) => {
    return [
        switchInput.disabled = true,
		switchElement.style.pointerEvents = "none",
		switchElement.style.opacity = ".25"
    ]
}

const enableSwitch = (switchInput, switchElement) => {
    return [
        switchInput.disabled = false,
		switchElement.style.pointerEvents = "auto",
		switchElement.style.opacity = "1"
    ]
}

const disablePanel = (panel, arrow) => {
    return [
        panel.childNodes[3].style.opacity = .25,
		panel.disabled = true,
		panel.style.pointerEvents = "none",
		panel.nextElementSibling.style.maxHeight = null, 
		arrow.style.transform = null,
    ]
}

const enablePanel = (panel) => {
    return [
        panel.childNodes[3].style.opacity = 1,
		panel.disabled = false,
		panel.style.pointerEvents = "auto",
    ]
}

const getRandom = (x) => {
    return x[Math.floor(Math.random() * x.length)];
}

export { stopGame, continueGame, disableSwitch, enableSwitch, disablePanel, enablePanel, getRandom };