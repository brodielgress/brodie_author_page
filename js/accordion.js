// Expands/collapses sections of the website
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

    let section = this.nextElementSibling;
    if (section.style.display === "flex") {
        section.style.display = "none";
    } else {
        section.style.display = "flex";
    }

    });
}