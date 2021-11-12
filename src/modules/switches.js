function switchesDisable(switchRotateCard, switchSound, switchTime) {
    return [
        switchRotateCard.disabled = true,
        switchSound.disabled = true,
        switchTime.disabled = true,
    ]
}

function switchesEnable(switchRotateCard, switchSound, switchTime) {
    return [
        switchRotateCard.disabled = false,
        switchSound.disabled = false,
        switchTime.disabled = false,
    ]
}

export {switchesDisable, switchesEnable}