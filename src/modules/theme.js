const theme = () => {
    const font_default = document.querySelectorAll('.font_default');  
    const font_thin = document.querySelectorAll('.font_thin'); 
    const container = document.querySelector('#container');
    const sections = document.querySelectorAll('.sections');
    const switchTheme = document.querySelector('#switchTheme');
    const switchThemeText = document.querySelector('#switchThemeText');
    const front = document.querySelectorAll('.front');
    const backTheme = document.querySelectorAll('.back')
    const iconWrapper = document.querySelectorAll('.iconWrapper');
    const gameButtons = document.querySelectorAll('.gameButtons');
    const switcherSlider = document.querySelectorAll('.switcherSlider');
    const radioInstrument = document.getElementsByName('radioInstrument');
    const radioMode = document.getElementsByName('radioMode');
    const radioFace = document.getElementsByName('radioFace');
    const accordionArrow = document.querySelectorAll('.accordionArrow');
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
    const grayDark = '#505258';
    const grayLight = '#c7c8c9';

    if (!switchTheme.checked) {
        switchThemeText.innerHTML = "Dark";
        setTimeout(() => { backTheme.forEach(i => { i.src = './assets/images/backB.svg'})}, 25);
        setTimeout(() => { accordionArrow.forEach(i => { i.src = './assets/icons/upDownDark.png'})}, 25);
        font_default.forEach(el => { Object.assign(el.style, {fontFamily: "fontThin", color: darkFont_default})});
        font_thin.forEach(el => { Object.assign(el.style, {fontFamily: "fontUltralight", color: darkFont_thin})});
        container.style.backgroundImage = containerDark;
        sections.forEach(el => { el.style.backgroundColor = dark });
        front.forEach(el => { el.style.border = "1px solid #25286b" });
        iconWrapper.forEach(el => { el.style.backgroundColor = darkWrapper });
        gameButtons.forEach(el => { el.style.backgroundColor = darkWrapper });
        switcherSlider.forEach(el => { 
            // .switcherSlider:before - https://css-irl.info/quick-tip-style-pseudo-elements-with-javascript-using-custom-properties/
            el.style.setProperty('--background', '#1D1F28'); 
            el.previousElementSibling.checked ? el.style.backgroundColor = grayDark : el.style.backgroundColor = blueDark
                el.addEventListener('click', function () { 
                    this.previousElementSibling.checked ? this.style.backgroundColor = blueDark : this.style.backgroundColor = grayDark
                });
            });

            radioInstrument.forEach(i => { 
                i.checked ? i.nextElementSibling.style.backgroundColor = blueDark : i.nextElementSibling.style.backgroundColor = grayDark
                i.addEventListener('change', function() {
                    if(this.checked) {
                        radioInstrument.forEach(i => { 
                            i.nextElementSibling.style.backgroundColor = grayDark
                        }); 
                        this.nextElementSibling.style.backgroundColor = blueDark;
                    } 
                })
            })
            radioMode.forEach(i => { 
                i.checked ? i.nextElementSibling.style.backgroundColor = blueDark : i.nextElementSibling.style.backgroundColor = grayDark
                i.addEventListener('change', function() {
                    if(this.checked) {
                        radioMode.forEach(i => { 
                            i.nextElementSibling.style.backgroundColor = grayDark
                        }); 
                        this.nextElementSibling.style.backgroundColor = blueDark;
                    } 
                })
            })
            radioFace.forEach(i => { 
                i.checked ? i.nextElementSibling.style.backgroundColor = blueDark : i.nextElementSibling.style.backgroundColor = grayDark
                i.addEventListener('change', function() {
                    if(this.checked) {
                        radioFace.forEach(i => { 
                            i.nextElementSibling.style.backgroundColor = grayDark
                        }); 
                        this.nextElementSibling.style.backgroundColor = blueDark;
                    } 
                })
            })


    } else {
        switchThemeText.innerHTML = "Light";
        setTimeout(() => { backTheme.forEach(i => { i.src = './assets/images/backW.svg'})}, 25);
        setTimeout(() => { accordionArrow.forEach(i => { i.src = './assets/icons/upDownLight.png'})}, 25);
        font_default.forEach(el => { Object.assign(el.style, {fontFamily: "fontLight", color: lightFont_default})});
        font_thin.forEach(el => { Object.assign(el.style, {fontFamily: "fontThin", color: lightFont_thin})});
        container.style.backgroundImage = containerLight;
        sections.forEach(el => { el.style.backgroundColor = light });
        front.forEach(el => { el.style.border = "1px solid #0054E7" });
        iconWrapper.forEach(el => { el.style.backgroundColor = lightWrapper });
        gameButtons.forEach(el => { el.style.backgroundColor = lightWrapper });
        switcherSlider.forEach(el => { 
            el.style.setProperty('--background', '#FFFFFF'); 
            el.previousElementSibling.checked ? el.style.backgroundColor = grayLight : el.style.backgroundColor = blueLight
            el.addEventListener('click', function(){
                this.previousElementSibling.checked ? this.style.backgroundColor = blueLight : this.style.backgroundColor = grayLight
            });
        })
        radioInstrument.forEach(i => { 
            i.checked ? i.nextElementSibling.style.backgroundColor = blueLight : i.nextElementSibling.style.backgroundColor = grayLight;
            i.addEventListener('change', function() {
                if(this.checked) {
                    radioInstrument.forEach(i => { 
                        i.nextElementSibling.style.backgroundColor = grayLight;
                    }); 
                    this.nextElementSibling.style.backgroundColor = blueLight;
                } 
            })
        })
        radioMode.forEach(i => { 
            i.checked ? i.nextElementSibling.style.backgroundColor = blueLight : i.nextElementSibling.style.backgroundColor = grayLight;
            i.addEventListener('change', function() {
                if(this.checked) {
                    radioMode.forEach(i => { 
                        i.nextElementSibling.style.backgroundColor = grayLight;
                    }); 
                    this.nextElementSibling.style.backgroundColor = blueLight;
                } 
            })
        })
        radioFace.forEach(i => { 
            i.checked ? i.nextElementSibling.style.backgroundColor = blueLight : i.nextElementSibling.style.backgroundColor = grayLight;
            i.addEventListener('change', function() {
                if(this.checked) {
                    radioFace.forEach(i => { 
                        i.nextElementSibling.style.backgroundColor = grayLight;
                    }); 
                    this.nextElementSibling.style.backgroundColor = blueLight;
                } 
            })
        })

    }
}

export default theme;
