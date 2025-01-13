/** Variables **/

const burger = document.querySelector(".burger");
const burgerIcon = document.querySelector(".fa-bars");
const burgerIconX = document.querySelector(".fa-xmark");
const column = document.querySelector("ul");
const goToMenu = document.querySelector(".goToMenu");
var burgerIsClicked = false;
let backToTopButton = this.document.getElementById("backToTopId");
let counter = 1;
let currentCounterFoodMenuItem = 0;
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
    if (foodMenuItems.length > 1)
    {
        foodMenuItems.forEach(foodMenuItem => {
            let foodMenuItemBoundingDetails = foodMenuItem.getBoundingClientRect();
            let foodMenuItemStartPointY = foodMenuItemBoundingDetails["y"];
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
                    foodMenuItemWithInterval.querySelector('.foodMenuItemDescriptions #foodMenuItemHeader' + currentCounterFoodMenuItem).style["font-weight"]="normal";
                    foodMenuItemWithInterval.querySelector('.foodMenuItemDescriptions #foodMenuItemDetails' + currentCounterFoodMenuItem).style["font-weight"]="normal";  
                    foodMenuItemWithInterval.querySelector('.foodMenuItemDescriptions #foodMenuItemHeader' + currentCounterFoodMenuItem).style["color"]="tan";
                    foodMenuItemWithInterval.querySelector('.foodMenuItemDescriptions #foodMenuItemDetails' + currentCounterFoodMenuItem).style["color"]="tan"; 
                    foodMenuItemWithInterval = null;
                    currentCounterFoodMenuItem = 0;
                    nextCounterFoodMenuItem = 1;
                }
            }
        });
    }
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
    let nextCounterFoodMenuItem = 1;
    intervalFoodMenuItem = setInterval(
        function()
        {
            foodMenuItemWithInterval.querySelectorAll('.foodMenuItemImages > *').forEach(image => { image.style.display = "none"; });
            if (currentCounterFoodMenuItem != this.document.getElementById("foodMenuId").children.length - 1 && nextCounterFoodMenuItem == 1)
            {
                foodMenuItemWithInterval.querySelector('.foodMenuItemImages #foodMenuItemImage' + nextCounterFoodMenuItem).style.display = "inline-block";
                foodMenuItemWithInterval.querySelector('.foodMenuItemDescriptions #foodMenuItemHeader' + nextCounterFoodMenuItem).style["font-weight"]="bolder"; 
                foodMenuItemWithInterval.querySelector('.foodMenuItemDescriptions #foodMenuItemDetails' + nextCounterFoodMenuItem).style["font-weight"]="bolder";
                foodMenuItemWithInterval.querySelector('.foodMenuItemDescriptions #foodMenuItemHeader' + nextCounterFoodMenuItem).style["color"]="gold";   
                foodMenuItemWithInterval.querySelector('.foodMenuItemDescriptions #foodMenuItemDetails' + nextCounterFoodMenuItem).style["color"]="gold";                
            }
            else
            {
                foodMenuItemWithInterval.querySelector('.foodMenuItemImages #foodMenuItemImage' + currentCounterFoodMenuItem).style.display = "none";
                foodMenuItemWithInterval.querySelector('.foodMenuItemDescriptions #foodMenuItemHeader' + currentCounterFoodMenuItem).style["font-weight"]="normal";
                foodMenuItemWithInterval.querySelector('.foodMenuItemDescriptions #foodMenuItemDetails' + currentCounterFoodMenuItem).style["font-weight"]="normal";  
                foodMenuItemWithInterval.querySelector('.foodMenuItemDescriptions #foodMenuItemHeader' + currentCounterFoodMenuItem).style["color"]="tan";
                foodMenuItemWithInterval.querySelector('.foodMenuItemDescriptions #foodMenuItemDetails' + currentCounterFoodMenuItem).style["color"]="tan";   
                
                foodMenuItemWithInterval.querySelector('.foodMenuItemImages #foodMenuItemImage' + nextCounterFoodMenuItem).style.display = "inline-block";
                foodMenuItemWithInterval.querySelector('.foodMenuItemDescriptions #foodMenuItemHeader' + nextCounterFoodMenuItem).style["font-weight"]="bolder"; 
                foodMenuItemWithInterval.querySelector('.foodMenuItemDescriptions #foodMenuItemDetails' + nextCounterFoodMenuItem).style["font-weight"]="bolder";
                foodMenuItemWithInterval.querySelector('.foodMenuItemDescriptions #foodMenuItemHeader' + nextCounterFoodMenuItem).style["color"]="gold";   
                foodMenuItemWithInterval.querySelector('.foodMenuItemDescriptions #foodMenuItemDetails' + nextCounterFoodMenuItem).style["color"]="gold"; 
            }
            currentCounterFoodMenuItem = nextCounterFoodMenuItem;
            nextCounterFoodMenuItem++;
            if (currentCounterFoodMenuItem == this.document.getElementById("foodMenuId").children.length - 1) { nextCounterFoodMenuItem = 1; }           
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
    const delayInMilliseconds = 2000;

    $('.foodMenuItem').each(function() {
        var element = $(this);
        var itemFromTop = element.offset().top;
        var itemHeight = element.outerHeight();        
        if (scrollValue > itemFromTop + itemHeight/2 - windowHeight) {
            element.addClass('showAfterScrollOn');
            element.find('.foodMenuItemImages').addClass('showAfterScrollOn');
            setTimeout(function() {
                $(element).find('.foodMenuItemDescriptions').css('display','inline-block');
                $(element).find('.foodMenuItemDescriptions').addClass('flow');                
            }, delayInMilliseconds);
        }
    });

    if (scrollValue < 100) {
        $('.foodMenu .foodMenuItem').removeClass('showAfterScrollOn');    
        $('.foodMenu .foodMenuItem .foodMenuItemImages').removeClass('showAfterScrollOn');
        $('.foodMenu .foodMenuItem .foodMenuItemDescriptions').removeClass('flow');         
    }
})