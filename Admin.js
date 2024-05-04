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
    
        // Hide the "Add User" form if it's visible
        hideAddCustomerForm();
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
