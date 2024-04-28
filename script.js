document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('input-email').value;
    var password = document.getElementById('input-password').value;

    console.log("Email:", email);
    console.log("Password:", password);
});
