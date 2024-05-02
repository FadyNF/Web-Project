document.addEventListener("DOMContentLoaded", function() {
    // Function to generate product cards
    function generateProductCards() {
        // Clear the main content
        document.querySelector('main').innerHTML = '';

        // Create header element
        let header = document.createElement('h2');
        header.textContent = 'Products';
        header.classList.add('customer-header'); // Add a class for styling
        document.querySelector('main').appendChild(header);

        // Products
        let products = ['Cheese Toast', 'Lentil Soup', 'Mac N Cheese', 'Chicken Burger', 'Chicken Ranch Pizza'];

        // Generate product cards
        for (let i = 0; i < products.length; i++) {
            let row = document.createElement('div');
            row.classList.add('customer-row');

            let card = document.createElement('div');
            card.classList.add('card');

            // Product name
            let productName = document.createElement('p');
            productName.textContent = products[i];
            card.appendChild(productName);

            row.appendChild(card);
            document.querySelector('main').appendChild(row);
        }
    }

    // Click event listener for the products link
    document.querySelectorAll('.sidebar a')[4].addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior

        generateProductCards(); // Generate product cards
    });

    // Click event listener for the users link (just for demonstration purposes)
    document.getElementById("customer").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Clear the main content
        document.querySelector('main').innerHTML = '';

        // Create header element
        let header = document.createElement('h2');
        header.textContent = 'Contacts(11)';
        header.classList.add('customer-header'); // Add a class for styling
        document.querySelector('main').appendChild(header);

        // Sample data for demonstration
        let names = ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Brown', 'Michael Lee', 'Emily Davis', 'David Wilson', 'Sarah Martinez', 'Chris Anderson', 'Jessica Taylor'];
        let roles = ['Manager', 'Customer', 'CEO'];
        let locations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

        // Generate random cards
        for (let i = 0; i < 10; i++) {
            let row = document.createElement('div');
            row.classList.add('customer-row');

            let card = document.createElement('div');
            card.classList.add('card');

            // Random name
            let randomName = names[Math.floor(Math.random() * names.length)];

            // Random email based on the name
            let randomEmail = randomName.toLowerCase().replace(/\s+/g, '.') + '@example.com';

            // Random role
            let randomRole = roles[Math.floor(Math.random() * roles.length)];

            // Random location
            let randomLocation = locations[Math.floor(Math.random() * locations.length)];

            // Customer name
            let name = document.createElement('p');
            name.textContent = randomName;
            card.appendChild(name);

            // Customer email
            let email = document.createElement('p');
            email.textContent = randomEmail;
            card.appendChild(email);

            // Customer role
            let role = document.createElement('p');
            role.textContent = randomRole;
            card.appendChild(role);

            // Customer location
            let location = document.createElement('p');
            location.textContent = randomLocation;
            location.classList.add('location');
            card.appendChild(location);

            row.appendChild(card);
            document.querySelector('main').appendChild(row);
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Function to generate product cards
    function generateProductCards() {
        // Clear the main content
        document.querySelector('main').innerHTML = '';

        // Show the "ADD" button
        document.querySelector('.add-button').style.display = 'block';

        // Show the "select" button
        document.querySelector('.select-button').style.display = 'block';

        // Show the "remove" button
        document.querySelector('.remove-button').style.display = 'block';

        // Show the "edit" button
        document.querySelector('.edit-button').style.display = 'block';

        // Create header element
        let header = document.createElement('h2');
        header.textContent = 'Products';
        header.classList.add('customer-header'); // Add a class for styling
        document.querySelector('main').appendChild(header);

        // Products
        let products = ['Cheese Toast', 'Lentil Soup', 'Mac N Cheese', 'Chicken Burger', 'Chicken Ranch Pizza'];

        // Generate product cards
        for (let i = 0; i < products.length; i++) {
            let row = document.createElement('div');
            row.classList.add('customer-row');

            let card = document.createElement('div');
            card.classList.add('card');

            // Product name
            let productName = document.createElement('p');
            productName.textContent = products[i];
            card.appendChild(productName);

            row.appendChild(card);
            document.querySelector('main').appendChild(row);
        }
    }

    // Click event listener for the "select" button
    document.querySelector('.select-button').addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default button behavior

        // Show checkboxes
        document.querySelectorAll('.product-checkbox').forEach(function(checkbox) {
            checkbox.style.display = 'block';
        });
    });

    // Click event listener for the products link
    document.querySelectorAll('.sidebar a')[4].addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior

        generateProductCards(); // Generate product cards
    });

    // Click event listener for hiding the "ADD", "select", "remove", and "edit" buttons when other links are clicked
    document.querySelectorAll('.sidebar a').forEach(function(link, index) {
        if (index !== 4) { // Check if the link is not the "Products" link
            link.addEventListener("click", function(event) {
                event.preventDefault(); // Prevent the default link behavior

                // Hide the "ADD" button
                document.querySelector('.add-button').style.display = 'none';

                // Hide the "select" button
                document.querySelector('.select-button').style.display = 'none';

                // Hide the "remove" button
                document.querySelector('.remove-button').style.display = 'none';

                // Hide the "edit" button
                document.querySelector('.edit-button').style.display = 'none';
            });
        }
    });
});
