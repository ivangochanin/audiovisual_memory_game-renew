let accordionTrigger = document.querySelectorAll('.accordionTrigger');
let accordionArrow = document.querySelectorAll('.accordionArrow');

const accordion = () => {	
	for (let i = 0; i < accordionTrigger.length; i++) {
		accordionTrigger[i].addEventListener('click', function () {
			for (let j = 0; j < accordionTrigger.length; j++) {
				if (j !== i)
				accordionTrigger[j].nextElementSibling.style.maxHeight = null;
				accordionArrow[j].style.transform = null;
			}
			let panel = this.nextElementSibling;
			let panelArrow = accordionArrow[i];
			if (panel.style.maxHeight){
				panel.style.maxHeight = null; 
				panelArrow.style.transform = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + 'px'; 
				panelArrow.style.transform = "rotate(-180deg)";
			}
		});
	} 
}

export default accordion;