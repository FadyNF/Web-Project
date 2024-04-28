

function Details(itemName, itemDescription) {
    var modal = document.getElementById("detailsModal");
    var itemNameElement = document.getElementById("itemName");
    var itemDescriptionElement = document.getElementById("itemDescription");

    itemNameElement.textContent = itemName;
    itemDescriptionElement.textContent = itemDescription;
    modal.style.display = "block";
}

function closeM() {
    var modal = document.getElementById("detailsModal");
    modal.style.display = "none";
}

function changeDate(dateRange) {
    document.getElementById('titleM').textContent = "MENU FOR " + dateRange;


}
