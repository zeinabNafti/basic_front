const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClass();
        panel.classList.add('Active');
    });
});

function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('Active');
    });
}
