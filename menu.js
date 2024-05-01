
window.onload = function()
{
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


function gettingDates(sDay){
    var currDate=new Date();
    var dateOfStarting=new Date(currDate);
    dateOfStarting.setDate(dateOfStarting.getDate()+sDay);


    var dateOfEnding=new Date(dateOfStarting);
    dateOfEnding.setDate(dateOfEnding.getDate()+6);

    var start=dateFormat(dateOfStarting);
    var end=dateFormat(dateOfEnding);

    document.getElementById('titleM').textContent="MENU FOR "+ start+" - "+end;
}
function dateFormat(date)
{
    var day=date.getDate();
    var month=date.toLocaleString('default',{month:'short'});
    return(day<10?'0':'')+day+''+month;
}


function addToFav(itemID,week)
{
var item=document.getElementById('item'+itemID+week);
var copy=item.cloneNode(true);
copy.classList.add('noAnimation');
var favouritesList=document.getElementById('favList');
favouritesList.appendChild(copy);
}

function removeFav(itemID,week){
var removed=document.getElementById('item'+itemID+week);
var favouritesList=document.getElementById('favList');
favouritesList.removeChild(removed);

var heart=document.getElementById('icon'+itemID+week);
if(heart.style.color=="red")
{heart.style.color="grey";}
}

function changeFavouriteC(itemID,week)
{
    var heart=document.getElementById('icon'+itemID+week);
    if(heart.style.color=="red")
    {
         heart.style.color="grey";
         removeFav(itemID,week);

    }
    else{
        heart.style.color="red";
        addToFav(itemID,week);

    }
}

function viewFavs()
{
    var allItems=document.querySelectorAll('.items');
    allItems.forEach(meals=>{
        meals.style.display="none";
    });

    var selectedItem=document.querySelectorAll('.noAnimation');
    selectedItem.forEach(items=> {
items.style.display="block";
    });
}


function search() {
    
}


function addToCart(itemID, week) {
    // Get the item details modal
    var itemModal = document.getElementById('detailsModal' + itemID + week);
    
    // Get all modal content elements
    var allItems = document.querySelectorAll('.modal');

    // Loop through all modal content elements
    allItems.forEach(function(item) {
        // Check if the current item matches the one selected
        if (item === itemModal) {
            // Extract item details from the current modal content
            var itemName = item.querySelector('#itemName').textContent;
            var itemImage = item.querySelector('img').getAttribute('src');
            
            // Get the cart list element
            var cartList = document.getElementById('orderSumm');
            
            // Create a new list item element
            var listItem = document.createElement('li');
            
            // Set the text content of the list item to the item name
            listItem.textContent = itemName;

            // Append the list item to the cart list
            cartList.appendChild(listItem);

            // Log item details
            console.log("Item Name:", itemName);
            console.log("Item Image URL:", itemImage);
           
            // Add item to cart or perform other actions
            // (You can add your logic here)
        }
    });
}



function openWindow(iconToOpen)
{
  document.getElementById(iconToOpen).style.display="flex"; 
  viewFavs(); 
}

function closeWindow(iconToClose)
{
    document.getElementById(iconToClose).style.display="none";
}