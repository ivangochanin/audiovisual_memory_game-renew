### SANDRIK
- icons - same width
- Add iGo logo - link to github game

### BOARD INFO
`Div 1` 
- Play
- SMG Title - desktop *hide*  
- Settings btn - desktop *hide*

`Div 2`
- Level - mobile `icon`
- Time - mobile `icon`
- indicator

`Div 3`
- Instrument - mobile `text` 50%
- Mode - mobile `text` 50%
- Face - mobile *hide*

### RULES
- describe all settings possibilities
- score(face) on mobile devices - explanation

### ALL
- buttons hover
- animations timing renew
- initial loading
- disable whole info section on win/lose message
- disable - turn off both switches or if all switches off - disable all or ? or turn off both switches === popup bet mode
- if rotate off - disable face accordion
- win/lose - all disabled
- small reverb on sounds

### BUG
- add time in different scenarios

### RESPONSIVE
- turn off score(face) on mobile devices
- board info bar - icons instead titles - level, time, instr ... - on small devices
- only add back button on info(settings bar) and show goto settings on game board
- careful with large screens - sections - max-width/max-height

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

### README
- Enthusiasm
- Ask for help. The best way to load sound samples?

### TEST GAME