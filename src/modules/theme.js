const theme = () => {
    const backTheme = document.querySelectorAll('.back')
    const container = document.querySelector('#container');
    const border = document.querySelector('#border');
    const startGameButton = document.querySelector('#startGameButton');
    const roundedLevelTimer = document.querySelectorAll('.roundedLevelTimer');
    const gameButtons = document.querySelectorAll('.gameButtons');
    const levelAfterWin = document.querySelector('#levelAfterWin');
    const switchButtons = document.querySelectorAll('.switch');
    const switchTheme = document.querySelector('#switchTheme');
    const rulesWrapper = document.querySelector('#rulesWrapper');
    const rulesImages = document.querySelectorAll('.rulesImages');
    const indicatorWrapper = document.querySelectorAll('.indicatorWrapper');
    const messageWrapper = document.querySelector("#messageWrapper");
    const continueAfterWin = document.querySelector("#continueAfterWin");
    const convexDarkShadow = '2px 2px 2px #0D0D10, inset 3px 3px 3px #313132, inset -3px -3px 3px rgba(29, 29, 30, 100)';
    const convexLightShadow = '2px 2px 2px #D7D7D9, inset 3px 3px 3px rgb(255, 255, 255), inset -3px -3px 3px rgba(174, 174, 192, 0.25)';
    const concaveDarkShadow = 'inset -3px -3px 6px rgba(57, 57, 57, 0.5), inset 3px 3px 6px rgba(14, 14, 15, 100)';
    const concaveLightShadow = 'inset -3px -3px 6px rgb(255, 255, 255), inset 3px 3px 6px rgb(210, 210, 211, 100)';
    const indicatorShadowLight = 'inset -3px -3px 6px rgba(255, 255, 255, 0.5), inset 3px 3px 3px rgba(210, 210, 211, 0.5)';
    const indicatorShadowDark = 'inset -3px -3px 6px rgba(57, 57, 57, 0.5), inset 3px 3px 3px rgb(28, 28, 29, 0.5)';
    const darkBorder = '0.5px solid #1A1A1B';
    const lightBorder = '0.5px solid #FFFFFF';
    const dark = '#262627';
    const light = '#F0F0F3';

    if (!switchTheme.checked) {
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
        Object.assign(container.style, {backgroundColor: dark, color: light});
        Object.assign(border.style, {backgroundColor: dark, boxShadow: convexDarkShadow});
        Object.assign(startGameButton.style, {backgroundColor: dark, boxShadow: convexDarkShadow});
        Object.assign(continueAfterWin.style, {backgroundColor: dark, color: light, boxShadow: convexDarkShadow});
        Object.assign(levelAfterWin.style, {backgroundColor: light, color: dark});

        roundedLevelTimer.forEach(el => {
            Object.assign(el.style, {backgroundColor: dark, boxShadow: concaveDarkShadow, border: darkBorder});
        });
        indicatorWrapper.forEach(el => {
            Object.assign(el.style, {backgroundColor: dark, boxShadow: indicatorShadowDark, border: darkBorder});
        });
        gameButtons.forEach(el => {
            Object.assign(el.style, {
                backgroundColor: dark,
                color: light,
                boxShadow: convexDarkShadow,
                border: darkBorder
            });
        });
        switchButtons.forEach(el => {
            Object.assign(el.style, {backgroundColor: dark, boxShadow: convexDarkShadow, border: darkBorder});
        });
        Object.assign(rulesWrapper.style, {backgroundColor: dark, color: light, boxShadow: concaveDarkShadow});

    } else {
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
        Object.assign(container.style, {backgroundColor: light, color: dark});
        Object.assign(border.style, {backgroundColor: light, boxShadow: convexLightShadow});
        Object.assign(startGameButton.style, {backgroundColor: light, boxShadow: convexLightShadow});
        Object.assign(continueAfterWin.style, {backgroundColor: light, color: dark, boxShadow: convexLightShadow});
        Object.assign(levelAfterWin.style, {backgroundColor: dark, color: light});

        roundedLevelTimer.forEach(el => {
            Object.assign(el.style, {backgroundColor: light, boxShadow: concaveLightShadow, border: lightBorder})
        });
        indicatorWrapper.forEach(el => {
            Object.assign(el.style, {backgroundColor: light, boxShadow: indicatorShadowLight, border: lightBorder})
        });
        gameButtons.forEach(el => {
            Object.assign(el.style, {
                backgroundColor: light,
                color: dark,
                boxShadow: convexLightShadow,
                border: lightBorder
            })
        });
        switchButtons.forEach(el => {
            Object.assign(el.style, {backgroundColor: light, boxShadow: convexLightShadow, border: lightBorder})
        });
        Object.assign(rulesWrapper.style, {backgroundColor: light, color: dark, boxShadow: concaveLightShadow});
    }
}

export default theme;
