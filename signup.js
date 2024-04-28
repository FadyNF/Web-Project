document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('input-email').value;
    var password = document.getElementById('input-password').value;
    var confirmPassword = document.getElementById('input-confirm-password').value;
    var passwordError = document.getElementById('password-error');

    if (password !== confirmPassword) {
        passwordError.textContent = "Passwords do not match.";
    } else {
        passwordError.textContent = ""; 
        console.log("Email:", email);
        console.log("Password:", password);
    }
});
