document.addEventListener("DOMContentLoaded", function() {
    // Function to update the checkout preview
    function updateCheckoutPreview() {
        const mealTypes = ['Meat and Veggies', 'Veggies', 'Family & Friends', 'Fit & Wholesome', 'Under 20-minutes', 'Pescatarian'];
        const mealPrices = [9.99, 8.49, 10.99, 11.29, 7.99, 12.99];
        const planPrices = {
            '2': 39.99,
            '4': 69.99,
        };

        // Get the checked radio input for number of people
        const numberOfPeopleInput = document.querySelector('input[name="people-radio"]:checked');
        const numberOfPeople = numberOfPeopleInput ? numberOfPeopleInput.value : '2'; // Default to '2' if no radio input is checked

        // Get the checked radio input for number of meals
        const numberOfMealsInput = document.querySelector('input[name="meals-radio"]:checked');
        const numberOfMeals = numberOfMealsInput ? numberOfMealsInput.value : '1'; // Default to '1' if no radio input is checked

        const totalServings = numberOfPeople * numberOfMeals;

        // Get the checked checkboxes for meal types
        const selectedMealTypes = [];
        const mealTypeCheckboxes = document.querySelectorAll('input[name="meal-type"]:checked');
        mealTypeCheckboxes.forEach(checkbox => {
            const mealTypeIndex = parseInt(checkbox.value);
            selectedMealTypes.push(mealTypes[mealTypeIndex]);
        });
        const selectedMealType = selectedMealTypes.join(', '); // Join selected meal types with commas

        const mealTypeElement = document.querySelector(".meal-type");
        const mealCountElement = document.querySelector(".meal-count");
        const mealTotalServingsElement = document.querySelector(".meal-total-servings");
        const boxPriceElement = document.querySelector(".box-pricing span:last-child");
        const pricePerServingElement = document.querySelector(".price-per-serving span:last-child");
        const finalPriceElement = document.querySelector(".final-price span:last-child");
        const preferenceNoteElement = document.querySelector(".note p");

        if (selectedMealTypes.length === 0) {
            preferenceNoteElement.style.display = "block";
            mealTypeElement.textContent = "Choose Meal Type";
            mealCountElement.textContent = "";
            mealTotalServingsElement.textContent = "";
            boxPriceElement.textContent = "$0";
            pricePerServingElement.textContent = "$0";
            finalPriceElement.textContent = "$0";
        } else {
            preferenceNoteElement.style.display = "none";
            mealTypeElement.textContent = selectedMealType;
            mealCountElement.textContent = numberOfMeals + " meals for " + numberOfPeople + " people";
            mealTotalServingsElement.textContent = totalServings + " total servings";

            boxPriceElement.textContent = "$" + planPrices[numberOfPeople];
            pricePerServingElement.textContent = "$" + mealPrices[Math.floor(Math.random() * mealPrices.length)];
            finalPriceElement.textContent = "$" + (planPrices[numberOfPeople] * totalServings).toFixed(2);
        }
    }

    // Add event listeners to the radio inputs and checkboxes to trigger the update function
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach(input => {
        input.addEventListener("change", updateCheckoutPreview);
    });

    const mealTypeCheckboxes = document.querySelectorAll('input[name="meal-type"]');
    mealTypeCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateCheckoutPreview);
    });

    // Initial call to update the Checkout Preview section with default values
    updateCheckoutPreview();

    // Handle plans form submission
    function handlePlansFormSubmit(event) {
        event.preventDefault();

        const checkboxes = document.querySelectorAll(
            "input[type='checkbox']:checked"
        );

        const note = document.querySelector(".note");
        if (checkboxes.length === 0) {
            note.style.display = "block";
            note.style.marginBottom = "-15px";
            return;
        }

        movePage(1);
    }

    // Handle credentials form submission
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

    // Handle payment form submission
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

        const cvvInput = document.getElementById("cvv");
        const cvvValue = cvvInput.value.trim();
        const cvvNote = cvvInput.parentElement.querySelector(".note");

        if (cvvValue.length !== 3 || isNaN(cvvValue)) {
            cvvNote.style.display = "block";
        } else {
            cvvNote.style.display = "none";
        }

        const expDateInput = document.getElementById("ExDate");
        const expDateValue = expDateInput.value.trim();
        const expDateNote = expDateInput.parentElement.querySelector(".note");

        const expDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; 
        if (!expDateRegex.test(expDateValue)) {
            expDateNote.style.display = "block";
        } else {
            expDateNote.style.display = "none";
        }

        const currentYear = new Date().getFullYear();
        const expirationYear = parseInt("20" + expDateValue.substr(3)); // Extract year from MM/YY format

        if (expirationYear <= currentYear) {
            expDateNote.style.display = "block";
        } else {
            expDateNote.style.display = "none";
        }

        if (isFormComplete && cvvNote.style.display !== "block" && expDateNote.style.display !== "block") {
            movePage(3);
        }
    }

    // Function to move to the next page
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

    // Add event listeners for form submissions
    const plansForm = document.querySelector(".choose-plans-container");
    plansForm.addEventListener("submit", handlePlansFormSubmit);

    const credentialsForm = document.querySelector(".credentials-form-container");
    credentialsForm.addEventListener("submit", handleCredentialsFormSubmit);

    const paymentForm = document.querySelector(".payment-form-container");
    paymentForm.addEventListener("submit", handlePaymentFormSubmit);
});
