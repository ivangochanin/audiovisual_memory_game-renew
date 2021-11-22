### RULES
- describe all settings possibilities
- no theme change

### ALL
- buttons hover
- animations timing renew
- initial loading
- disable - turn off both switches or if all switches off - disable all or ? or turn off both switches === popup bet mode

### RESPONSIVE
- turn off score on mobile devices

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

### TEST GAME