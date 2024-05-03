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

// JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Click event listener for the "Add" button
    document.querySelector('.add-button').addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default button behavior

        // Show the modal
        document.getElementById('myModal').style.display = "block";
    });

    // Click event listener for the close button in the modal
    document.querySelector('.close').addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default button behavior

        // Hide the modal
        document.getElementById('myModal').style.display = "none";
    });

    // Click event listener for the confirm button
    document.getElementById('confirmBtn').addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default button behavior

        // Get the input value
        let inputValue = document.getElementById('cardInput').value;

        // Add the new card
        addNewCard(inputValue);

        // Hide the modal
        document.getElementById('myModal').style.display = "none";

        // Clear the input field
        document.getElementById('cardInput').value = "";
    });

  // Function to add a new card
function addNewCard(content) {
    // Create row element
    let row = document.createElement('div');
    row.classList.add('customer-row'); // Add class for flexbox layout

    // Create card element
    let card = document.createElement('div');
    card.classList.add('card');

    // Content
    let cardContent = document.createElement('p');
    cardContent.textContent = content;
    card.appendChild(cardContent);

    // Add the card to the row
    row.appendChild(card);

    // Insert the new row at the end
    document.querySelector('main').appendChild(row);
}

});
