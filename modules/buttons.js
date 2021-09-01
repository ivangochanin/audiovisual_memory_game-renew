const rules = (pause, playPause) => {
	let openRulesButtnon = document.querySelector("#openRulesButton");
	let closeRulesButton = document.querySelector("#closeRulesButton");
	let rulesWrapper = document.querySelector("#rulesWrapper");

	const toggleRules = () => {
		let className = rulesWrapper.getAttribute("class");
		className === "rulesClose"
			? 
			(rulesWrapper.className = "rulesOpen", 
			pause(), 
			/* startGameInput.checked = false, */
			startGameInput.removeEventListener('change', playPause))
			: 
			(rulesWrapper.className = "rulesClose",
			startGameInput.addEventListener('change', playPause));
	};
	openRulesButtnon.addEventListener("click", toggleRules);
	closeRulesButton.addEventListener("click", toggleRules);
};


export { rules };
