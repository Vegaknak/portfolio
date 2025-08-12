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

// select all filter buttons and filterable cards in the portfolio page
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");


// def filterCards function
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    console.log(e.target);

    filterableCards.forEach(card => {
        card.classList.add("hide")
        // check if card matches selected filte  or all is selected
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    });
};

// add click event listener for each button
filterButtons.forEach(button => button.addEventListener("click", filterCards));
