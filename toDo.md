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

### ALL
- buttons hover
- hover for small devices
- initial loading
- animations timing renew
- disable whole info section on win/lose message
- disable - turn off both switches or if all switches off - disable all or ? or turn off both switches === popup bet mode
- if rotate off - disable face accordion
- win/lose - all disabled
- small reverb on sounds
- remove unused ids and classes from html
- code refactoring

### BUG
- add time in different scenarios

### RESPONSIVE
- turn off score(face) on mobile devices
- board info bar - icons instead titles - level, time, instr ... - on small devices
- careful with large screens - sections - max-width/max-height
- gameBoard different width on levels

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

### TEST GAME