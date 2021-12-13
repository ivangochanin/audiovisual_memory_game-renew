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

const disableSwitch = (switchInput, switchElement, section) => {
    return [
        switchInput.disabled = true,
		switchElement.style.pointerEvents = "none",
		section.style.opacity = ".25"
    ]
}

const enableSwitch = (switchInput, switchElement, section) => {
    return [
        switchInput.disabled = false,
		switchElement.style.pointerEvents = "auto",
		section.style.opacity = "1"
    ]
}

const disablePanel = (section, panel, arrow) => {
    return [
        section.style.opacity = .25,
        panel.disabled = true,
		panel.style.pointerEvents = "none",
		panel.nextElementSibling.style.maxHeight = null, 
		arrow.style.transform = null,
    ]
}

const enablePanel = (section, panel) => {
    return [
        section.style.opacity = 1,
        panel.disabled = false,
		panel.style.pointerEvents = "auto",
    ]
}

const getRandom = (x) => {
    return x[Math.floor(Math.random() * x.length)];
}

export { stopGame, continueGame, disableSwitch, enableSwitch, disablePanel, enablePanel, getRandom };