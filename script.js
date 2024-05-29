let acc = document.getElementsByClassName("accordion");
let icon = document.getElementsByClassName("iconButton");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      icon[i].src = './assets/images/icon-plus.svg';
    } else {
      panel.style.display = "block";
      icon[i].src = './assets/images/icon-minus.svg';
    }
  });
}