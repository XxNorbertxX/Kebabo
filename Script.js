$('section nav ul li a').on('click', function() {
    const goToSection = "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})

const burger = document.querySelector(".burger");

const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-xmark");
const column = document.querySelector("ul");

burger.addEventListener("click", function() {
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
    column.classList.toggle("show");
})

window.addEventListener('scroll', function() {
    const menu = this.document.getElementById("Burger");
    if (this.window.scrollY > 140) {
        menu.classList.add("show");
    } else {
        menu.classList.remove("show");
    }
})
 