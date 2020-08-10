let openHam = document.querySelector(".openHam")
let closeHam = document.querySelector(".closeHam")
let sideNav = document.querySelector(".navigate")

openHam.addEventListener("click", openSideNav)
closeHam.addEventListener("click", closeSideNav)

function openSideNav() {
  sideNav.style.width = "75%"
  sideNav.style.height = "100%"
}

function closeSideNav() {
  sideNav.style.width = "0%"
  sideNav.style.height = "0%"
}