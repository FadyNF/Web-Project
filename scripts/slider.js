const globalTabBox = document.querySelector(".cuisines .tabs-bar");
const globalArrowIcon = document.querySelectorAll(".cuisines .icon i");
const dishesTabBox = document.querySelector(".dishes .tabs-bar");
const dishesArrowIcon = document.querySelectorAll(".dishes .icon i");
globalArrowIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    globalTabBox.scrollLeft += icon.id === "left-cuisines" ? -350 : 350;
  });
});
dishesArrowIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    dishesTabBox.scrollLeft += icon.id === "left-dishes" ? -350 : 350;
  });
});
