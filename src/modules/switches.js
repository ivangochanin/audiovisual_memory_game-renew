
function disableSwitch(switchInput, switchElement) {
    return [
        switchInput.disabled = true,
		switchElement.style.pointerEvents = "none",
		switchElement.style.opacity = ".25"
    ]
}

function enableSwitch(switchInput, switchElement) {
    return [
        switchInput.disabled = false,
		switchElement.style.pointerEvents = "auto",
		switchElement.style.opacity = "1"
    ]
}

export {disableSwitch, enableSwitch}

