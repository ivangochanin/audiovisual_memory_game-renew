const rules = (pause, playPause, listener) => {
	let openRulesButtnon = document.querySelector("#openRulesButton");
	let closeRulesButton = document.querySelector("#closeRulesButton");
	let rulesWrapper = document.querySelector("#rulesWrapper");

	const toggleRules = () => {
		let className = rulesWrapper.getAttribute("class");
		className === "rulesClose"
			? 
			(rulesWrapper.className = "rulesOpen", 
			pause(), 
			startGameImage.style.opacity = 0.2,
            gameBoard.removeEventListener('click', listener),
			startGameInput.removeEventListener('change', playPause))
			: 
			(rulesWrapper.className = "rulesClose",
			startGameImage.style.opacity = 1,
            gameBoard.addEventListener('click', listener),
			startGameInput.addEventListener('change', playPause));
	};
	openRulesButtnon.addEventListener("click", toggleRules);
	closeRulesButton.addEventListener("click", toggleRules);
};


export { rules };
