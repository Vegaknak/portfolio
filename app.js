// fade animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }   else {
            entry.target.classList.remove('show');
        }

    });

});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    toggleButton.addEventListener("click", function() {
        navbar.classList.toggle("show"); // Toggle the 'show' class
    });
});
