const panels = document.querySelectorAll('.panel');
const title = document.querySelector(".ali");
title.style.color = "red";
document.addEventListener("click", () => {
  alert("HI ZEYNAB");
});
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
