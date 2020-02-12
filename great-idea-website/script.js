// Getting navbar from html document
var navbar = document.getElementById("navbar");

// Setting var for offset position of navbar
var sticky = navbar.offsetTop;

// Function to add fixed class to navbar when YOffset criteria is met. Removing class when back to top.
stickynav = () => {
    if (window.pageYOffset >= sticky){
        navbar.classList.add("fixed")
    } else {
        navbar.classList.remove("fixed");
    }
}

// Calling Function
window.onscroll = function() {stickynav()};