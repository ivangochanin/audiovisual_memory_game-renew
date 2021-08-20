import globals from './globals.js';
import makeGame from './makeGame.js';
import theme from './theme.js';


const rulesButton = () => {
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

const resetButton = () => {
	globals.cardCounter = 0;
	globals.level = 1;
	globals.seconds = 25;
	globals.timerOnOff = true;
	globals.cardWrapper = [];
	globals.time.innerHTML = globals.seconds;
	currentLevel.innerHTML = globals.level;
	gameBoard.innerHTML = null;
	theme();
	makeGame();
};

resetGame.addEventListener("click", resetButton);




currentLevel.innerHTML = globals.level;

export { rulesButton, resetButton };
