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
        window.location.href = "../index.html";
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
// Function to create a new modal box
function createModal() {
    var modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = 'forgotPasswordModal';
    var modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.innerHTML = `
        <span class="close">&times;</span>
        <p>Choose your favorite color:</p>
        <div class="login__input-group">
            <label for="favorite-color-dropdown" id="favorite-color-question"></label>
            <select id="favorite-color-dropdown">
                <option value="" disabled selected></option>
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="purple">Purple</option>
                <option value="orange">Orange</option>
                <option value="pink">Pink</option>
                <option value="grey">Grey</option>
            </select>
        </div>
        <button id="confirmButton">Confirm</button>`;
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    return modal;
}

// Function to handle modal opening
function openModal() {
    var modal = createModal();
    modal.style.display = 'block';
}

// Function to handle modal closing
function closeModal() {
    var modal = document.getElementById('forgotPasswordModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.removeChild(modal);
    }
}

// Add event listener to the "Forgot Password?" link
document.querySelector('.forgot-password-link').addEventListener('click', function(event) {
    // Prevent default action (following the link)
    event.preventDefault();

    // Open the modal
    openModal();
});

// Close the modal when clicking on the close button
document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('close')) {
        // Close the modal
        closeModal();
    }
});

// Close the modal when clicking outside of it
window.addEventListener('click', function(event) {
    var modal = document.getElementById('forgotPasswordModal');
    if (modal && event.target == modal) {
        closeModal();
    }
});

// Function to handle confirm button click
function confirmFavoriteColor() {
    // Close the modal
    closeModal();
}

// Add event listener to the confirm button
document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'confirmButton') {
        // Prevent default action (submitting the form)
        event.preventDefault();

        // Perform validation and other actions if needed

        // Call function to handle confirm button click
        confirmFavoriteColor();
    }
});

// Hide modal on page load
window.addEventListener('load', function() {
    closeModal();
});
