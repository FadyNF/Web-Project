window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".nav-bar");
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
// Function to open the modal
function openModal() {
    const modal = document.getElementById("editModal");
    modal.style.display = "block";

    // Populate form fields with current values from personal info card
    const personalInfo = document.querySelector(".personal-info");
    const [name, email, phone, address] = personalInfo.querySelectorAll("p");

    document.getElementById("name").value = name.textContent.trim().split(": ")[1];
    document.getElementById("email").value = email.textContent.trim().split(": ")[1];
    document.getElementById("phone").value = phone.textContent.trim().split(": ")[1];
    document.getElementById("address").value = address.textContent.trim().split(": ")[1];
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("editModal");
    modal.style.display = "none";
}

// Function to update personal info card
function updatePersonalInfo(formData) {
    const personalInfo = document.querySelector(".personal-info");

    // Update each field
    personalInfo.querySelector("p:nth-child(1)").innerHTML = `<strong>Name:</strong> ${formData.get('name')}`;
    personalInfo.querySelector("p:nth-child(2)").innerHTML = `<strong>Email:</strong> ${formData.get('email')}`;
    personalInfo.querySelector("p:nth-child(3)").innerHTML = `<strong>Phone Number:</strong> ${formData.get('phone')}`;
    personalInfo.querySelector("p:nth-child(4)").innerHTML = `<strong>Address:</strong> ${formData.get('address')}`;
}

document.addEventListener('DOMContentLoaded', function() {
    // Open modal when edit button is clicked
    const editButton = document.querySelector('.transparentt-button');
    editButton.addEventListener('click', openModal);

    // Close modal when close button (X) is clicked
    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', closeModal);

    // Close modal when clicking outside the modal
    window.onclick = function(event) {
        const modal = document.getElementById('editModal');
        if (event.target === modal) {
            closeModal();
        }
    };

    // Handle form submission (Save button)
    const editForm = document.getElementById('editForm');
    editForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(editForm);
        updatePersonalInfo(formData);
        closeModal();
    });
});
// Function to open the password modal
function openPasswordModal() {
    const modal = document.getElementById("editPasswordModal");
    modal.style.display = "block";
}

// Function to close the password modal
function closePasswordModal() {
    const modal = document.getElementById("editPasswordModal");
    modal.style.display = "none";
}

// Function to save the password
function savePassword() {
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validate if new password and confirm password match
    if (newPassword !== confirmPassword) {
        alert("New password and confirm password must match.");
        return;
    }

    // Save password securely (displaying dots)
    const passwordDisplay = document.getElementById("passwordDisplay");
    passwordDisplay.textContent = "•".repeat(newPassword.length);

    // Close the modal after saving
    closePasswordModal();
}
document.addEventListener("DOMContentLoaded", () => {
    const editSubscriptionButton = document.querySelector(".transparentttt-button");
    const editSubscriptionModal = document.getElementById("editSubscriptionModal");
    const warningModal = document.getElementById("warningModal");
    const currentSubscriptionStatus = document.getElementById("currentSubscriptionStatus");
    const subscriptionStatusSelect = document.getElementById("subscriptionStatus");

    // Function to open the subscription modal
    function openSubscriptionModal() {
        editSubscriptionModal.style.display = "block";
    }

    // Function to close the subscription modal
    function closeSubscriptionModal() {
        editSubscriptionModal.style.display = "none";
    }

    // Function to show the warning modal
    function showWarningModal() {
        warningModal.style.display = "block";
    }

    // Function to close the warning modal
    function closeWarningModal() {
        warningModal.style.display = "none";
    }

    // Function to confirm the change of subscription status
    function confirmChangeStatus() {
        const selectedStatus = subscriptionStatusSelect.value;
        currentSubscriptionStatus.textContent = selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1);
        closeWarningModal();
        closeSubscriptionModal();
    }

    // Add event listeners
    editSubscriptionButton.addEventListener("click", openSubscriptionModal);
    document.querySelector(".close").addEventListener("click", closeSubscriptionModal);

    // Exporting functions for inline event handlers
    window.showWarningModal = showWarningModal;
    window.confirmChangeStatus = confirmChangeStatus;
    window.closeWarningModal = closeWarningModal;
    window.closeSubscriptionModal = closeSubscriptionModal;
});
document.addEventListener('DOMContentLoaded', () => {
    const editButtons = document.querySelectorAll('.edit-status');
    const dropdowns = document.querySelectorAll('.dropdown');
    const modal = document.getElementById('modal');
    const confirmButton = document.getElementById('confirm');
    const cancelButton = document.getElementById('cancel');
    let currentCard = null;
    let newStatus = '';

    editButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            dropdowns[index].style.display = 'block';
        });

        const select = dropdowns[index].querySelector('.status-select');
        select.addEventListener('change', (event) => {
            newStatus = event.target.value;
            currentCard = button.closest('.card');
            modal.style.display = 'flex';
        });
    });

    confirmButton.addEventListener('click', () => {
        const statusElement = currentCard.querySelector('.status');
        statusElement.textContent = newStatus;
        modal.style.display = 'none';
        dropdowns.forEach(dropdown => dropdown.style.display = 'none');
    });

    cancelButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
// Function to open the delete account warning modal
function openDeleteWarningModal() {
    const modal = document.getElementById("deleteWarningModal");
    modal.style.display = "block";
}

// Function to close the delete account warning modal
function closeDeleteWarningModal() {
    const modal = document.getElementById("deleteWarningModal");
    modal.style.display = "none";
}

// Function to close the delete success modal and hide after 5 seconds
function closeDeleteSuccessModal() {
    const modal = document.getElementById("deleteSuccessModal");
    modal.style.display = "none";
}

// Event listener for clicking on the "Delete Account" button
document.getElementById("confirmDelete").addEventListener("click", function() {
    // Here you can add your logic for deleting the account
    // For demonstration purposes, let's simulate a deletion with a timeout
    setTimeout(function() {
        // After deletion is successful, close the warning modal and show success modal
        closeDeleteWarningModal();
        const successModal = document.getElementById("deleteSuccessModal");
        successModal.style.display = "block";
        
        // Automatically close success modal after 5 seconds
        setTimeout(function() {
            closeDeleteSuccessModal();
        }, 3000); // 5000 milliseconds = 5 seconds
    }, 100); // Simulating a delay of 1 second (1000 milliseconds) before account deletion completes
});

// Function to initialize the delete account feature
function initializeDeleteAccount() {
    const deleteButton = document.querySelector(".transparent-button:nth-child(3)");
    deleteButton.addEventListener("click", openDeleteWarningModal);
}

// Ensure DOM content is fully loaded before initializing delete account feature
document.addEventListener('DOMContentLoaded', function() {
    initializeDeleteAccount();
});
function logout() {
    // Redirect to login page
    window.location.href = "pages/login.html";
}
function UserAccount() {
    // Redirect to login page
    window.location.href = "pages/user.html";
}
