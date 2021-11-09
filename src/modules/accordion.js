let accordionTrigger = document.querySelectorAll(".accordionTrigger");

function openPanel() {
    let panel = this.nextElementSibling;
    panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + "px";
}

accordionTrigger.forEach(i => {
    i.addEventListener('click', openPanel)
})
