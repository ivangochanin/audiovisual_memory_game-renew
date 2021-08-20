import globals from './modules/globals.js';
import makeGame from './modules/makeGame.js';
import theme from './modules/theme.js';
import animations from './modules/animations.js';
import {rulesButton, resetButton} from './modules/buttons.js';
import timer from './modules/timer.js';
let resetGame = document.querySelector('#resetGame');
let seconds, firstCard, secondCard;




theme();
rulesButton();
animations();
makeGame();

const runGame = () => {
	setTimeout(() => {
		timer()
	}, 1000);
}

/* runGame() */
const toggleStartButtonImage = () => {
	startGame.childNodes[1].src === "./data/images/start.png" ? startGame.childNodes[1].src = "./data/images/pauseB.png" : startGame.childNodes[1].src = "./data/images/start.png";
   /*  return startGame.childNodes[1].src = "./data/images/pauseB.png"; */
}


startGame.addEventListener('click', runGame)






