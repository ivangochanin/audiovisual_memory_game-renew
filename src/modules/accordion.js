let panelTrigger = document.querySelectorAll(".panelTrigger");

function openPanel() {
    panelTrigger.forEach(i => {
        i.classList.contains("active") ? i.classList.remove("active") : null;
    })
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + "px";
}

panelTrigger.forEach(i => {
    i.addEventListener('click', openPanel)
})
