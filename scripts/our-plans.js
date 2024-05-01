let currentPage = 1;

function handlePlansFormSubmit(event) {
    event.preventDefault(); 

    const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    if (checkboxes.length === 0) {
        alert("Please choose at least one meal type.");
        return;
    }

    movePage(1);
}

function handleCredentialsFormSubmit(event) {
    event.preventDefault();

    const inputs = document.querySelectorAll(".credentials-form-container input");
    let isFormComplete = true;
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            isFormComplete = false;
            return;
        }
    });
    if (!isFormComplete) {
        alert("Please fill in all fields.");
        return;
    }

    movePage(2);
}

function handlePaymentFormSubmit(event) {
    event.preventDefault();

    const inputs = document.querySelectorAll(".payment-form-container input");
    let isFormComplete = true;
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            isFormComplete = false;
            return;
        }
    });
    if (!isFormComplete) {
        alert("Please fill in all fields.");
        return;
    }
    movePage(3);
}

function movePage(currentStep) {
    currentPage = currentStep;

    const stepNode = document.querySelector(".form .steps .step");
    const width = currentPage * stepNode.offsetWidth * -1 + "px";
    stepNode.parentNode.style.marginLeft = width;

    document.querySelector(".form .pagination .active").classList.remove("active");
    document.querySelectorAll(".form .pagination .number")[currentPage - 1].classList.add("active"); // Subtracting 1 from currentPage
}


