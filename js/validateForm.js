
// Validates the form inputs

function validateForms() {

    let nameval = document.getElementById("firstname").value;
    if (nameval == "") {
        alert("Please enter your name.");
    }

    let emailval = document.getElementById("emailaddress").value;
    if (emailval == "") {
        alert("Please fill out your email address.");
    }

    let inquiryval = document.getElementById("inquirybox").value;
    if (inquiryval == "") {
        alert("Please state your inquiry.");
        return false;
    }
}