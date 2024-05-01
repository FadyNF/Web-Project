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
  feedbackForm.style.display = (feedbackForm.style.display === "none") ? "block" : "none";
}

function exitFeedback() {
  const feedbackContent = document.getElementById("feedbackContent");
  feedbackContent.style.display = "none";

  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
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
