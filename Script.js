/** Variables **/

const burger = document.querySelector(".burger");
const burgerIcon = document.querySelector(".fa-bars");
const burgerIconX = document.querySelector(".fa-xmark");
const column = document.querySelector("ul");
const goToMenu = document.querySelector(".goToMenu");
var burgerIsClicked = false;
let backToTopButton = this.document.getElementById("backToTopId");
let counter = 1;
let counterFoodMenuItem = 1;
const halfScreen = window.innerHeight/2;
const foodMenu = this.document.getElementById("foodMenuId");
let intervalId;
let intervalFoodMenuItem;
let foodMenuItemWithInterval;

/** JS **/

/* Initialize */ 

backToTopButton.style.display = "none";
document.getElementById('radio1').checked = true;
intervalId = setInterval(
    function()
    {
        document.getElementById('radio' + counter).checked = true;
        counter++;

        if (counter>4) {
            counter = 1;
        }
    },6000)

/* Events */

goToMenu.addEventListener("click", function() {    
    $('body, html').animate({
        scrollTop: $("#foodMenuId").offset().top
    })
})

burger.addEventListener("click", function() {
    burgerIcon.classList.toggle("show");
    burgerIconX.classList.toggle("show");
    column.classList.toggle("show");
    burgerIsClicked = true;
})

window.addEventListener('scroll', function() {
    const menu = this.document.getElementById("burgerId");
    if (this.window.scrollY > 80) {
        menu.classList.add("show");
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
        if (burgerIsClicked) { menu.click(); burgerIsClicked = false; }
        menu.classList.remove("show");        
    }
    
    let foodMenuItems = foodMenu.querySelectorAll('.foodMenuItem');
    foodMenuItems.forEach(foodMenuItem => {
        let foodMenuItemBoundingDetails = foodMenuItem.getBoundingClientRect();
        let foodMenuItemStartPointY = foodMenuItemBoundingDetails["y"];
        /*alert("name: " + foodMenuItem.className + "\n" + "entrypoint: " + foodMenuItemStartPointY + "\n" + "halfscreen: " + halfScreen);*/
        if (foodMenuItemWithInterval==null && foodMenuItemStartPointY < halfScreen && foodMenuItemStartPointY >= 0)
        {         
            setIntervalFoodMenuItem();
            foodMenuItemWithInterval = foodMenuItem;
        }
        else
        {
            if (foodMenuItemWithInterval == foodMenuItem && (foodMenuItemStartPointY < 0 || foodMenuItemStartPointY > halfScreen))
            {
                clearInterval(intervalFoodMenuItem);
                foodMenuItemWithInterval = null;
                counterFoodMenuItem = 1;
            }
        }
    });
})

/** Functions **/

function topFunction() {
    const goToSection = "#navigationMenuId";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
}

function setIntervalFoodMenuItem()
{
    intervalFoodMenuItem = setInterval(
        function()
        {            
            foodMenuItemWithInterval.querySelector('.ItemImages #ItemImage' + counterFoodMenuItem).style.display = "none";
            foodMenuItemWithInterval.querySelector('.ItemDescriptions .ItemHeader' + counterFoodMenuItem).style["font-weight"]="normal";
            foodMenuItemWithInterval.querySelector('.ItemDescriptions .ItemDetails' + counterFoodMenuItem).style["font-weight"]="normal";  
            if (counterFoodMenuItem == this.document.getElementById("foodMenuId").children.length - 1) { counterFoodMenuItem = 1; }
            else counterFoodMenuItem++;            
            foodMenuItemWithInterval.querySelector('.ItemImages #ItemImage' + counterFoodMenuItem).style.display = "inline-block";
            foodMenuItemWithInterval.querySelector('.ItemDescriptions .ItemHeader' + counterFoodMenuItem).style["font-weight"]="bolder"; 
            foodMenuItemWithInterval.querySelector('.ItemDescriptions .ItemDetails' + counterFoodMenuItem).style["font-weight"]="bolder";           
        },3000)
}

/* Email Functions */

var encEmail = "S2ViYWJAQWRhbWlBc2lhLmdtYWlsLmNvbQ==";
const form = document.getElementById("emailLinkId");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));

function rot13(str) {
    return str.replace(/[a-zA-Z]/g, function(c) {
      return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
}

const mailspan = document.getElementById("emailSpanId");
mailspan.setAttribute("data-website", rot13(mailspan.getAttribute("data-website"))); 
mailspan.setAttribute("data-user", rot13(mailspan.getAttribute("data-user"))); 


/* JQuery */

$('section nav ul li a').on('click', function() {
    const goToSection = "#" + $(this).attr('class').replace("Link","") + "Id";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})

$(document).on('scroll', function() {
    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();

    const $wrap = $('.wrap');
    const wrapFromTop = $wrap.offset().top
    const wrapHeight = $wrap.outerHeight()

    const $tortilla = $('.tortilla');
    const tortillaFromTop = $tortilla.offset().top
    const tortillaHeight = $tortilla.outerHeight()

    const $pita = $('.pita');
    const pitaFromTop = $pita.offset().top
    const pitaHeight = $pita.outerHeight()

    const $bread = $('.bread');
    const breadFromTop = $bread.offset().top
    const breadHeight = $bread.outerHeight()

    if (scrollValue > wrapFromTop + wrapHeight - windowHeight) {
        $wrap.addClass('flow');
    }
    if (scrollValue> tortillaFromTop + tortillaHeight - windowHeight) {         
        $tortilla.addClass('flow');              
    }
    if (scrollValue> pitaFromTop + pitaHeight - windowHeight) {
        $pita.addClass('flow');
    }
    if (scrollValue> breadFromTop + breadHeight - windowHeight) {        
        $bread.addClass('flow');        
    }
    if (scrollValue < 100) {
        $('.foodMenu div').removeClass('flow');    
    }
})