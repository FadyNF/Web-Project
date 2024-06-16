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
        });
    });
  });
  window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".nav-bar");
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
  });