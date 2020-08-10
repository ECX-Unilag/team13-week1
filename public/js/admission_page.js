let ham = document.querySelector(".ham")
let hiddenNav = document.querySelector(".hiddenNav")

ham.addEventListener("click", openNavigation)
let navClick = 0;

function openNavigation() {
  ham.innerText = "X"
  hiddenNav.style.height = "240px"
  hiddenNav.style.width = "auto"
  navClick++;

  if (navClick % 2 === 0) {
    ham.innerHTML = "&#9776"
    hiddenNav.style.height = "0px"
    hiddenNav.style.width = "auto"
  }
}