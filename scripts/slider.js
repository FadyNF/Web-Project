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

// Handling meals tabs for the first meal bar
const mealsTabBox1 = document.querySelector(".meals1 .meals-bar");
const mealsArrowIcons1 = document.querySelectorAll(".meals1 .icon i");

const handleMealIcon1 = () => {
  let scrollVal = Math.round(mealsTabBox1.scrollLeft);
  let maxScrollWidth = mealsTabBox1.scrollWidth - mealsTabBox1.clientWidth;
  mealsArrowIcons1[0].parentElement.style.display =
    scrollVal > 0 ? "flex" : "none";
  mealsArrowIcons1[1].parentElement.style.display =
    maxScrollWidth > scrollVal ? "flex" : "none";
};

mealsArrowIcons1.forEach((icon) => {
  icon.addEventListener("click", () => {
    mealsTabBox1.scrollLeft += icon.id === "left-meals" ? -350 : 350;
    setTimeout(() => handleMealIcon1(), 50);
  });
});

const mealsTabs1 = document.querySelectorAll(".meals1 .menu-item");
mealsTabs1.forEach((tab) => {
  tab.addEventListener("click", () => {
    mealsTabs1.forEach((otherTab) => {
      otherTab.classList.remove("active");
    });
    tab.classList.add("active");
  });
});
// Handling meals tabs for the second meal bar
const mealsTabBox2 = document.querySelector(".meals2 .meals-bar");
const mealsArrowIcons2 = document.querySelectorAll(".meals2 .icon i");

const handleMealIcon2 = () => {
  let scrollVal = Math.round(mealsTabBox2.scrollLeft);
  let maxScrollWidth = mealsTabBox2.scrollWidth - mealsTabBox2.clientWidth;
  mealsArrowIcons2[0].parentElement.style.display =
    scrollVal > 0 ? "flex" : "none";
  mealsArrowIcons2[1].parentElement.style.display =
    maxScrollWidth > scrollVal ? "flex" : "none";
};


mealsArrowIcons2.forEach((icon) => {
  icon.addEventListener("click", () => {
    mealsTabBox2.scrollLeft += icon.id === "left-meals" ? -350 : 350;
    setTimeout(() => handleMealIcon2(), 50);
  });
});


const mealsTabs2 = document.querySelectorAll(".meals2 .menu-item");
mealsTabs2.forEach((tab) => {
  tab.addEventListener("click", () => {
    mealsTabs2.forEach((otherTab) => {
      otherTab.classList.remove("active");
    });
    tab.classList.add("active");
  });
});

// Handling meals tabs for the third meal bar
const mealsTabBox3 = document.querySelector(".meals3 .meals-bar");
const mealsArrowIcons3 = document.querySelectorAll(".meals3 .icon i");

const handleMealIcon3 = () => {
  let scrollVal = Math.round(mealsTabBox3.scrollLeft);
  let maxScrollWidth = mealsTabBox3.scrollWidth - mealsTabBox3.clientWidth;
  mealsArrowIcons3[0].parentElement.style.display =
    scrollVal > 0 ? "flex" : "none";
  mealsArrowIcons3[1].parentElement.style.display =
    maxScrollWidth > scrollVal ? "flex" : "none";
};


mealsArrowIcons3.forEach((icon) => {
  icon.addEventListener("click", () => {
    mealsTabBox3.scrollLeft += icon.id === "left-meals" ? -350 : 350;
    setTimeout(() => handleMealIcon3(), 50);
  });
});


const mealsTabs3 = document.querySelectorAll(".meals3 .menu-item");
mealsTabs3.forEach((tab) => {
  tab.addEventListener("click", () => {
    mealsTabs3.forEach((otherTab) => {
      otherTab.classList.remove("active");
    });
    tab.classList.add("active");
  });
});


// Handling meals tabs for the fourth meal bar
const mealsTabBox4 = document.querySelector(".meals4 .meals-bar");
const mealsArrowIcons4 = document.querySelectorAll(".meals4 .icon i");

const handleMealIcon4 = () => {
  let scrollVal = Math.round(mealsTabBox4.scrollLeft);
  let maxScrollWidth = mealsTabBox4.scrollWidth - mealsTabBox4.clientWidth;
  mealsArrowIcons4[0].parentElement.style.display =
    scrollVal > 0 ? "flex" : "none";
  mealsArrowIcons4[1].parentElement.style.display =
    maxScrollWidth > scrollVal ? "flex" : "none";
};


mealsArrowIcons4.forEach((icon) => {
  icon.addEventListener("click", () => {
    mealsTabBox4.scrollLeft += icon.id === "left-meals" ? -350 : 350;
    setTimeout(() => handleMealIcon4(), 50);
  });
});


const mealsTabs4 = document.querySelectorAll(".meals4 .menu-item");
mealsTabs4.forEach((tab) => {
  tab.addEventListener("click", () => {
    mealsTabs4.forEach((otherTab) => {
      otherTab.classList.remove("active");
    });
    tab.classList.add("active");
  });
});