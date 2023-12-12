var boton = document.querySelector("#btn");
var menu = document.querySelector("header .hamburguesa");

boton.addEventListener("click", function () {
  menu.classList.toggle("mostrar");
});
