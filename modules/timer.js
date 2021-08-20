import globals from './globals.js';

let switchTime = document.querySelector('#switchTime')
const timeOnOf = () => {
	switchTime.checked ? globals.timerOnOff = false : globals.timerOnOff = true
    }
switchTime.addEventListener("click", timeOnOf);

const timer = () => {
	globals.level === 1 ? globals.seconds = 26 : globals.level === 2 ? globals.seconds = 51 : globals.level === 3 ? globals.seconds = 76 : globals.level === 4 ? globals.seconds = 101 : globals.seconds = 0;
	let countSeconds = setInterval(() => {
	  if(globals.timerOnOff){
		globals.seconds--;
	  }
	  globals.time.innerHTML = globals.seconds;
	 
	  if (globals.seconds < 1) {
		clearInterval(countSeconds);
		globals.cardWrapper.forEach((i, index) => {
			i.removeEventListener("click", rotateCard);
			i.removeEventListener("click", playSound);
			i.removeEventListener("click", game);
			globals.seconds = 0
			setTimeout(() => {
				if(i.style.visibility !== "hidden"){
					i.classList.add("rotate");
					i.childNodes[2].play();
				}
			}, index * 175)
		});
	  }
	  if(globals.seconds <= 10) {
        globals.time.style.color = "#FF7070"; 
      } 
	}, 1000)
  }

  export default timer