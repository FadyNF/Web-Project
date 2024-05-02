document.addEventListener("DOMContentLoaded", function() {
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