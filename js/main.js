var boton = document.querySelector("#btn");
var menu = document.querySelector("header .hamburguesa");
var topLine = document.querySelector(".line.top");
var middleLine = document.querySelector(".line.middle");
var bottomLine = document.querySelector(".line.bottom");
const dateElement = document.querySelector("h4");

boton.addEventListener("click", function () {
  menu.classList.toggle("mostrar");
  topLine.classList.toggle("top-clicked");
  middleLine.classList.toggle("middle-clicked");
  bottomLine.classList.toggle("bottom-clicked");
});

document
  .getElementById("search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const searchEngine = document.getElementById("search-engine").value;
    const query = document.getElementById("search-input").value;
    window.open(searchEngine + encodeURIComponent(query), "_blank");
  });

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function updateDate() {
  const date = new Date();
  const day = capitalizeFirstLetter(
    date.toLocaleString("es-ES", { weekday: "long" })
  ); // Día de la semana
  const month = capitalizeFirstLetter(
    date.toLocaleString("es-ES", { month: "long" })
  ); // Mes
  const dayOfMonth = date.getDate(); // Día del mes
  const year = date.getFullYear(); // Año

  dateElement.textContent = `${day} - ${month} ${dayOfMonth} - ${year}`;
}

updateDate();
