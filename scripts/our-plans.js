let currentPage = 1;

function handlePlansFormSubmit(event) {
    event.preventDefault();

    const checkboxes = document.querySelectorAll(
        "input[type='checkbox']:checked"
    );

    const note = document.querySelector(".note");
    if (checkboxes.length === 0) {
        note.style.display = "block"
        note.style.marginBottom = "-15px";
        return;
    }

    movePage(1);
}

function handleCredentialsFormSubmit(event) {
    event.preventDefault();

    const inputs = document.querySelectorAll(
        ".credentials-form-container input"
    );
    let isFormComplete = true;
    inputs.forEach((input) => {
        if (input.value.trim() === "") {
            isFormComplete = false;
            return;
        }
    });
    
    movePage(2);
}

function handlePaymentFormSubmit(event) {
    event.preventDefault();

    const inputs = document.querySelectorAll(".payment-form-container input");
    let isFormComplete = true;
    inputs.forEach((input) => {
        if (input.value.trim() === "") {
            isFormComplete = false;
            return;
        }
    });
    
    movePage(3);
}

function movePage(currentStep) {
    currentPage = currentStep;

    const totalSteps = document.querySelectorAll(".form .steps .step").length;

    const stepNode = document.querySelector(".form .steps .step");
    const width = currentPage * stepNode.offsetWidth * -1 + "px";
    stepNode.parentNode.style.marginLeft = width;

    document
        .querySelector(".form .pagination .active")
        .classList.remove("active");
    document
        .querySelectorAll(".form .pagination .number")
        [currentPage].classList.add("active");

    if (currentPage + 1 === totalSteps) {
        startConfetti();
    }
}
