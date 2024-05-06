

function showAccount() {
    var div = document.getElementById('account-content');
    div.style.display = "block";
}

// showing edit text fields
function showtextField(fieldID) {
    var field = document.getElementById(fieldID);
    field.style.display = "inline-block";
}

function printWarning(elementID, hintMSG) {
    document.getElementById(elementID).innerHTML = hintMSG;
}


function validation(editField, originalField, spanID) {
    var newInput = document.querySelector('input[name="' + editField + '"]');

    var nameRegex = /^[a-zA-Z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var numberRegex = /^(?:\+?88)?01[0-9]{9}$/;

    if (editField === 'editFname' || editField === 'editLname') {
        if (newInput.value.trim() === "") {
            printWarning(editField + "-err", "please enter an input");
        }
        else if (!nameRegex.test(newInput.value)) {
            printWarning(editField + "-err", "please enter a valid input.");
        }
        else {
            printWarning(editField + "-err", "");
            edit(editField, originalField, spanID);
        }
    }

    else if (editField === 'editEmail') {
        if (newInput.value.trim() === "") {
            printWarning(editField + "-err", "please enter an input");
        }
        else if (!emailRegex.test(newInput.value)) {
            printWarning(editField + "-err", "please enter a valid input.");
        }
        else {
            printWarning(editField + "-err", "");
            edit(editField, originalField, spanID);
        }
    }
    else if (editField === 'editNumber') {
        if (newInput.value.trim() === "") {
            printWarning(editField + "-err", "please enter an input");
        }
        else if (!numberRegex.test(newInput.value)) {
            printWarning(editField + "-err", "please enter a valid input.");
        }
        else {
            printWarning(editField + "-err", "");
            edit(editField, originalField, spanID);
        }
    }
    else {
        if (newInput.value.trim() === "") {
            printWarning(editField + "-err", "please enter an input");
        }
        else {
            printWarning(editField + "-err", "");
            edit(editField, originalField, spanID);
        }
    }
}



function edit(editfield, originfield, spanID) {
    var originalField = document.querySelector('input[name="' + originfield + '"]');
    var editedPart = document.querySelector('input[name="' + editfield + '"]');

    originalField.value = editedPart.value;

    var span = document.getElementById(spanID);
    if (span) {
        span.style.display = "none";
    }

    showMessage();
}


// after editting
function showMessage() {
    var msg = document.querySelectorAll('.message');
    msg.forEach(messg => {
        messg.style.display = "block";
    });
    setTimeout(closeMessage, 6000);

}

function closeMessage() {
    var message = document.querySelector('.message');
    message.style.display = "none";
    setTimeout(closeMessage, 3000);
}