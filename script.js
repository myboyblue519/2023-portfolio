// const toggleButton = document.querySelector(".toggleButton")[0]
// const navBarLinks = document.querySelector(".navBarLinks")[0]

// toggleButton.addEventListener("click", () => {
//     navBarLinks.classList.toggle("active")
    
// });

function toggleNav() {
    var state = document.getElementsByTagName("nav")[0].style.display;
    if (state == 'block') {
        document.getElementsByTagName("nav")[0].style.display = 'none';
    } else {
        document.getElementsByTagName("nav")[0].style.display = 'block';
    }
}