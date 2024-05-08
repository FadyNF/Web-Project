const navBar = document.querySelector("nav"),
       sidebar = document.querySelectorAll(".menu-icon"),
       overlay = document.querySelector(".overlay");

       sidebar.forEach((button) => {
       button.addEventListener("click", () => {
         navBar.classList.toggle("open");
       });
     });

     overlay.addEventListener("click", () => {
       navBar.classList.remove("open");
     });