document.addEventListener("DOMContentLoaded", function() {
    function generateProductCards() {
        document.querySelector('main').innerHTML = '';
        document.querySelector('.add-button').style.display = 'block';
        let header = document.createElement('h2');
        header.textContent = 'Products';
        header.classList.add('customer-header'); 
        document.querySelector('main').appendChild(header);

        let products = ['Cheese Toast', 'Lentil Soup', 'Mac N Cheese', 'Chicken Burger', 'Chicken Ranch Pizza'];

        // Generate product cards
        for (let i = 0; i < products.length; i++) {
            let row = document.createElement('div');
            row.classList.add('customer-row');

            let card = document.createElement('div');
            card.classList.add('card');
            card.classList.add('selectable'); // Add selectable class to each card
            card.dataset.index = i; // Add index data attribute for identification

            // Product name
            let productName = document.createElement('p');
            productName.textContent = products[i];
            card.appendChild(productName);

            // Remove button
            let removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-button');
            removeButton.addEventListener('click', function() {
                // Handle remove button click
                removeProductCard(row);
            });
            card.appendChild(removeButton);

            // Edit button
            let editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('edit-button');
            editButton.addEventListener('click', function() {
                // Handle edit button click
                editProductCard(productName, card);
            });
            card.appendChild(editButton);

            row.appendChild(card);
            document.querySelector('main').appendChild(row);
        }
    }

    // Function to remove product card
    function removeProductCard(row) {
        row.remove();
    }

    // Function to edit product card
    function editProductCard(productName, card) {
        // Open the modal for editing
        document.getElementById('myModalEdit').style.display = "block";

        // Populate the input field with the current product name
        document.getElementById('editInput').value = productName.textContent;

        // Click event listener for the confirm button inside edit modal
        document.getElementById('confirmEditBtn').addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default button behavior
            
            // Get the new product name from the input field
            let newName = document.getElementById('editInput').value.trim();
            
            // Check if the new name is not empty and not null
            if (newName !== null && newName !== '') {
                // Update the product name in the product card
                productName.textContent = newName;
            }

            // Close the edit modal
            closeModalEdit();
        });
    }

    // Function to close the edit modal
    function closeModalEdit() {
        document.getElementById('myModalEdit').style.display = "none";
    }

    // Click event listener for the close button in the edit modal
    document.querySelector('#myModalEdit .close').addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default button behavior
        closeModalEdit(); // Close the edit modal
    });

    // Click event listener for the confirm button in the edit modal
    document.getElementById('confirmEditBtn').addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default button behavior
        // Implement the functionality to update the product name
        closeModalEdit(); // Close the edit modal after confirming
    });

    // Function to add a new card
    function addNewCard(content) {
        // Create row element
        let row = document.createElement('div');
        row.classList.add('customer-row'); // Add class for flexbox layout

        let card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('selectable'); // Add selectable class to each card
        card.classList.add('newly-added'); // Add newly-added class to newly created card

        // Content
        let cardContent = document.createElement('p');
        cardContent.textContent = content;
        card.appendChild(cardContent);

        // Remove button
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', function() {
            // Handle remove button click
            removeProductCard(row);
        });
        card.appendChild(removeButton);

        // Edit button
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');
        editButton.addEventListener('click', function() {
            // Handle edit button click
            editProductCard(cardContent, card);
        });
        card.appendChild(editButton);

        row.appendChild(card);

        // Insert the new row at the end
        document.querySelector('main').appendChild(row);
    }

    // Click event listener for the "Add" button
    document.querySelector('.add-button').addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default button behavior

        // Show the modal
        document.getElementById('myModal').style.display = "block";
    });

    // Click event listener for the confirm button
    document.getElementById('confirmBtn').addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default button behavior

        // Get the input value
        let inputValue = document.getElementById('cardInput').value;

        // Check if the input value is empty
        if (inputValue.trim() === '') {
            alert('Please enter something in the space first.');
            return;
        }

        // Add the new card
        addNewCard(inputValue);

        // Hide the modal
        closeModal();

        // Clear the input field
        document.getElementById('cardInput').value = "";
    });
    // Click event listener for the close button in the add modal
    document.querySelector('#myModal .close').addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default button behavior
        closeModal(); // Close the add modal
    });

    // Function to close the add modal
    function closeModal() {
        document.getElementById('myModal').style.display = "none";
    }

    // Click event listener for the products link
    document.querySelectorAll('.sidebar a')[4].addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior

        generateProductCards(); // Generate product cards

        // Show the "ADD" button
        document.querySelector('.add-button').style.display = 'block';
    });

    // Click event listener for hiding the "ADD" button when other links are clicked
    document.querySelectorAll('.sidebar a').forEach(function(link, index) {
        if (index !== 4) { // Check if the link is not the "Products" link
            link.addEventListener("click", function(event) {
                event.preventDefault(); // Prevent the default link behavior

                // Hide the "ADD" button
                document.querySelector('.add-button').style.display = 'none';
            });
        }
    });

    document.addEventListener("DOMContentLoaded", function() {
        // Function to toggle the selection state of a card
        function toggleCardSelection(card) {
            card.classList.toggle('selected');
        }
    
        // Click event listener for main to handle card selection
        document.querySelector('main').addEventListener('click', function(event) {
            let card = event.target.closest('.card');
            if (card && card.classList.contains('selectable')) {
                toggleCardSelection(card);
            }
        });
    
        // Function to remove selected cards
        function removeSelectedCards() {
            let selectedCards = document.querySelectorAll('.card.selected');
            selectedCards.forEach(function(selectedCard) {
                let row = selectedCard.closest('.customer-row');
                row.remove();
            });
        }
    
        // Function to edit selected cards
        function editSelectedCards() {
            let selectedCard = document.querySelector('.card.selected');
            if (selectedCard) {
                let cardContent = selectedCard.querySelector('p');
                let newName = prompt('Enter the new product name:', cardContent.textContent);
                if (newName !== null && newName.trim() !== '') {
                    cardContent.textContent = newName;
                }
            }
        }
    
        // Event listener for the "Remove Selected" button
        document.getElementById('removeSelectedBtn').addEventListener('click', function() {
            removeSelectedCards();
        });
    
        // Event listener for the "Edit Selected" button
        document.getElementById('editSelectedBtn').addEventListener('click', function() {
            editSelectedCards();
        });
    
        // Rest of your code...
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Function to generate 10 random users
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

    // Call the function to generate random users
    generateRandomUsers();
});
// Click event listener for the close button in the modal
document.querySelector('.close').addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default button behavior

    // Hide the modal
    document.getElementById('myModal').style.display = "none";
});

// Function to close the modal
function closeModal() {
    document.getElementById('myModal').style.display = "none";
}
document.addEventListener("DOMContentLoaded", function() {
    // Function to edit product card
    function editProductCard(productName, cardContent) {
        // Open the modal for editing
        document.getElementById('myModalEdit').style.display = "block";
    
        // Populate the input field with the current product name
        document.getElementById('editInput').value = productName.textContent;
    
        // Click event listener for the confirm button inside edit modal
        document.getElementById('confirmEditBtn').addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default button behavior
            
            // Get the new product name from the input field
            let newName = document.getElementById('editInput').value.trim();
            
            // Check if the new name is not empty and not null
            if (newName !== null && newName !== '') {
                // Update the product name in the product card
                cardContent.textContent = newName;
            }
    
            // Close the edit modal
            closeModalEdit();
        });
    }
    
    // Function to close the edit modal
    function closeModalEdit() {
        document.getElementById('myModalEdit').style.display = "none";
    }

    // Click event listener for the close button in the edit modal
    document.querySelector('#myModalEdit .close').addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default button behavior
        closeModalEdit(); // Close the edit modal
    });

    // Click event listener for the confirm button in the edit modal
    document.getElementById('confirmEditBtn').addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default button behavior
        // Implement the functionality to update the product name
        closeModalEdit(); // Close the edit modal after confirming
    });
});
