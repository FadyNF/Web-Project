function printWarning(elementID, message) {
  document.getElementById(elementID).innerHTML = message;
}

function checkInput(form) {
  var searchQuery = form.search.value;
  if (searchQuery.trim() === "") {
    printWarning("searchErr", "Please enter a search query");
    return false;
  } else {
    var RegEx = /^[a-zA-Z\s]+$/;
    if (!RegEx.test(searchQuery)) {
      printWarning("searchErr", "Please enter a valid query (letters only)");
      return false;
    } else {
      printWarning("searchErr", "");
      return true;
    }
  }
}

function showBox() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "block";

  const feedbackContent = document.getElementById("feedbackContent");
  feedbackContent.style.display = "block";
  feedbackContent.style.zIndex = "1000";
}

function showTextArea() {
  const feedbackForm = document.getElementById("feedback");
  feedbackForm.style.display = "block";
}

function showFeedbackForm() {
  const feedbackForm = document.getElementById("feedback");
  feedbackForm.style.display =
    feedbackForm.style.display === "none" ? "block" : "none";
}

function exitFeedback() {
  const feedbackContent = document.getElementById("feedbackContent");
  feedbackContent.style.display = "none";

  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}

function feedbackInput(form) {
  var review = form.review.value.trim();
  var reviewErr = document.getElementById("reviewErr");

  if (review === "") {
    printWarning("reviewErr", "Please enter your opinion before submitting");
    return false;
  } else {
    var regEx = /^[a-zA-Z0-9\s]+$/;
    if (!regEx.test(review)) {
      printWarning("reviewErr", "Please enter a valid review (letters, numbers, and spaces only)");
      return false;
    } else {
      printWarning("reviewErr", "");
      return true;
    }
  }
}

//meal description functions

const accordionContent = document.querySelectorAll(".description-content");

accordionContent.forEach((item, index) => {
  let header = item.querySelector("header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");

    let description = item.querySelector(".content-description"); // Updated selector
    if (item.classList.contains("open")) {
      description.style.height = `${description.scrollHeight}px`;
    } else {
      description.style.height = "0px";
    }
    removeOpen(index);
  });
});

function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");

      let des = item2.querySelector(".content-description"); // Updated selector
      des.style.height = "0px";
    }
  });
}

function displayDescritpion(overlayID, mealName, mealSides) {
  var id = document.getElementById(overlayID);
  var name = id.querySelector("#dishName");
  var extension = id.querySelector("#extension");

  name.textContent = mealName;
  extension.textContent = mealSides;

  id.style.display = "block";
}

function closeWindow(ID) {
  var window = document.getElementById(ID);
  window.style.display = "none";
}


// Function to add meal to favorites
function addToFavorites(event, dishId) {
  var dishElement = document.getElementById(dishId);
  var clonedCard = dishElement.cloneNode(true);
  var clonedCardHTML = clonedCard.outerHTML;
  var favoriteMeals = JSON.parse(localStorage.getItem('favoriteMeals')) || [];
  favoriteMeals.push(clonedCardHTML);
  localStorage.setItem('favoriteMeals', JSON.stringify(favoriteMeals));
  alert('Meal has been added to favorites!');
  event.target.classList.add('favorited');
}
