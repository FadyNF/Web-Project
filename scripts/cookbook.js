function showBox() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "block";

  const feedbackContent = document.getElementById("feedbackContent");
  feedbackContent.style.display = "block";
  // Set z-index of feedback content higher than overlay
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
