const visualButton = document.querySelector("#visualButton");
const soundButton = document.querySelector("#soundButton");
const timeButton = document.querySelector("#timeButton");

function switchesDisable(switchVisual, switchSound, switchTime) {
    return [
        switchVisual.disabled = true,
        switchSound.disabled = true,
        switchTime.disabled = true,
        visualButton.style.opacity = .3,
        soundButton.style.opacity = .3,
        timeButton.style.opacity = .3,
    ]
}

function switchesEnable(switchVisual, switchSound, switchTime) {
    return [
        switchVisual.disabled = false,
        switchSound.disabled = false,
        switchTime.disabled = false,
        visualButton.style.opacity = 1,
        soundButton.style.opacity = 1,
        timeButton.style.opacity = 1,
    ]
}

export {switchesDisable, switchesEnable}