document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('input-email').value;
    var password = document.getElementById('input-password').value;
    var confirmPassword = document.getElementById('input-confirm-password').value;
    var passwordError = document.getElementById('password-error');
    var favoriteColorDropdown = document.getElementById('favorite-color-dropdown');
    var favoriteColorMessage = document.getElementById('favorite-color-message');

    // Remove any existing warning message
    if (favoriteColorMessage) {
        favoriteColorMessage.parentNode.removeChild(favoriteColorMessage);
    }

    // Check if the favorite color question is not answered
    if (!favoriteColorDropdown.value) {
        var message = document.createElement('p');
        message.textContent = "Please select your favorite color.";
        message.style.color = "red";
        message.id = "favorite-color-message";
        favoriteColorDropdown.parentNode.insertBefore(message, favoriteColorDropdown);
        return;
    }

    if (password !== confirmPassword) {
        passwordError.textContent = "Passwords do not match.";
    } else {
        passwordError.textContent = ""; 
        console.log("Email:", email);
        console.log("Password:", password);

        // Show success modal
        document.getElementById('successModal').style.display = 'block';

        // Redirect to login page after a delay
        setTimeout(function() {
            window.location.href = "login.html";
        }, 3000); // 3000 milliseconds = 3 seconds
    }
});

// Add event listener to the login link
document.querySelector('.login-link').addEventListener('click', function(event) {
    // Prevent default action (following the link)
    event.preventDefault();
    
    // Redirect to the login page
    window.location.href = "login.html";
});

// Close the modal when clicking outside of it
window.addEventListener('click', function(event) {
    var modal = document.getElementById('successModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Toggle dark mode
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const container = document.querySelector('.container');

darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
});

// Hide the question "What is your favorite color?" when an option is selected
const favoriteColorQuestion = document.getElementById('favorite-color-question');
const favoriteColorDropdown = document.getElementById('favorite-color-dropdown');

favoriteColorDropdown.addEventListener('change', () => {
    favoriteColorQuestion.style.display = 'none';
});
