var boton = document.querySelector("#btn");
var menu = document.querySelector("header .hamburguesa");
var topLine = document.querySelector(".line.top");
var middleLine = document.querySelector(".line.middle");
var bottomLine = document.querySelector(".line.bottom");

boton.addEventListener("click", function () {
  menu.classList.toggle("mostrar");
  topLine.classList.toggle("top-clicked");
  middleLine.classList.toggle("middle-clicked");
  bottomLine.classList.toggle("bottom-clicked");
});
