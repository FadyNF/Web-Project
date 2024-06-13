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

  // Clear previous error messages
  document.getElementById("firstNameError").innerText = "";
  document.getElementById("lastNameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("phoneError").innerText = "";

  var emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
  var phoneRegex = /^\d+$/;

  if (editedFirstName.trim() === "") {
    document.getElementById("firstNameError").innerText =
      "Please enter your First Name.";
    return;
  }

  if (editedLastName.trim() === "") {
    document.getElementById("lastNameError").innerText =
      "Please enter your Last Name.";
    return;
  }

  if (!emailRegex.test(editedEmail)) {
    document.getElementById("emailError").innerText =
      "Please enter a valid email address.";
    return;
  }

  if (!phoneRegex.test(editedPhone)) {
    document.getElementById("phoneError").innerText =
      "Please enter a valid phone number.";
    return;
  }

  document.getElementById("fname").innerText = editedFirstName;
  document.getElementById("lname").innerText = editedLastName;
  document.getElementById("email").innerText = editedEmail;
  document.getElementById("phone").innerText = editedPhone;

  document.getElementById("userEditOverlay").style.display = "none";
}
/********************************************************************/

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

  document.getElementById("countryError").innerText = "";
  document.getElementById("cityError").innerText = "";

  if (editedCountry.trim() === "") {
    document.getElementById("countryError").innerText =
      "Please enter the country.";
    return;
  }

  if (editedCity.trim() === "") {
    document.getElementById("cityError").innerText =
      "Please enter the city/state.";
    return;
  }

  document.getElementById("country").innerText = editedCountry;
  document.getElementById("city").innerText = editedCity;

  document.getElementById("addressEditOverlay").style.display = "none";
}
/********************************************************************/
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
/********************************************************************/
function editCardInfo() {
  var password = document.getElementById("card");
  document.getElementById("editCardNum").value = password;
  document.getElementById("cardEditOverlay").style.display = "block";
}
function saveCardInfo() {
  var editedCardNum = document.getElementById("editCardNum").value;

  document.getElementById("cardError").innerText = "";

  var cardRegex = /^\d{16}$/;
  if (!cardRegex.test(editedCardNum)) {
    document.getElementById("cardError").innerText =
      "Please enter a valid 16-digit card number.";
    return;
  }

  document.getElementById("card").innerText = newPassword;
  document.getElementById("cardEditOverlay").style.display = "none";
}
/******************************************************************************/
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
     window.location.href = "../index.html";  //This should redirects to the login/signup page or homepage after account deletion.
  });
}
/******************************************************************************/
const logoutLink = document.querySelector("#logoutLink");
logoutLink.addEventListener("click", function (event) {
  event.preventDefault();
   window.location.href = "/pages/login.html";  //This should redirects to the login/signup page after logging out.
});
