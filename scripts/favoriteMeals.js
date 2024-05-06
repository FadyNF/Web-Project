document.addEventListener("DOMContentLoaded", function () {
  var favoriteMeals = JSON.parse(localStorage.getItem("favoriteMeals")) || [];

  var favoriteContainer = document.getElementById("favorite-container");
  if (favoriteMeals.length > 0) {
    favoriteMeals.forEach(function (mealHTML, index) {
      var div = document.createElement("div");
      div.innerHTML = mealHTML;

      var removeButton = document.createElement("button");
      removeButton.textContent = "Remove from Favorites";
      removeButton.onclick = function () {
        removeFromFavorites(index);
      };
      div.appendChild(removeButton);
      favoriteContainer.appendChild(div);
    });
  } else {
    favoriteContainer.textContent = "There are no meals added to favorites.";
  }
});

// Function to remove meal from favorites
function removeFromFavorites(index) {
  var favoriteMeals = JSON.parse(localStorage.getItem("favoriteMeals")) || [];

  favoriteMeals.splice(index, 1);

  localStorage.setItem("favoriteMeals", JSON.stringify(favoriteMeals));

  location.reload();
}
