document.addEventListener("DOMContentLoaded", function() {
    var dishes = document.querySelectorAll('.dish');
    var rotations = []; // Array to hold rotation values for each dish
    var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Initialize rotation values for each dish
    dishes.forEach(function(dish, index) {
        rotations[index] = 0;
    });

    function rotateDishes() {
        // Loop through each dish and rotate it
        dishes.forEach(function(dish, index) {
            rotations[index] += 3; // Adjust the rotation increment as needed
            dish.style.transform = `rotate(${rotations[index]}deg)`;
        });
    }

    function handleScroll() {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        var scrollDirection = st > lastScrollTop ? 'down' : 'up';

        if (scrollDirection === 'down') {
            // Downscroll code
            rotateDishes();
        } else {
            // Upscroll code
            rotations.forEach(function(rotation, index) {
                rotations[index] -= 3; // Adjust the rotation increment as needed
                dishes[index].style.transform = `rotate(${rotations[index]}deg)`;
            });
        }

        lastScrollTop = st <= 0 ? 0 : st;
    }

    window.addEventListener("scroll", handleScroll);
});


document.addEventListener("DOMContentLoaded", function() {
    var spoon = document.getElementById('spoon');
    var tomato = document.getElementById('tomato');
    var scrolled = window.pageYOffset;

    function parallax() {
        var scrolledNew = window.pageYOffset;

        // Move spoon towards the top left corner
        spoon.style.transform = "translate(-" + scrolledNew/2 + "px, -" + scrolledNew/2 + "px)";

        // Move tomato towards the top right corner
        tomato.style.transform = "translate(" + scrolledNew/2+ "px, -" + scrolledNew/2 + "px)";

        scrolled = scrolledNew;
    }

    window.addEventListener("scroll", function() {
        requestAnimationFrame(parallax);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var pepper = document.getElementById('pepper');
    var shrimp = document.getElementById('shrimp');
    var windowHeight = window.innerHeight;

    function parallax() {
        var scrolled = window.pageYOffset;

        // Calculate the distance from the top of the document to the top of the viewport
        var distanceToTop = pepper.getBoundingClientRect().top;

        // Calculate the translation values based on the distance from the top
        var translateX = 0;
        var translateY = 0;

        // If the distance to the top is negative (i.e., the element is above the viewport), pull it in
        if (distanceToTop < windowHeight) {
            translateX = Math.max(0, Math.abs(distanceToTop) / 2);
            translateY = Math.max(0, Math.abs(distanceToTop) / 2);
        }

        // Move pepper towards the top left corner
        pepper.style.transform = "translate(-" + translateX + "px, -" + translateY + "px)";

        // Move shrimp towards the top right corner
        shrimp.style.transform = "translate(" + translateX + "px, -" + translateY + "px)";
    }

    window.addEventListener("scroll", function() {
        requestAnimationFrame(parallax);
    });

    // Initial call to set initial positions
    parallax();
});

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var parallaxImage = document.querySelector('green');
  
    // Adjust the speed of parallax effect by changing the value (e.g., 0.5)
    var speed = 0.5;
    var yPos = -scrollPosition * speed + 'px';
  
    parallaxImage.style.transform = 'translate3d(0, ' + yPos + ', 0)';
  });


  
  document.addEventListener("DOMContentLoaded", function() {
    var dishes = document.querySelectorAll('.dishes');
    var rotations = []; // Array to hold rotation values for each dish
    var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Initialize rotation values for each dish
    dishes.forEach(function(dish, index) {
        rotations[index] = 0;
    });

    function rotateDishes() {
        // Loop through each dish and rotate it
        dishes.forEach(function(dish, index) {
            rotations[index] += 3; // Adjust the rotation increment as needed
            dish.style.transform = `rotate(${rotations[index]}deg)`;
        });
    }

    window.addEventListener("scroll", function() {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            // Scroll down
            rotateDishes();
        } else {
            // Scroll up (if you want to rotate in the opposite direction while scrolling up, you can change the rotation increment to a negative value)
            rotateDishes();
        }
        lastScrollTop = st <= 0 ? 0 : st; // For mobile or negative scrolling
    });
});


