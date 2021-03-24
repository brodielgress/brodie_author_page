
// Validates the form inputs

function validateName(event) {
    event.preventDefault();
    let formval = document.getElementById("firstname").value;
    debugger;
    if (formval == "") {
        alert("Please fill out your name.");
        return false;
    }
}