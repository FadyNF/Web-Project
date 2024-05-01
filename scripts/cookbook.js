function printWarning(elementID, message) {
  document.getElementById(elementID).innerHTML = message;
}

function checkInput(form) {
  var searchQuery = form.search.value;
  if (searchQuery.trim() === "") {
    printWarning("searchErr", "Please enter a search query");
    return false;
  } else {
    var RegEx = /^[a-zA-Z\s]+$/;
    if (!RegEx.test(searchQuery)) {
      printWarning("searchErr", "Please enter a valid query (letters only)");
      return false;
    } else {
      printWarning("searchErr", "");
      return true;
    }
  }
}

function showBox() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "block";

  const feedbackContent = document.getElementById("feedbackContent");
  feedbackContent.style.display = "block";
  feedbackContent.style.zIndex = "1000";
}

function showTextArea() {
  const feedbackForm = document.getElementById("feedback");
  feedbackForm.style.display = "block";
}

function showFeedbackForm() {
  const feedbackForm = document.getElementById("feedback");
  feedbackForm.style.display =
    feedbackForm.style.display === "none" ? "block" : "none";
}

function exitFeedback() {
  const feedbackContent = document.getElementById("feedbackContent");
  feedbackContent.style.display = "none";

  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}

function feedbackInput(form) {
  var review = form.review.value.trim();
  var reviewErr = document.getElementById("reviewErr");

  if (review === "") {
    printWarning("reviewErr", "Please enter your opinion before submitting");
    return false;
  } else {
    var regEx = /^[a-zA-Z0-9\s]+$/;
    if (!regEx.test(review)) {
      printWarning("reviewErr", "Please enter a valid review (letters, numbers, and spaces only)");
      return false;
    } else {
      printWarning("reviewErr", ""); 
      return true;
    }
  }
}

// Opening an overlay window
function displayDescritpion(overlayID, mealName, mealExtension) {
  var id = document.getElementById(overlayID);
  var name = id.querySelector("#dishName");
  var extension = id.querySelector("#extension");
  name.textContent = mealName;
  extension.textContent = mealExtension;

  id.style.display = "block";
  showComponents1();
}

// Show components for 2 servings by default
function showComponents1() {
  var components1 = document.getElementsByClassName("components1");
  for (var i = 0; i < components1.length; i++) {
    components1[i].style.display = "block";
  }

  var components2 = document.getElementsByClassName("components2");
  for (var i = 0; i < components2.length; i++) {
    components2[i].style.display = "none";
  }
}

// Show components for 4 servings
function showComponents2() {
  var components1 = document.getElementsByClassName("components1");
  for (var i = 0; i < components1.length; i++) {
    console.log(components1.length);
    components1[i].style.display = "none";
  }

  var components2 = document.getElementsByClassName("components2");
  for (var i = 0; i < components2.length; i++) {
    components2[i].style.display = "block";
  }
}

// Closing an overlay window
function closeWindow(ID) {
  var window = document.getElementById(ID);
  window.style.display = "none";
}
//Serving buttons
const servingBtn=document.querySelectorAll(".servings-div .servings");
servingBtn.forEach((btn)=>{
  btn.addEventListener("click",()=>{
    servingBtn.forEach((otherBtn)=>{
      otherBtn.classList.remove("active");
    });
    btn.classList.add("active");
  });
});

