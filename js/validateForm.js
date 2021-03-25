
// Validates the form inputs

function validateName() {
    let formval = document.getElementById("firstname").value;
    if (formval == "") {
        alert("Please fill out your name.");
        return false;
    }
}