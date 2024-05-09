document.addEventListener("DOMContentLoaded", function() {
    const reOrderButtons = document.querySelectorAll(".reOrder");
    const confirmationPopup = document.getElementById("confirmationPopup");
    const confirmReOrderBtn = document.getElementById("confirmReOrder");
    const cancelReOrderBtn = document.getElementById("cancelReOrder");
  
    reOrderButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        confirmationPopup.style.display = "block";
      });
    });
  
    confirmReOrderBtn.addEventListener("click", function() {
      confirmationPopup.style.display = "none";
    });
  
    cancelReOrderBtn.addEventListener("click", function() {
      confirmationPopup.style.display = "none";
    });
  });
  

document.querySelectorAll('.reOrder').forEach(button => {
    button.addEventListener('click', () => {
      document.getElementById('confirmationPopup').style.display = 'block';
      button.classList.add('green');
    });
  });
  
  document.getElementById('cancelReOrder').addEventListener('click', () => {
    document.getElementById('confirmationPopup').style.display = 'none';
  });
  /***************************************************************************/

function displayReview() {
  const overlay = document.getElementById("reviewOverlay");
  overlay.style.display = "block";

  const feedbackContent = document.getElementById("reviewOverlayContent");
  feedbackContent.style.display = "block";
  feedbackContent.style.zIndex = "1000";
}

function exitReview() {
  const feedbackContent = document.getElementById("reviewOverlayContent");
  feedbackContent.style.display = "none";

  const overlay = document.getElementById("reviewOverlay");
  overlay.style.display = "none"
}
function selected(event){
  const buttons = document.querySelectorAll(".choice");
  buttons.forEach(button => {
    button.classList.remove("selected");
  });
  event.target.classList.add("selected");

}
