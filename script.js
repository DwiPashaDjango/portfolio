function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const text = "Dwi Pasha Anggara Putra";
const textContainer = document.getElementById('name');
let index = 0;

function showText() {
  if (index < text.length) {
    textContainer.textContent += text.charAt(index);
    index++;
    setTimeout(showText, 100);
  }
}

showText();