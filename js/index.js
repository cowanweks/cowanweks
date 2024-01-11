const carouselImages = document.querySelectorAll("#hero #carousel .image")


document.addEventListener("DOMContentLoaded", () => {

    // setInterval(scrollCarousel, 5000);
})

window.addEventListener("scroll", () => {
    let mybutton = document.getElementById("btn__totop");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
})

function openTab(evt, tabname) {
    // Declare all variables
    let i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
}


function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


window.addEventListener('scroll', () => {
    const navbar = document.getElementById('header');
    let top = navbar.offsetTop;

    if (window.scrollY >= top) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});


function scrollCarousel() {
    const images = []
    console.log("Hello")
    carouselImages.forEach(image => {
        image.style.display = "none"
    })
}