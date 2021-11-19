const theme = () => {
    const backTheme = document.querySelectorAll('.back')
    const container = document.querySelector('#container');
    const sections = document.querySelectorAll('.sections');
    const switchTheme = document.querySelector('#switchTheme');
    const switchThemeText = document.querySelector('#switchThemeText');
    const font_default = document.querySelectorAll('.font_default');  
    const font_thin = document.querySelectorAll('.font_thin'); 
    const front = document.querySelectorAll('.front');
    const iconWrapper = document.querySelectorAll('.iconWrapper');
    const gameButtons = document.querySelectorAll('.gameButtons');
    const switcherSlider = document.querySelectorAll('.switcherSlider');
    const switchDots = document.querySelectorAll('.switchDots');
    const containerDark = 'linear-gradient(252.35deg, #161D3B 1.48%, #31397E 49.71%, #6B69D1 97.43%)';
    const containerLight = 'linear-gradient(252.35deg, #EEEEEE 1.48%, #EEEEEE 49.71%, #EEEEEE 97.43%)';
    const dark = '#1D1F28';
    const light = '#FFFFFF';
    const darkFont_default = '#E9EDF2';
    const darkFont_thin = '#8a8e96';
    const lightFont_default = '#1D1F28';
    const lightFont_thin = '#70737a';
    const darkWrapper = '#2D3037';
    const lightWrapper = '#6E6F71';
    const blueDark = '#31397E';
    const blueLight = '#0054E7';
    const darkOff = '#2D3037';
    const lightOff = '#6E6F71';

    if (!switchTheme.checked) {
        switchThemeText.innerHTML = "Dark";
        setTimeout(() => { backTheme.forEach(i => { i.src = './assets/images/backB.svg'})}, 25);
        container.style.backgroundImage = containerDark;
        sections.forEach(el => { el.style.backgroundColor = dark });
        font_default.forEach(el => { Object.assign(el.style, {fontFamily: "fontThin", color: darkFont_default})});
        font_thin.forEach(el => { Object.assign(el.style, {fontFamily: "fontUltralight", color: darkFont_thin})});
        front.forEach(el => { el.style.border = "1px solid #25286b" });
        iconWrapper.forEach(el => { el.style.backgroundColor = darkWrapper });
        gameButtons.forEach(el => { el.style.backgroundColor = darkWrapper });
        switchDots.forEach(el => { el.style.backgroundColor = dark});
        switcherSlider.forEach(el => { 
            el.previousElementSibling.checked ? el.style.backgroundColor = darkOff : el.style.backgroundColor = blueDark
        });
        switcherSlider.forEach(i => { 
                i.addEventListener('click', function(){
                    if(this.previousElementSibling.checked){ 
                        this.style.backgroundColor = blueDark
                        this.childNodes[1].style.transform = "translateX(0px)";
                     } else {
                        this.style.backgroundColor = darkOff
                        this.childNodes[1].style.transform = "translateX(-20px)";
                     }
                });
        });

    } else {
        switchThemeText.innerHTML = "Light";
        setTimeout(() => { backTheme.forEach(i => { i.src = './assets/images/backW.svg'})}, 25);
        container.style.backgroundImage = containerLight;
        sections.forEach(el => { el.style.backgroundColor = light });
        font_default.forEach(el => { Object.assign(el.style, {fontFamily: "fontLight", color: lightFont_default})});
        font_thin.forEach(el => { Object.assign(el.style, {fontFamily: "fontThin", color: lightFont_thin})});
        front.forEach(el => { el.style.border = "1px solid #0054E7" });
        iconWrapper.forEach(el => { el.style.backgroundColor = lightWrapper });
        gameButtons.forEach(el => { el.style.backgroundColor = lightWrapper });
        switchDots.forEach(el => { el.style.backgroundColor = light})
        switcherSlider.forEach(el => { 
            el.previousElementSibling.checked ? el.style.backgroundColor = lightOff : el.style.backgroundColor = blueLight
        });
        switcherSlider.forEach(i => { 
            i.addEventListener('click', function(){
                
                if(this.previousElementSibling.checked) {
                    this.style.backgroundColor = blueLight
                    this.childNodes[1].style.transform = "translateX(0px)";
                    } else { 
                    this.style.backgroundColor = lightOff
                    this.childNodes[1].style.transform = "translateX(-20px)";
                } 
            });
        })
    }
}

export default theme;
