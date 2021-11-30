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
- show level on settings section
- code refactoring

### BUG
- add time in different scenarios

### RESPONSIVE
- SETTINGS 2 GAME V.V. rotate - same as cards
- turn off score(face) on mobile devices
- board info bar - icons instead titles - level, time, instr ... - on small devices
- careful with large screens - sections - max-width/max-height
- gameBoard different width on levels
- Help max width on small devices
- Stop everything on switch games Sections
- time seconds fixed width

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