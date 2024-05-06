document.addEventListener("DOMContentLoaded", function() {
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
            let card = event.target.closest('.card');
            if (card && card.classList.contains('selectable')) {
                toggleCardSelection(card);
            }
        });
    
        function removeSelectedCards() {
            let selectedCards = document.querySelectorAll('.card.selected');
            selectedCards.forEach(function(selectedCard) {
                let row = selectedCard.closest('.customer-row');
                row.remove();
            });
        }
    
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
