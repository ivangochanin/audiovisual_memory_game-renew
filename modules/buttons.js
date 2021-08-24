const rules = () => {
	let openRulesButtnon = document.querySelector("#openRulesButton");
	let closeRulesButton = document.querySelector("#closeRulesButton");
	let rulesWrapper = document.querySelector("#rulesWrapper");

	const toggleRules = () => {
		let className = rulesWrapper.getAttribute("class");
		className === "rulesClose"
			? (rulesWrapper.className = "rulesOpen")
			: (rulesWrapper.className = "rulesClose");
	};
	openRulesButtnon.addEventListener("click", toggleRules);
	closeRulesButton.addEventListener("click", toggleRules);
};


export { rules };
