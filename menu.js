
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


function addToFav(itemID)
{
var item=document.getElementById('item'+itemID);
var copy=item.cloneNode(true);
copy.classList.add('noAnimation');
var favouritesList=document.getElementById('favList');
favouritesList.appendChild(copy);
}

function removeFav(itemID,week){
var removed=document.getElementById('item'+itemID);
var favouritesList=document.getElementById('favList');
favouritesList.removeChild(removed);

var heart=document.getElementById('item'+itemID+week);
if(heart.style.color=="red")
{heart.style.color="grey";}
}

function changeFavouriteC(itemID,week)
{
    var heart=document.getElementById('item'+itemID+week);
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

function addToCart(itemID,week)
{
     var item=document.getElementById('item'+itemID+week);
     var itemName=document.getElementById('title0')

    console.log("Item Name:", itemName);
    
}


function openWindow(iconToOpen)
{
  document.getElementById(iconToOpen).style.display="flex";  
}

function closeWindow(iconToClose)
{
    document.getElementById(iconToClose).style.display="none";
}