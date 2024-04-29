// Handling cuisine tabs
const cuisineTabBox = document.querySelector(".cuisines .tabs-bar");
const cuisineArrowIcons = document.querySelectorAll(".cuisines .icon i");

const handleCuisineIcon = () => {
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
    setTimeout(() => handleCuisineIcon(), 50);
  });
});

const cuisineTabs = document.querySelectorAll(".cuisines .tab");
cuisineTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    cuisineTabs.forEach((otherTab) => {
      otherTab.classList.remove("active");
    });
    tab.classList.add("active");
  });
});

// Handling dishes tabs
const dishesTabBox = document.querySelector(".dishes .tabs-bar");
const dishesArrowIcons = document.querySelectorAll(".dishes .icon i");

const handleDishIcon = () => {
  let scrollVal = Math.round(dishesTabBox.scrollLeft);
  let maxScrollWidth = dishesTabBox.scrollWidth - dishesTabBox.clientWidth;
  dishesArrowIcons[0].parentElement.style.display =
    scrollVal > 0 ? "flex" : "none";
  dishesArrowIcons[1].parentElement.style.display =
    maxScrollWidth > scrollVal ? "flex" : "none";
};

dishesArrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    dishesTabBox.scrollLeft += icon.id === "left-dishes" ? -350 : 350;
    setTimeout(() => handleDishIcon(), 50);
  });
});
const dishesTabs = document.querySelectorAll(".dishes .tab");
dishesTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    dishesTabs.forEach((otherTab) => {
      otherTab.classList.remove("active");
    });
    tab.classList.add("active");
  });
});

// Handling meals tabs
const mealsTabBox = document.querySelector(".meals .meals-bar");
const mealsArrowIcons = document.querySelectorAll(".meals .icon i");

const handleMealIcon = () => {
  let scrollVal = Math.round(mealsTabBox.scrollLeft);
  let maxScrollWidth = mealsTabBox.scrollWidth - mealsTabBox.clientWidth;
  mealsArrowIcons[0].parentElement.style.display =
    scrollVal > 0 ? "flex" : "none";
  mealsArrowIcons[1].parentElement.style.display =
    maxScrollWidth > scrollVal ? "flex" : "none";
};

mealsArrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    mealsTabBox.scrollLeft += icon.id === "left-meals" ? -350 : 350;
    setTimeout(() => handleMealIcon(), 50);
  });
});

const mealsTabs = document.querySelectorAll(".meals .tab");

mealsTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    mealsTabs.forEach((otherTab) => {
      otherTab.classList.remove("active");
    });
    tab.classList.add("active");
  });
});

// Handling meal menu-item tabs
const mealTabs = document.querySelectorAll(".meals .menu-item");
mealTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    mealTabs.forEach((otherTab) => {
      otherTab.classList.remove("active");
    });
    tab.classList.add("active");
  });
});

