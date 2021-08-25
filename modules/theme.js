const theme = () => {
	let backTheme = document.querySelectorAll('.back')
	let container = document.querySelector('#container');
	let border = document.querySelector('#border');
	let startGameButton = document.querySelector('#startGameButton');
	let roundedLevelTimer = document.querySelectorAll(".roundedLevelTimer ");
	let gameButtons = document.querySelectorAll(".gameButtons");
	let slider = document.querySelectorAll(".slider");
    let switchTheme = document.querySelector('#switchTheme');
	let rulesWrapper = document.querySelector('#rulesWrapper');
	let rulesImages = document.querySelectorAll('.rulesImages')
	let convexDarkShadow = "2px 2px 2px #0D0D10, inset 3px 3px 3px #313132, inset -3px -3px 3px rgba(29, 29, 30, 100)";
	let convexLightShadow = "2px 2px 2px #D7D7D9, inset 3px 3px 3px rgb(255, 255, 255), inset -3px -3px 3px rgba(174, 174, 192, 0.25)"; 
	let concaveDarkShadow = "inset -3px -3px 6px rgba(57, 57, 57, 0.5), inset 3px 3px 6px rgba(14, 14, 15, 100)";
	let concaveLightShadow = "inset -3px -3px 6px rgb(255, 255, 255), inset 3px 3px 6px rgb(210, 210, 211, 100)"; 
	let darkBorder = "0.5px solid #1A1A1B";
	let lightBorder = "0.5px solid #FFFFFF";
	let dark = "#262627";
	let light = "#F0F0F3";

	if (!switchTheme.checked) {
		setTimeout(() => {
			backTheme.forEach(i => {
				i.src = "./data/images/backB.svg"
			})
		}, 25);
		
		rulesImages.forEach(i => {
			let myString = i.src.split('');
			myString.splice(51, 1, 'B');
			i.src = myString.join('');
		});
		
		Object.assign(messageWrapper.style, { backgroundColor: 'rgba(38, 38, 39, 0.95)', color: light })
		Object.assign(container.style, { backgroundColor: dark, color: light })
		Object.assign(border.style, { backgroundColor: dark, boxShadow: convexDarkShadow })
		Object.assign(startGameButton.style, { backgroundColor: dark, boxShadow: convexDarkShadow })
		Object.assign(continueAfterWin.style, { backgroundColor: dark, color: light, boxShadow: convexDarkShadow })
		roundedLevelTimer.forEach(el => {
			Object.assign(el.style, { backgroundColor: dark, boxShadow: concaveDarkShadow })
		})
		gameButtons.forEach(el => {
			Object.assign(el.style, { backgroundColor: dark, color: light, boxShadow: convexDarkShadow })
		})
		slider.forEach(el => {
			Object.assign(el.style, { backgroundColor: dark, boxShadow: concaveDarkShadow, border: darkBorder })
		})
		Object.assign(rulesWrapper.style, { backgroundColor: dark, color: light, boxShadow: concaveDarkShadow })

	} else {
		setTimeout(() => {
			backTheme.forEach(i => {
				i.src = "./data/images/backW.svg"
			   })
		}, 25);
		rulesImages.forEach(i => {
			let myString = i.src.split('');
			myString.splice(51, 1, 'W');
			i.src = myString.join('');
		});
		Object.assign(messageWrapper.style, { backgroundColor: 'rgba(240, 240, 243, 0.8)', color: dark })
		Object.assign(container.style, { backgroundColor: light, color: dark })
		Object.assign(border.style, { backgroundColor: light, boxShadow: convexLightShadow  })
		Object.assign(startGameButton.style, { backgroundColor: light, boxShadow: convexLightShadow })
		Object.assign(continueAfterWin.style, { backgroundColor: light, color: dark, boxShadow: convexLightShadow })
		roundedLevelTimer.forEach(el => {
			Object.assign(el.style, { backgroundColor: light, boxShadow: concaveLightShadow })
		})
		gameButtons.forEach(el => {
			Object.assign(el.style, { backgroundColor: light, color: dark, boxShadow: convexLightShadow })
		})
		slider.forEach(el => {
			Object.assign(el.style, { backgroundColor: light, boxShadow: concaveLightShadow, border: lightBorder })
		})
		Object.assign(rulesWrapper.style, { backgroundColor: light, color: dark, boxShadow: concaveLightShadow })
	}
	
}

const startBtnState = () => {
	startGameInput.checked ? 
	startGameImage.src = '../data/images/pause.png' : 
	startGameImage.src = '../data/images/start.png'
}

startGameInput.addEventListener('change', startBtnState);
switchTheme.checked = true;
switchTheme.addEventListener("change", theme);
export default theme;
