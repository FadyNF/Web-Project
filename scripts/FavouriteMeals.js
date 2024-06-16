window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".nav-bar");
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
  });



document.querySelectorAll('.delete-button').forEach(button => {
    button.addEventListener('click', function() {
        const mealItem = this.closest('.meal-item');
        const modal = document.getElementById('myModal');
        modal.style.display = 'block';

        const confirmButton = modal.querySelector('.confirm');
        const cancelButton = modal.querySelector('.cancel');

        confirmButton.onclick = function() {
            mealItem.remove();
            modal.style.display = 'none';
        }

        cancelButton.onclick = function() {
            modal.style.display = 'none';
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    });
});