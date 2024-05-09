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


const infoEditBtn = document.getElementById("infoEdit");
const addressEditBtn = document.getElementById("addressEdit");
const cardEditBtn = document.getElementById("cardEdit");
const passwordEditBtn = document.getElementById("passwordEdit");

const userEditOverlay = document.getElementById("userEditOverlay");
const addressEditOverlay = document.getElementById("addressEditOverlay");
const cardEditOverlay = document.getElementById("cardEditOverlay");
const passwordEditOverlay = document.getElementById("passwordEditOverlay");


infoEditBtn.addEventListener("click", function () {
  userEditOverlay.style.display = "block";
});

addressEditBtn.addEventListener("click", function () {
  addressEditOverlay.style.display = "block";
});

cardEditBtn.addEventListener("click", function () {
  cardEditOverlay.style.display = "block";
});
passwordEditBtn.addEventListener("click", function () {
  passwordEditOverlay.style.display = "block";
});

document.addEventListener("click", function (event) {
  if (
    !event.target.closest(".overlay-content") &&
    !event.target.closest(".edit-btn")
  ) {
    userEditOverlay.style.display = "none";
    addressEditOverlay.style.display = "none";
    cardEditOverlay.style.display = "none";
  }
});

/********************************************************************/
function editUserInfo() {

  var firstName = document.getElementById("fname").innerText;
  var lastName = document.getElementById("lname").innerText;
  var email = document.getElementById("email").innerText;
  var phone = document.getElementById("phone").innerText;

  document.getElementById("editFirstName").value = firstName;
  document.getElementById("editLastName").value = lastName;
  document.getElementById("editEmail").value = email;
  document.getElementById("editPhone").value = phone;

  document.getElementById("userEditOverlay").style.display = "block";
}

function saveUserInfo() {

  var editedFirstName = document.getElementById("editFirstName").value;
  var editedLastName = document.getElementById("editLastName").value;
  var editedEmail = document.getElementById("editEmail").value;
  var editedPhone = document.getElementById("editPhone").value;

  document.getElementById("fname").innerText = editedFirstName;
  document.getElementById("lname").innerText = editedLastName;
  document.getElementById("email").innerText = editedEmail;
  document.getElementById("phone").innerText = editedPhone;

  document.getElementById("userEditOverlay").style.display = "none";
}

const deleteAccountLink = document.querySelector("#deleteAcc");
deleteAccountLink.addEventListener("click", deleteAccount);
function deleteAccount() {
  const overlay = document.querySelector("#warning-popup");
  const closeBtn = document.querySelector("#cancellingReq");
  const confirmDeleteBtn = document.querySelector("#confirmBtn");

  overlay.style.display = "flex";

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay || event.target === closeBtn) {
      overlay.style.display = "none";
    }
  });

  confirmDeleteBtn.addEventListener("click", () => {
    overlay.style.display = "none";
    // window.location.href = ".html";  //This should redirects to the login/signup page or homepage after account deletion.
  });
}

function editAddressInfo() {
  var country = document.getElementById("country").innerText;
  var city = document.getElementById("city").innerText;

  document.getElementById("editCountry").value = country;
  document.getElementById("editCity").value = city;

  document.getElementById("addressEditOverlay").style.display = "block";
}

function saveAddressInfo() {
  var editedCountry = document.getElementById("editCountry").value;
  var editedCity = document.getElementById("editCity").value;

  document.getElementById("country").innerText = editedCountry;
  document.getElementById("city").innerText = editedCity;

  document.getElementById("addressEditOverlay").style.display = "none";
}

function editPasswordInfo() {
  var password = document.getElementById("password");
  document.getElementById("editPassword").value = password;
  document.getElementById("passwordEditOverlay").style.display = "block";
}
function savePassword() {
  var newPassword = document.getElementById("editPassword").value;
  document.getElementById("password").innerText = newPassword;
  document.getElementById("passwordEditOverlay").style.display = "none";
}
function editCardInfo() {
  var password = document.getElementById("card");
  document.getElementById("editCardNum").value = password;
  document.getElementById("cardEditOverlay").style.display = "block";
}
function saveCardInfo() {
  var newPassword = document.getElementById("editCardNum").value;
  document.getElementById("card").innerText = newPassword;
  document.getElementById("cardEditOverlay").style.display = "none";
}
