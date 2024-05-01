
window.onload = function () {
    gettingDates(0);
    viewItems('week1');
    SelectB('B1');
}

function Details(modalID, itemName, itemDescription) {

    var itemModal = document.getElementById(modalID);
    var name = itemModal.querySelector("#itemName");
    var description = itemModal.querySelector("#itemDescription");

    name.textContent = itemName;
    description.textContent = itemDescription;
    itemModal.style.display = "block";
}

function closeModal(modalID) {
    var modal = document.getElementById(modalID);
    modal.style.display = "none";
}


function SelectB(buttonID) {
    var Allbuttons = document.querySelectorAll('.buttons button');
    Allbuttons.forEach(button => {
        button.classList.remove('selectedB');
    });

    var selected = document.getElementById(buttonID);
    selected.classList.add('selectedB');
}

function viewItems(weekNumber) {
    var Allitems = document.querySelectorAll('.items');
    Allitems.forEach(Dishes => {
        Dishes.style.display = 'none';
    });

    var itemsPerWeek = document.querySelectorAll('.' + weekNumber);
    itemsPerWeek.forEach(Dishes => {
        Dishes.style.display = 'block';
    });
}


function gettingDates(sDay) {
    var currDate = new Date();
    var dateOfStarting = new Date(currDate);
    dateOfStarting.setDate(dateOfStarting.getDate() + sDay);


    var dateOfEnding = new Date(dateOfStarting);
    dateOfEnding.setDate(dateOfEnding.getDate() + 6);

    var start = dateFormat(dateOfStarting);
    var end = dateFormat(dateOfEnding);

    document.getElementById('titleM').textContent = "MENU FOR " + start + " - " + end;
}


function dateFormat(date) {
    var day = date.getDate();
    var month = date.toLocaleString('default', { month: 'short' });
    return (day < 10 ? '0' : '') + day + '' + month;
}


function addToFav(itemID, week) {
    var item = document.getElementById('item' + itemID + week);
    var copy = item.cloneNode(true);
    copy.classList.add('noAnimation');
    var favouritesList = document.getElementById('favList');
    favouritesList.appendChild(copy);
}


function removeFav(itemID, week) {
    var removed = document.getElementById('item' + itemID + week);
    var favouritesList = document.getElementById('favList');
    favouritesList.removeChild(removed);

    var heart = document.getElementById('icon' + itemID + week);
    if (heart.style.color == "red") { heart.style.color = "grey"; }
}

function changeFavouriteC(itemID, week) {
    var heart = document.getElementById('icon' + itemID + week);
    if (heart.style.color == "red") {
        heart.style.color = "grey";
        removeFav(itemID, week);

    }
    else {
        heart.style.color = "red";
        addToFav(itemID, week);

    }
}

function viewFavs() {
   

    var selectedItem = document.querySelectorAll('.noAnimation');
    selectedItem.forEach(items => {
        items.style.display = "block";
    });
}


function search() {

}


function addToCart(itemID, week) {
    var itemModal = document.getElementById('detailsModal' + itemID + week);
    var allItems = document.querySelectorAll('.modal');
    var cart = document.getElementById('cartContent');
    var cList = document.getElementById('orderSumm');

    if (cList.children.length === 0) {
        cart.textContent = "";
    }

    allItems.forEach(item => {
        if (item === itemModal) {
            var itemName = item.querySelector('#itemName').textContent;
            var itemImgSrc = item.querySelector('img').getAttribute('src');
           
            var header=document.getElementById('headerC');
            header.style.display="flex";

          

            var listItem = document.createElement('li');
             listItem.style.display="flex";
            var itemImg = document.createElement('img');
            itemImg.src = itemImgSrc;
          
            itemImg.style.width = "50px";
            itemImg.style.height = "50px";
            itemImg.style.marginRight="40px";
            itemImg.style.marginLeft="40px";
            listItem.appendChild(itemImg);
       
        
         
         
            // Append the item name text content, not the element itself
            listItem.appendChild(document.createTextNode(itemName));

            cList.appendChild(listItem);
        }
    });
    showMessage();
}


function viewCart() {

    var selectedItem = document.querySelectorAll('#itemName');
    selectedItem.forEach(item => {
        item.style.display = "block";
    });

}



function showMessage() {
    var msg = document.querySelectorAll('.message');
    msg.forEach(messg => {
        messg.style.display = "block";
    });
    setTimeout(closeMessage, 5000);

}

function closeMessage() {
    var message = document.querySelector('.message');
    message.style.display = "none";
    setTimeout(closeMessage, 3000);
}


function printError(elementID,hintMSG)
{
  document.getElementById(elementID).innerHTML=hintMSG;
}



function openWindow(iconToOpen) {
    document.getElementById(iconToOpen).style.display = "flex";
    if (iconToOpen === 'overlayFav') {
        viewFavs();

    }
    else {
        viewCart();
    }
}


function closeWindow(iconToClose) {
    document.getElementById(iconToClose).style.display = "none";
}