function isLoggedIn() {
    return sessionStorage.getItem('loggedIn') === 'true';
}

function getUsername() {
    return sessionStorage.getItem('username');
}

function login(username) {
    sessionStorage.setItem('loggedIn', 'true');
    sessionStorage.setItem('username', username);
}

function logout() {
    sessionStorage.clear();
}

export { isLoggedIn, getUsername, login, logout };