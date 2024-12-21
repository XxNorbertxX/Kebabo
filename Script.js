$('section nav ul li a').on('click', function() {
    const goToSection = "#" + $(this).attr('class').replace("Link","") + "Id";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})

const burger = document.querySelector(".burger");

const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-xmark");
const column = document.querySelector("ul");

const seeMenu = document.querySelector(".SeeMenu");

seeMenu.addEventListener("click", function() {
    const goToSection = "#FoodMenuId";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})

var burgerIsClicked = false;
let backToTopButton = this.document.getElementById("backToTopBtn");
backToTopButton.style.display = "none";
burger.addEventListener("click", function() {
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
    column.classList.toggle("show");
    burgerIsClicked = true;
})

window.addEventListener('scroll', function() {
    const menu = this.document.getElementById("Burger");
    if (this.window.scrollY > 140) {
        menu.classList.add("show");
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
        if (burgerIsClicked) { menu.click(); burgerIsClicked = false; }
        menu.classList.remove("show");        
    }
})



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  //document.body.scrollTop = 0; // For Safari
  //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  const goToSection = "#NavigationMenu";
  $('body, html').animate({
      scrollTop: $(goToSection).offset().top
  })
}
 
var encEmail = "S2ViYWJAQWRhbWlBc2lhLmdtYWlsLmNvbQ==";
const form = document.getElementById("EmailLinkId");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));

function rot13(str) {
    return str.replace(/[a-zA-Z]/g, function(c) {
      return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
  }

  const mailspan = document.getElementById("EmailSpanId");
  mailspan.setAttribute("data-website", rot13(mailspan.getAttribute("data-website"))); 
  mailspan.setAttribute("data-user", rot13(mailspan.getAttribute("data-user"))); 