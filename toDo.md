# NEW
- rules - describe all settings possibilities
- full info section
- count how many seconds finished game + wrong guesses
- rules - no theme change
- board info push other elements left/right on change instruments, face and mode
- next level icon 4 light theme

### ALL
- add bet card background

### SWITCHES
- disable - turn off both switches or if all switches off - disable all or ? or turn off both switches === popup bet mode
- send switched(all buttons as an object) to sessionStorage - enable load next level with preview user settings(theme)

### GAME
- responsive design
- test game

### THEME
- DRY -> find solution: 
const radioInputs = document.querySelectorAll('.radioInputs');
  radioInputs.forEach(i => { 
      i.checked ? i.nextElementSibling.style.backgroundColor = blueDark : i.nextElementSibling.style.backgroundColor = grayDark
      i.addEventListener('change', function() {
        console.log('this',this.name);
        if(this.checked) {
            //let arr = Array.from(this.name)
            this.name.forEach(i => { 
                console.log('inside',i);
                i.nextElementSibling.style.backgroundColor = grayDark
            }); 
            this.nextElementSibling.style.backgroundColor = blueDark;
        } 
    })
}) 


#### ACA
*Remove all possible css from js into css - theme colors ...*

> script.js
- add true/false mechanism inside functions that you call with eventListener - where
  you need to add and remove listener. Just ask inside func it some true/false then listener
  will work or not.


