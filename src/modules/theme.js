const theme = () => {
    const font_default = document.querySelectorAll('.font_default');  
    const font_thin = document.querySelectorAll('.font_thin'); 
    const container = document.querySelector('#container');
    const sections = document.querySelectorAll('.sections');
    const messageWrapper = document.querySelector('#messageWrapper');
    const switchTheme = document.querySelector('#switchTheme');
    const switchThemeText = document.querySelector('#switchThemeText');
    const backTheme = document.querySelectorAll('.back');
    const helpWrapper = document.querySelector('#helpWrapper');
    const iconWrapper = document.querySelectorAll('.iconWrapper');
    const indicators = document.querySelectorAll('.indicators');
    const gameButtons = document.querySelectorAll('.gameButtons');
    const nextLevel = document.querySelector('#nextLevel')
    const switcherSlider = document.querySelectorAll('.switcherSlider');
    const radioInstrument = document.getElementsByName('radioInstrument');
    const radioMode = document.getElementsByName('radioMode');
    const radioFace = document.getElementsByName('radioFace');
    const accordionArrow = document.querySelectorAll('.accordionArrow');
    const meta = document.querySelector("[name=theme-color][content]");
    const metaIos = document.querySelector("[name=apple-mobile-web-app-status-bar-style][content]");
    const containerDark = 'linear-gradient(252.35deg, #161D3B 1.48%, #31397E 49.71%, #6B69D1 97.43%)';
    const containerLight = 'linear-gradient(252.35deg, #EEEEEE 1.48%, #EEEEEE 49.71%, #EEEEEE 97.43%)';
    const containerDarkMobile = 'linear-gradient(252.35deg, #1D1F28 1.48%, #1D1F28 49.71%, #1D1F28 97.43%)';
    const containerLightMobile = 'linear-gradient(252.35deg, #FFFFFF 1.48%, #FFFFFF 49.71%, #FFFFFF 97.43%)';
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
    const grayDark = '#505258';
    const grayLight = '#c7c8c9';
    const helperDark = '#EEEEEE';


    if (!switchTheme.checked) {
        switchThemeText.innerHTML = "Dark";
        setTimeout(() => { backTheme.forEach(i => { i.src = './assets/images/backB.svg'})}, 25);
        setTimeout(() => { accordionArrow.forEach(i => { i.src = './assets/icons/upDownDark.png'})}, 25);
        nextLevel.src = './assets/icons/continueDark.png';
        font_default.forEach(el => { Object.assign(el.style, {fontFamily: "fontThin", color: darkFont_default})});
        font_thin.forEach(el => { Object.assign(el.style, {fontFamily: "fontUltralight", color: darkFont_thin})});
        document.documentElement.clientWidth < 576 ? container.style.backgroundImage = containerDarkMobile : container.style.backgroundImage = containerDark;
			window.addEventListener("resize", () => {
				document.documentElement.clientWidth < 576 ? container.style.backgroundImage = containerDarkMobile : container.style.backgroundImage = containerDark;
			})
        sections.forEach(el => { el.style.backgroundColor = dark });
        helpWrapper.style.backgroundColor = helperDark;
        messageWrapper.style.backgroundColor = dark;
        iconWrapper.forEach(el => { el.style.backgroundColor = darkWrapper });
        gameButtons.forEach(el => { el.style.backgroundColor = blueDark});
        indicators.forEach(el => { el.style.backgroundColor = grayDark });
        meta.content = dark;
        metaIos.content = dark;
        switcherSlider.forEach(el => { 
            // .switcherSlider:before - https://css-irl.info/quick-tip-style-pseudo-elements-with-javascript-using-custom-properties/
            el.style.setProperty('--background', '#1D1F28'); 
            el.previousElementSibling.checked ? el.style.backgroundColor = grayDark : el.style.backgroundColor = blueDark
                el.addEventListener('click', function () { 
                    this.previousElementSibling.checked ? this.style.backgroundColor = blueDark : this.style.backgroundColor = grayDark
                });
            });
            
            const radioButtonsDark = (radioButton) => {
                radioButton.forEach(i => { 
                    i.checked ? i.nextElementSibling.style.backgroundColor = blueDark : i.nextElementSibling.style.backgroundColor = grayDark
                    i.addEventListener('change', function() {
                        if(this.checked) {
                            radioButton.forEach(i => { 
                                i.nextElementSibling.style.backgroundColor = grayDark
                            }); 
                            this.nextElementSibling.style.backgroundColor = blueDark;
                        } 
                    })
                })
            }
            radioButtonsDark(radioInstrument);
            radioButtonsDark(radioMode);
            radioButtonsDark(radioFace);

    } else {
        switchThemeText.innerHTML = "Light";
        setTimeout(() => { backTheme.forEach(i => { i.src = './assets/images/backW.svg'})}, 25);
        setTimeout(() => { accordionArrow.forEach(i => { i.src = './assets/icons/upDownLight.png'})}, 25);
        nextLevel.src = './assets/icons/continueLight.png';
        font_default.forEach(el => { Object.assign(el.style, {fontFamily: "fontLight", color: lightFont_default})});
        font_thin.forEach(el => { Object.assign(el.style, {fontFamily: "fontThin", color: lightFont_thin})});
        document.documentElement.clientWidth < 576 ? container.style.backgroundImage = containerLightMobile : container.style.backgroundImage = containerLight;
			window.addEventListener("resize", () => {
				document.documentElement.clientWidth < 576 ? container.style.backgroundImage = containerLightMobile : container.style.backgroundImage = containerLight;
			})
        sections.forEach(el => { el.style.backgroundColor = light });
        helpWrapper.style.backgroundColor = light;
        messageWrapper.style.backgroundColor = light;
        iconWrapper.forEach(el => { el.style.backgroundColor = lightWrapper });
        gameButtons.forEach(el => { el.style.backgroundColor = blueLight});
        indicators.forEach(el => { el.style.backgroundColor = grayLight });
        meta.content = light;
        metaIos.content = light;
        switcherSlider.forEach(el => { 
            el.style.setProperty('--background', '#FFFFFF'); 
            el.previousElementSibling.checked ? el.style.backgroundColor = grayLight : el.style.backgroundColor = blueLight
            el.addEventListener('click', function(){
                this.previousElementSibling.checked ? this.style.backgroundColor = blueLight : this.style.backgroundColor = grayLight
            });
        })

        const radioButtonsLight = (radioButton) => {
            radioButton.forEach(i => { 
                i.checked ? i.nextElementSibling.style.backgroundColor = blueLight : i.nextElementSibling.style.backgroundColor = grayLight;
                i.addEventListener('change', function() {
                    if(this.checked) {
                        radioButton.forEach(i => { 
                            i.nextElementSibling.style.backgroundColor = grayLight;
                        }); 
                        this.nextElementSibling.style.backgroundColor = blueLight;
                    } 
                })
            })
        }

        radioButtonsLight(radioInstrument);
        radioButtonsLight(radioMode);
        radioButtonsLight(radioFace);
    }
}

export default theme;
