document.addEventListener("DOMContentLoaded", function() {
  const productButtons = document.querySelectorAll(".product-button");

  // Add event listener to each product button
  productButtons.forEach(button => {
      button.addEventListener("click", function() {
          // Reset all buttons
          productButtons.forEach(btn => {
              btn.classList.remove("active");
          });

          // Set the clicked button as active
          button.classList.add("active");

          // Remove active class from all product info divs
          document.querySelectorAll(".product-info").forEach(info => {
              info.classList.remove("active");
          });

          // Add active class to the product info div corresponding to the clicked button
          const targetId = button.getAttribute("data-target");
          const productInfo = document.getElementById(targetId);
          productInfo.classList.add("active");

          // Change title and paragraph content for Colavita if the button clicked is Colavita
          if (targetId === "colavita") {
              const colavitaTitle = document.querySelector("#colavita .product-info h3");
              const colavitaDescription = document.querySelector("#colavita .product-info p");
              colavitaTitle.textContent = "Oil and vinegar powered by the sun";
              colavitaDescription.textContent = "Colavita’s bottles aren’t the only thing about them that’s green! This Italian goods company—known for its olive oil and vinegar—participates in the Net Carbon Zero program for all imports with their partner Kuehne+Nagel, the largest worldwide freight forwarder. Additionally, Colavita uses solar power for all its U.S. and Italy facilities.";
          }
      });
  });
});
