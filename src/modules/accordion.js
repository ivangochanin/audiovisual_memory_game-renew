let accordionTrigger = document.querySelectorAll('.accordionTrigger');

/* function openPanel() {
    let panel = this.nextElementSibling;
    panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + "px";
}

accordionTrigger.forEach(i => {
    i.addEventListener('click', openPanel);
}) */


for (let i = 0; i < accordionTrigger.length; i++) {
	accordionTrigger[i].addEventListener('click', function () {
		for (j = 0; j < accordionTrigger.length; j++) {
			if (j !== i)
				accordionTrigger[j].nextElementSibling.style.maxHeight = null;
				accordionTrigger[j].childNodes[3].style.transform = null;
		}
		let panel = this.nextElementSibling;
		let panelArrow = this.childNodes[3].childNodes[3].childNodes[1];
		panel.style.maxHeight
			? (panel.style.maxHeight = null, panelArrow.style.transform = null)
			: (panel.style.maxHeight = panel.scrollHeight + 'px', panelArrow.style.transform = "rotate(-180deg)");
	});
}

// Translate into gsap
// or
// Find es6 elegant solution with nested loop outerIndex !== innerIndex

