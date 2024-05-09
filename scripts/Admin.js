document.addEventListener("DOMContentLoaded", function() {
    // Array to store all contacts
    let contacts = [
        { id: 1, name: 'John Doe', email: 'john@example.com', location: 'New York', role: 'Manager' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', location: 'Los Angeles', role: 'Customer' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', location: 'Chicago', role: 'CEO' },
        { id: 4, name: 'Alice Brown', email: 'alice@example.com', location: 'Houston', role: 'Manager' },
        { id: 5, name: 'Michael Lee', email: 'michael@example.com', location: 'Phoenix', role: 'Customer' },
        { id: 6, name: 'Emily Davis', email: 'emily@example.com', location: 'Dallas', role: 'CEO' }
    ];

    // Function to handle the "Users" link click
    document.getElementById("customer").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Clear the main content
        document.querySelector('main').innerHTML = '';

        // Create header element with the number of cards
        let header = document.createElement('h2');
        header.textContent = 'Users (' + contacts.length + ')';
        header.classList.add('customer-header'); // Add a class for styling
        document.querySelector('main').appendChild(header);

        // Add static contacts to the main content
        contacts.forEach(function(contact) {
            createCard(contact.id, contact.name, contact.email, contact.location, contact.role);
        });

        // Show the "Add Customer" section
        showAddCustomerForm();
    });

    // Function to show the "Add Customer" form
    function showAddCustomerForm() {
        let rightSection = document.querySelector('.right');
        rightSection.innerHTML = `
            <h2>Add User</h2>
            <form id="add-customer-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required><br>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br>

                <label for="location">Location:</label>
                <input type="text" id="location" name="location" required><br>

                <label for="role">Role:</label>
                <select id="role" name="role">
                    <option value="Manager">Manager</option>
                    <option value="Customer">Customer</option>
                    <option value="CEO">CEO</option>
                </select><br>
                <button type="submit">Add</button>
                <button type="button" id="cancel">Cancel</button>
                <button type="button" id="save-changes">Save Changes</button>
            </form>
        `;

        // Add event listener to the "Delete" button
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.id = 'delete';
        rightSection.appendChild(deleteButton);

        deleteButton.addEventListener('click', function(event) {
            event.preventDefault();
            let id = parseInt(document.getElementById("name").dataset.id);
            let index = contacts.findIndex(contact => contact.id === id);
            if (index !== -1) {
                contacts.splice(index, 1);
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("location").value = "";
                document.getElementById("role").value = "Manager"; // Reset role to default
                document.querySelector('.customer-header').textContent = 'Users (' + contacts.length + ')';
                let rowToDelete = document.querySelector('.customer-row[data-id="' + id + '"]');
                if (rowToDelete) {
                    rowToDelete.remove();
                }
            }
        });

        // Add event listener to the "Cancel" button
        document.getElementById("cancel").addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("location").value = "";
            document.getElementById("role").value = "Manager"; // Reset role to default
        });

        // Add event listener to the "Save Changes" button
        document.getElementById("save-changes").addEventListener('click', function(event) {
            event.preventDefault();
            let id = parseInt(document.getElementById("name").dataset.id);
            let index = contacts.findIndex(contact => contact.id === id);
            if (index !== -1) {
                // Update contact information
                contacts[index].name = document.getElementById("name").value;
                contacts[index].email = document.getElementById("email").value;
                contacts[index].location = document.getElementById("location").value;
                contacts[index].role = document.getElementById("role").value;
                
                // Update the card
                let cardToUpdate = document.querySelector('.customer-row[data-id="' + id + '"] .card');
                if (cardToUpdate) {
                    cardToUpdate.querySelector('p:first-child').textContent = contacts[index].name;
                    cardToUpdate.querySelector('p:nth-child(2)').textContent = contacts[index].email;
                    cardToUpdate.querySelector('p:nth-child(3)').textContent = contacts[index].role;
                    cardToUpdate.querySelector('.location').textContent = contacts[index].location;
                }
            }
        });
    }

    // Add event listener to the "Add Customer" form
    document.addEventListener("submit", function(event) {
        if (event.target.id === "add-customer-form") {
            event.preventDefault(); // Prevent the default form submission behavior

            // Get the form values
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let location = document.getElementById("location").value;
            let role = document.getElementById("role").value;

            // Add the new contact to the contacts array
            let newId = contacts.length + 1; // Generate a new id
            contacts.push({ id: newId, name: name, email: email, location: location, role: role });

            // Update the header with the new count of contacts
            let header = document.querySelector('.customer-header');
            header.textContent = 'Users (' + contacts.length + ')';

            // Create a new card with the entered information
            createCard(newId, name, email, location, role);

            // Clear the form inputs
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("location").value = "";
            document.getElementById("role").value = "Manager"; // Reset role to default
        }
    });

    // Function to create a new card
    function createCard(id, name, email, location, role) {
        let row = document.createElement('div');
        row.classList.add('customer-row');
        row.dataset.id = id;

        let card = document.createElement('div');
        card.classList.add('card');

        // Customer name
        let nameElement = document.createElement('p');
        nameElement.textContent = name;
        nameElement.dataset.id = id;
        card.appendChild(nameElement);

        // Customer email
        let emailElement = document.createElement('p');
        emailElement.textContent = email;
        card.appendChild(emailElement);

        // Customer role
        let roleElement = document.createElement('p');
        roleElement.textContent = role;
        card.appendChild(roleElement);

        // Customer location
        let locationElement = document.createElement('p');
        locationElement.textContent = location;
        locationElement.classList.add('location');
        card.appendChild(locationElement);

        row.appendChild(card);
        document.querySelector('main').appendChild(row);

        // Double click event to fill user inputs
        card.addEventListener("dblclick", function() {
            document.getElementById("name").value = name;
            document.getElementById("email").value = email;
            document.getElementById("location").value = location;
            document.getElementById("role").value = role;
            document.getElementById("name").dataset.id = id;
        });
    }

    function hideAddCustomerForm() {
        document.querySelector('.right').innerHTML = ''; // Clear the contents of the .right section
    }

    const analyticsLink = document.getElementById('analytics');

    // Function to display revenue statistics
    function displayRevenueStatistics() {
        // Clear the main content
        document.querySelector('main').innerHTML = '';
    
        // Create header element for the chart
        let chartHeader = document.createElement('h2');
        chartHeader.textContent = 'Revenue Statistics';
        chartHeader.classList.add('chart-header');
        document.querySelector('main').appendChild(chartHeader);
    
        // Replace this with your actual revenue statistics display logic
        const revenueData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Revenue',
                data: [1000, 1500, 2000, 1800, 2200, 2500],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        };
    
        // Create chart canvas element
        const canvas = document.createElement('canvas');
        canvas.id = 'revenueChart';
        document.querySelector('main').appendChild(canvas);
    
        // Render chart
        const ctx = canvas.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: revenueData,
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    
        // Additional cards container
        let additionalCardsContainer = document.createElement('div');
        additionalCardsContainer.classList.add('additional-cards-container');
        document.querySelector('main').appendChild(additionalCardsContainer);
    
        // Additional cards
        createCardd('totalCustomers', 'Total Customers', contacts.length.toString(), additionalCardsContainer);
        createCardd('totalRevenue', 'Total Revenue', '$10,000', additionalCardsContainer);
        createCardd('totalMenu', 'Total Menu Items', '200', additionalCardsContainer);
        createCardd('totalOrders', 'Total Orders', '500', additionalCardsContainer);
    
        // Hide the "Add User" form if it's visible
        hideAddCustomerForm();
    }
    

    function createCardd(id, title, value, parentContainer) {
        let card = document.createElement('div');
        card.classList.add('cardd');
        card.classList.add('additional-card'); // Add additional class for styling
    
        // Card title
        let titleElement = document.createElement('h3');
        titleElement.textContent = title; // Fixed typo: textContent instead of textContaent
        titleElement.classList.add('card-title'); // Add class for styling
        card.appendChild(titleElement);
    
        // Card value
        let valueElement = document.createElement('p');
        valueElement.textContent = value;
        valueElement.classList.add('card-value'); // Add class for styling
        card.appendChild(valueElement);
    
        parentContainer.appendChild(card); // Append the card to the parent container
    }


    
    // Add click event listener to the Analytics link
    analyticsLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        displayRevenueStatistics(); // Call the function to display revenue statistics
    });
});






const sidebarLinks = document.querySelectorAll('aside .sidebar a');
// Loop through each link
sidebarLinks.forEach(link => {
    // Add click event listener to each link
    link.addEventListener('click', function() {
        // Remove active class from all links
        sidebarLinks.forEach(link => link.classList.remove('active'));

        // Add active class to the clicked link
        this.classList.add('active');

        // Toggle active class on the sidebar
        document.querySelector('aside .sidebar').classList.toggle('active');

        // Toggle active class on the container
        document.querySelector('.container').classList.toggle('active');

        // Toggle active class on the header
        document.querySelector('header').classList.toggle('active');
    });
});


document.addEventListener("DOMContentLoaded", function() {

    function hideAddCustomerForm() {
        document.querySelector('.right').innerHTML = ''; // Clear the contents of the .right section
    }
    function generateProductCards() {
        document.querySelector('main').innerHTML = '';
        document.querySelector('.add-button').style.display = 'block';
        let header = document.createElement('h2');
        header.textContent = 'Products';
        header.classList.add('customer-header'); 
        document.querySelector('main').appendChild(header);

        let products = ['Cheese Toast', 'Lentil Soup', 'Mac N Cheese', 'Chicken Burger', 'Chicken Ranch Pizza'];

        for (let i = 0; i < products.length; i++) {
            let row = document.createElement('div');
            row.classList.add('customer-row');

            let card = document.createElement('div');
            card.classList.add('card');
            card.classList.add('selectable'); 
            card.dataset.index = i; 

            let productName = document.createElement('p');
            productName.textContent = products[i];
            card.appendChild(productName);

            let removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-button');
            removeButton.addEventListener('click', function() {
                removeProductCard(row);
            });
            card.appendChild(removeButton);

            let editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('edit-button');
            editButton.addEventListener('click', function() {
                editProductCard(productName, card);
            });
            card.appendChild(editButton);

            row.appendChild(card);
            document.querySelector('main').appendChild(row);
        }
    }

    function removeProductCard(row) {
        row.remove();
    }

    function editProductCard(productName, card) {
        document.getElementById('myModalEdit').style.display = "block";
        document.getElementById('editInput').value = productName.textContent;
        document.getElementById('confirmEditBtn').addEventListener("click", function(event) {
            event.preventDefault(); 
            let newName = document.getElementById('editInput').value.trim();
                if (newName !== null && newName !== '') {
                productName.textContent = newName;
            }
            closeModalEdit();
        });
    }

    function closeModalEdit() {
        document.getElementById('myModalEdit').style.display = "none";
    }

    document.querySelector('#myModalEdit .close').addEventListener("click", function(event) {
        event.preventDefault(); 
        closeModalEdit(); 
    });

    document.getElementById('confirmEditBtn').addEventListener("click", function(event) {
        event.preventDefault(); 
        closeModalEdit(); 
    });

    function addNewCard(content) {
        let row = document.createElement('div');
        row.classList.add('customer-row');

        let card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('selectable'); 
        card.classList.add('newly-added'); 
        let cardContent = document.createElement('p');
        cardContent.textContent = content;
        card.appendChild(cardContent);

        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', function() {
            removeProductCard(row);
        });
        card.appendChild(removeButton);

        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');
        editButton.addEventListener('click', function() {
            editProductCard(cardContent, card);
        });
        card.appendChild(editButton);

        row.appendChild(card);

        document.querySelector('main').appendChild(row);
    }

    document.querySelector('.add-button').addEventListener("click", function(event) {
        event.preventDefault(); 
        document.getElementById('myModal').style.display = "block";
    });

    document.getElementById('confirmBtn').addEventListener("click", function(event) {
        event.preventDefault(); 
        let inputValue = document.getElementById('cardInput').value;
        if (inputValue.trim() === '') {
            alert('Please enter something in the space first.');
            return;
        }
        addNewCard(inputValue);
        closeModal();
        document.getElementById('cardInput').value = "";
    });
    document.querySelector('#myModal .close').addEventListener("click", function(event) {
        event.preventDefault(); 
        closeModal(); 
    });

    function closeModal() {
        document.getElementById('myModal').style.display = "none";
    }

    document.querySelectorAll('.sidebar a')[4].addEventListener("click", function(event) {
        event.preventDefault(); 
        hideAddCustomerForm();
        generateProductCards(); 
        document.querySelector('.add-button').style.display = 'block';
    });

    document.querySelectorAll('.sidebar a').forEach(function(link, index) {
        if (index !== 4) { 
            link.addEventListener("click", function(event) {
                event.preventDefault(); 

                document.querySelector('.add-button').style.display = 'none';
            });
        }
    });

    document.addEventListener("DOMContentLoaded", function() {
        function toggleCardSelection(card) {
            card.classList.toggle('selected');
        }
    
        document.querySelector('main').addEventListener('click', function(event) {
            let card = event.target.closest('.card1');
            if (card && card.classList.contains('selectable')) {
                toggleCardSelection(card);
            }
        });
    
        function removeSelectedCards() {
            let selectedCards = document.querySelectorAll('.card1.selected');
            selectedCards.forEach(function(selectedCard) {
                let row = selectedCard.closest('.customer-row');
                row.remove();
            });
        }
    
        function editSelectedCards() {
            let selectedCard = document.querySelector('.card1.selected');
            if (selectedCard) {
                let cardContent = selectedCard.querySelector('p');
                let newName = prompt('Enter the new product name:', cardContent.textContent);
                if (newName !== null && newName.trim() !== '') {
                    cardContent.textContent = newName;
                }
            }
        }
    
        document.getElementById('removeSelectedBtn').addEventListener('click', function() {
            removeSelectedCards();
        });
    
        document.getElementById('editSelectedBtn').addEventListener('click', function() {
            editSelectedCards();
        });
    
    });
});
document.addEventListener("DOMContentLoaded", function() {
    function generateRandomUsers() {
        let latestUsers = document.querySelector('.latest-users');

        for (let i = 0; i < 10; i++) {
            let user = document.createElement('div');
            user.classList.add('user');

            let name = faker.name.findName();
            let email = faker.internet.email();
            let date = faker.date.past().toLocaleDateString();

            user.innerHTML = `
                <p>Name: <span>${name}</span></p>
                <p>Email: <span>${email}</span></p>
                <p>Date Joined: <span>${date}</span></p>
            `;

            latestUsers.appendChild(user);
        }
    }

    generateRandomUsers();
});
document.querySelector('.close').addEventListener("click", function(event) {
    event.preventDefault(); 

    document.getElementById('myModal').style.display = "none";
});

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}
document.addEventListener("DOMContentLoaded", function() {
    function editProductCard(productName, cardContent) {
        document.getElementById('myModalEdit').style.display = "block";
        document.getElementById('editInput').value = productName.textContent;
        document.getElementById('confirmEditBtn').addEventListener("click", function(event) {
            event.preventDefault(); 
            let newName = document.getElementById('editInput').value.trim();
            
            if (newName !== null && newName !== '') {
                cardContent.textContent = newName;
            }
    
            closeModalEdit();
        });
    }
    
    function closeModalEdit() {
        document.getElementById('myModalEdit').style.display = "none";
    }

    document.querySelector('#myModalEdit .close').addEventListener("click", function(event) {
        event.preventDefault(); 
        closeModalEdit(); 
    });

    document.getElementById('confirmEditBtn').addEventListener("click", function(event) {
        event.preventDefault(); 
        closeModalEdit(); 
    });
});


const dashboardLink = document.getElementById('dashboard');

        // Get the dashboard section element
        const dashboardSection = document.getElementById('dashboardSection');

        // Add click event listener to the dashboard link
        dashboardLink.addEventListener('click', function(event) {
            // Prevent the default link behavior
            event.preventDefault();
            
            // Add the active class to the dashboard link
            dashboardLink.classList.add('active');

            // Display the dashboard section
            dashboardSection.style.display = 'block';
        });

        // Check if the dashboard link has the active class on page load
        window.addEventListener('load', function() {
            if (dashboardLink.classList.contains('active')) {
                dashboardSection.style.display = 'block';
            }
        });


        document.addEventListener("DOMContentLoaded", function() {
            const dashboardLink = document.getElementById("dashboard");
        
            dashboardLink.addEventListener("click", function(event) {
                event.preventDefault(); // Prevent the default link behavior
                window.location.reload(); // Reload the page to return to the initial view
            });
        });






      const profileLink = document.getElementById('profileLink');

// Get the main section element
const mainSection = document.querySelector('main');

// Add event listener to the profile link
profileLink.addEventListener('click', () => {
    function hideAddCustomerForm() {
        document.querySelector('.right').innerHTML = ''; // Clear the contents of the .right section
    }

    // Clear the main section content
    mainSection.innerHTML = '';

    // Create a header element for "My Profile"
    const profileHeader = document.createElement('h2');
    profileHeader.textContent = 'My Profile';
    // Add a class to the header for styling
    profileHeader.classList.add('profile-header');

    // Append the header to the main section
    mainSection.appendChild(profileHeader);

    // Create a div element for the profile circle
    const circleDiv = document.createElement('div');
    circleDiv.classList.add('profile-circle');
    // Set background image for the circle
    circleDiv.style.backgroundImage = 'url(../images/admin-images/avatar.png)';

    // Append the circle div to the main section
    mainSection.appendChild(circleDiv);

    // Get the user's first name, last name, and email (replace these with your actual methods of getting the data)
    const firstName = "John"; // Example first name
    const lastName = "Doe"; // Example last name
    const email = "john.doe@example.com"; // Example email
    const contactNumber = "1234567890"; // Example contact number
    const address = "123 Main St"; // Example address
    const city = "Example City"; // Example city
    const state = "Example State"; // Example state
    const postalCode = "12345"; // Example postal code
    const country = "Example Country"; // Example country
    const password = ""; // Example password (empty for security reasons)

    // Create input elements for first name, last name, email, contact number, address, city, state, postal code, country, and password
    const firstNameInput = createInputWithLabel("First Name", "firstNameInput", firstName);
    const lastNameInput = createInputWithLabel("Last Name", "lastNameInput", lastName);
    const emailInput = createInputWithLabel("Email", "emailInput", email, "email");
    const contactNumberInput = createInputWithLabel("Contact Number", "contactNumberInput", contactNumber, "tel");
    const addressInput = createInputWithLabel("Address", "addressInput", address);
    const cityInput = createInputWithLabel("City", "cityInput", city);
    const stateInput = createInputWithLabel("State", "stateInput", state);
    const postalCodeInput = createInputWithLabel("Postal Code", "postalCodeInput", postalCode);
    const countryInput = createInputWithLabel("Country", "countryInput", country);
    const passwordInput = createInputWithLabel("Password", "passwordInput", "yomna123", "password");

    // Create container div for labels and inputs
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');

    // Append the input elements and labels to the input container
    inputContainer.appendChild(firstNameInput);
    inputContainer.appendChild(lastNameInput);
    inputContainer.appendChild(emailInput);
    inputContainer.appendChild(contactNumberInput);
    inputContainer.appendChild(addressInput);
    inputContainer.appendChild(cityInput);
    inputContainer.appendChild(stateInput);
    inputContainer.appendChild(postalCodeInput);
    inputContainer.appendChild(countryInput);
    inputContainer.appendChild(passwordInput);

    // Append the input container to the main section
    mainSection.appendChild(inputContainer);

    hideAddCustomerForm();
});

// Function to create an input field with label and prefill value
function createInputWithLabel(labelText, inputId, prefillValue, inputType = "text") {
    // Create label element
    const label = document.createElement('label');
    label.setAttribute('for', inputId);
    label.textContent = labelText;

    // Create input element
    const input = document.createElement('input');
    input.setAttribute('type', inputType);
    input.setAttribute('id', inputId);
    input.classList.add('profile-input');
    input.setAttribute('placeholder', labelText);

    // Set value attribute for non-password inputs
    if (inputType !== "password") {
        input.value = prefillValue;
    }

    // Create container div for label, input, and the toggle button/icon
    const container = document.createElement('div');
container.classList.add('input-container');

// Append the label and input to the container
container.appendChild(label);
container.appendChild(input);

// For password inputs, include a toggle button/icon
if (inputType === "password") {
    // Create a button to toggle password visibility
    const toggleButton = document.createElement('button');
    toggleButton.innerHTML = '<i class="fas fa-eye"></i>'; // You may adjust the icon here

    // Style the button to remove any padding and margins
    toggleButton.style.padding = '0';
    toggleButton.style.margin = '0';
    toggleButton.style.border = 'none'; // Remove border if any
    toggleButton.style.background = 'none'; // Make background transparent

    // Style the icon to change its color to black
    const icon = toggleButton.querySelector('i');
    icon.style.color = 'black'; // Set the color to black
    icon.style.position = 'absolute';
   
    icon.style.top = '42em';
    icon.style.right = '13em'; // Adjust the distance from the right edge
    icon.style.marginLeft = '12px'

    // Set initial value and toggle functionality
    input.setAttribute('value', prefillValue);
    toggleButton.addEventListener('click', function() {
        if (input.getAttribute('type') === 'password') {
            input.setAttribute('type', 'text');
            icon.className = 'fas fa-eye-slash'; // Change to eye-slash icon when showing password
        } else {
            input.setAttribute('type', 'password');
            icon.className = 'fas fa-eye'; // Change back to eye icon when hiding password
        }
    });

    // Append the toggle button to the container
    container.appendChild(toggleButton);
}

return container;
}