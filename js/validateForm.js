
// Validates the form inputs

function validateForms() {
    let val = document.getElementById("firstname").value;
    if (val == "") {
        alert("Please fill out your name.");
        return false;
    }
}