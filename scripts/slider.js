// Handling cuisine tabs
const cuisineTabBox = document.querySelector(".cuisines .tabs-bar");
const cuisineArrowIcons = document.querySelectorAll(".cuisines .icon i");

const handleGlobalIcon = () => {
    let scrollVal = Math.round(cuisineTabBox.scrollLeft);
    let maxScrollWidth = cuisineTabBox.scrollWidth - cuisineTabBox.clientWidth;
    cuisineArrowIcons[0].parentElement.style.display =
      scrollVal > 0 ? "flex" : "none";
    cuisineArrowIcons[1].parentElement.style.display =
      maxScrollWidth > scrollVal ? "flex" : "none";
  };
  


cuisineArrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    cuisineTabBox.scrollLeft += icon.id === "left-cuisine" ? -350 : 350;
    setTimeout(()=>handleGlobalIcon(),50);
  });
});

const cuisineTabs = document.querySelectorAll(".cuisines .tab");

cuisineTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tab.classList.toggle("active");
  });
});

// Handling dishes tabs
const dishesTabBox = document.querySelector(".dishes .tabs-bar");
const dishesArrowIcons = document.querySelectorAll(".dishes .icon i");
const handleDishIcon = () => {
    let scrollVal = Math.round(dishesTabBox.scrollLeft);
    let maxScrollWidth = dishesTabBox.scrollWidth - dishesTabBox.clientWidth;
    dishesArrowIcon[0].parentElement.style.display =
      scrollVal > 0 ? "flex" : "none";
    dishesArrowIcon[1].parentElement.style.display =
      maxScrollWidth > scrollVal ? "flex" : "none";
  };
  
dishesArrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    dishesTabBox.scrollLeft += icon.id === "left-dishes" ? -350 : 350;
    setTimeout(()=>handleDishIcon(),50);
  });
});

const dishesTabs = document.querySelectorAll(".dishes .tab");

dishesTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tab.classList.toggle("active");
  });
});
