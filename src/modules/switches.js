function switchesDisable(switchVisual, switchSound, switchTime) {
    return [
        switchVisual.disabled = true,
        switchSound.disabled = true,
        switchTime.disabled = true,
    ]
}

function switchesEnable(switchVisual, switchSound, switchTime) {
    return [
        switchVisual.disabled = false,
        switchSound.disabled = false,
        switchTime.disabled = false,
    ]
}

export {switchesDisable, switchesEnable}