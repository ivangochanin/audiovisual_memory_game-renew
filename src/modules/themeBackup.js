const theme = () => {
    const backTheme = document.querySelectorAll('.back')
    const container = document.querySelector('#container');
    const border = document.querySelector('#border');
    const startGameButton = document.querySelector('#startGameButton');
    const boardInfoParameters = document.querySelectorAll('.boardInfoParameters');
    const gameButtons = document.querySelectorAll('.gameButtons');
    const switchTheme = document.querySelector('#switchTheme');
    const switchThemeText = document.querySelector('#switchThemeText');
    const rulesImages = document.querySelectorAll('.rulesImages');
    const indicatorWrapper = document.querySelectorAll('.indicatorWrapper');
    const messageWrapper = document.querySelector("#messageWrapper");
    const continueAfterWin = document.querySelector("#continueAfterWin");
    const resetAfterWin = document.querySelector("#resetAfterWin");
    const levelAfterWin = document.querySelector('#levelAfterWin');
    const darkBorder = '5px solid #1A1A1B';
    const lightBorder = '5px solid #FFFFFF';
    const containerDark = '#6B69D1'; // linear gradient inside variable ? linear-gradient(252.35deg, #161D3B 1.48%, #31397E 49.71%, #6B69D1 97.43%);
    const containerLight = '#EEEEEE';
    const dark = '#1D1F28';
    const light = '#FFFFFF';

    if (!switchTheme.checked) {
        switchThemeText.innerHTML = "Dark";
        setTimeout(() => {
            backTheme.forEach(i => {
                i.src = './assets/images/backB.svg';
            })
        }, 25);

        rulesImages.forEach(i => {
            let myString = i.src.split('');
            myString.splice(myString.length - 5, 1, 'B');
            i.src = myString.join('');
        });

        Object.assign(messageWrapper.style, {backgroundColor: 'rgba(38, 38, 39, 0.95)', color: light});
        Object.assign(container.style, {backgroundColor: containerDark, color: light});
        Object.assign(border.style, {backgroundColor: dark});
        Object.assign(startGameButton.style, {backgroundColor: dark});
        Object.assign(continueAfterWin.style, {backgroundColor: dark, color: light});
        Object.assign(resetAfterWin.style, {backgroundColor: dark, color: light});
        Object.assign(levelAfterWin.style, {backgroundColor: light, color: dark});

        boardInfoParameters.forEach(el => {
            Object.assign(el.style, {backgroundColor: dark, border: darkBorder});
        });
        indicatorWrapper.forEach(el => {
            Object.assign(el.style, {backgroundColor: dark, border: darkBorder});
        });
        gameButtons.forEach(el => {
            Object.assign(el.style, {
                backgroundColor: dark,
                color: light,
                border: darkBorder
            });
        });

    } else {
        switchThemeText.innerHTML = "Light";
        setTimeout(() => {
            backTheme.forEach(i => {
                i.src = './assets/images/backW.svg';
            })
        }, 25);
        rulesImages.forEach(i => {
            let myString = i.src.split('');
            myString.splice(myString.length - 5, 1, 'W');
            i.src = myString.join('');
        });
        Object.assign(messageWrapper.style, {backgroundColor: 'rgba(240, 240, 243, 0.8)', color: dark});
        Object.assign(container.style, {backgroundColor: containerLight, color: dark});
        Object.assign(border.style, {backgroundColor: light});
        Object.assign(startGameButton.style, {backgroundColor: light});
        Object.assign(continueAfterWin.style, {backgroundColor: light, color: dark});
        Object.assign(resetAfterWin.style, {backgroundColor: light, color: dark});
        Object.assign(levelAfterWin.style, {backgroundColor: dark, color: light});

        boardInfoParameters.forEach(el => {
            Object.assign(el.style, {backgroundColor: light, border: lightBorder})
        });
        indicatorWrapper.forEach(el => {
            Object.assign(el.style, {backgroundColor: light, border: lightBorder})
        });
        gameButtons.forEach(el => {
            Object.assign(el.style, {
                backgroundColor: light,
                color: dark,
                border: lightBorder
            })
        });
    }
}

export default theme;
