document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('input-email').value;
    var password = document.getElementById('input-password').value;

    // Define the email and password combinations for the two accounts
    var account1 = {
        email: "user@gmail.com",
        password: "1234"
    };

    var account2 = {
        email: "admin@gmail.com",
        password: "4321"
    };

    // Check if the entered email and password match account1
    if (email === account1.email && password === account1.password) {
        // Redirect to a new page with "FreshBites" written in the middle
        window.location.href = "freshbites.html";
    }
    // Check if the entered email and password match account2
    else if (email === account2.email && password === account2.password) {
        // Redirect to a new page with "HELLO ADMIN" written in the middle
        window.location.href = "Admin.html";
    }
    // If no match found, log an error message
    else {
        console.log("Invalid email or password");
    }
});

// Add event listener to the signup link
document.querySelector('.signup-link').addEventListener('click', function(event) {
    // Prevent default action (following the link)
    event.preventDefault();
    
    // Redirect to the signup page
    window.location.href = "signup.html";
});

// Toggle dark mode
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const container = document.querySelector('.container');

darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
});
