const theme = () => {
    const backTheme = document.querySelectorAll('.back')
    const container = document.querySelector('#container');
    const sections = document.querySelectorAll('.sections');
    const switchTheme = document.querySelector('#switchTheme');
    const switchThemeText = document.querySelector('#switchThemeText');
    const containerDark = 'linear-gradient(252.35deg, #161D3B 1.48%, #31397E 49.71%, #6B69D1 97.43%)';
    const containerLight = 'linear-gradient(252.35deg, #EEEEEE 1.48%, #EEEEEE 49.71%, #EEEEEE 97.43%)';
    const font_default = document.querySelectorAll('.font_default');  
    const font_thin = document.querySelectorAll('.font_thin'); 
    const dark = '#1D1F28';
    const light = '#FFFFFF';
    const darkFont_default = '#E9EDF2';
    const darkFont_thin = '#8a8e96';
    const lightFont_default = '#1D1F28';
    const lightFont_thin = '#70737a';

    if (!switchTheme.checked) {
        switchThemeText.innerHTML = "Dark";
        setTimeout(() => {
            backTheme.forEach(i => {
                i.src = './assets/images/backB.svg';
            })
        }, 25);

        Object.assign(container.style, {backgroundImage: containerDark});

        sections.forEach(el => {
            Object.assign(el.style, {backgroundColor: dark});
        });
        font_default.forEach(el => {
            Object.assign(el.style, {fontFamily: "fontThin", color: darkFont_default});
        })
        font_thin.forEach(el => {
            Object.assign(el.style, {fontFamily: "fontUltralight", color: darkFont_thin});
        })

    } else {
        switchThemeText.innerHTML = "Light";
        setTimeout(() => {
            backTheme.forEach(i => {
                i.src = './assets/images/backW.svg';
            })
        }, 25);
        Object.assign(container.style, {backgroundImage: containerLight});
        
        sections.forEach(el => {
            Object.assign(el.style, {backgroundColor: light});
        });
        font_default.forEach(el => {
            Object.assign(el.style, {fontFamily: "fontLight", color: lightFont_default});
        })
        font_thin.forEach(el => {
            Object.assign(el.style, {fontFamily: "fontThin", color: lightFont_thin});
        })
    }
}

export default theme;


var background="linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%)";