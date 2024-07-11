// Создать навигационное меню, которое будет открываться, выезжая из края экрана.
// Само меню - абсолютно позиционированный блок с заданным свойством transform: translateX,
// которое будет меняться в зависимости от состояния меню.

const menu = document.querySelector(".menu");
const cancel = document.querySelector(".cancel");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.remove("hiddenNav");
  nav.classList.add("showNav");
});

cancel.addEventListener("click", () => {
  nav.classList.remove("showNav");
  nav.classList.add("hiddenNav");
});
