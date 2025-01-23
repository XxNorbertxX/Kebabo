/** Variables **/

const halfScreen = window.innerHeight/2;
var currentScrollValue=0;
var previousScrollValue=0;

const column = document.querySelector("ul");
const goToMenu = document.querySelector(".goToMenu");

/* backToTop variables */
var backToTopButton = this.document.getElementById("backToTopId");

/* slider variables */
var nextSlideCounter = 1;
var sliderInterval;

/* food menu variables */
const foodMenu = this.document.getElementById("foodMenuId");
var foodMenuItemCurrentId = 1;
var foodMenuItemIntervalId;
var foodMenuItemWithInterval;

/* about us variables */

var commitmentClicked = null;
var commitmentIntevalId = 0;

/** JS Code **/

/* Initialize */ 

backToTopButton.style.display = "none";

/* Timers */

sliderInterval = setInterval(switchSlide,5000);

/* Events */

goToMenu.addEventListener("click", function() {    
    $('body, html').animate({
        scrollTop: $("#foodMenuId").offset().top - $('#navigationMenuId').height()
    })
})

window.addEventListener('scroll', function() {

    if (this.window.scrollY > 80) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";     
    }
    
    let foodMenuItems = foodMenu.querySelectorAll('.foodMenuItem');
    foodMenuItems.forEach(foodMenuItem => {
        let foodMenuItemBoundingDetails = foodMenuItem.getBoundingClientRect();
        let foodMenuItemStartPointY = foodMenuItemBoundingDetails["y"];
        if (foodMenuItem.querySelectorAll('.foodMenuItemImages img').length > 1)
        {
            if (foodMenuItemWithInterval==null && foodMenuItemStartPointY < halfScreen && foodMenuItemStartPointY >= 0)
            {   
                setIntervalFoodMenuItem();
                foodMenuItemWithInterval = foodMenuItem;
            }
            else
            {
                if (foodMenuItemWithInterval == foodMenuItem && (foodMenuItemStartPointY < 0 || foodMenuItemStartPointY > halfScreen))
                {
                    clearInterval(foodMenuItemIntervalId);
                    let foodMenuItemHeaderSelection = foodMenuItemWithInterval.querySelector('.foodMenuItemDescriptions #foodMenuItemHeader' + foodMenuItemCurrentId);
                    let foodMenuItemDetailsSelection = foodMenuItemWithInterval.querySelector('.foodMenuItemDescriptions #foodMenuItemDetails' + foodMenuItemCurrentId);
                    if (foodMenuItemHeaderSelection !== null)
                    {
                        foodMenuItemHeaderSelection.style["font-weight"]="normal";                 
                        foodMenuItemHeaderSelection.style["color"]="tan";   
                    }
                    if (foodMenuItemDetailsSelection !== null) 
                    {
                        foodMenuItemDetailsSelection.style["font-weight"]="normal";
                        foodMenuItemDetailsSelection.style["color"]="tan";
                    }
                    foodMenuItemWithInterval = null;
                    foodMenuItemIntervalId= null;
                    foodMenuItemCurrentId = 1;                    
                }
            }
        }
    });
})

/** Functions **/

function checkRadio(id) {
    let selectedRadioId = id.replace("slide","");
    clearInterval(sliderInterval);
    nextSlideCounter = selectedRadioId;
    sliderInterval = setInterval(switchSlide,5000);
}

function switchSlide()
{
    document.getElementById('slide' + nextSlideCounter).checked = true;
    nextSlideCounter++;

    if (nextSlideCounter>5) {
        nextSlideCounter = 1;
    }
}  

function topFunction() {
    const goToSection = "#navigationMenuId";
    $(goToSection).css('position',"static");
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
    $(goToSection).css('position',"sticky");
}

function setIntervalFoodMenuItem()
{    
    let foodMenuItemNextId = 1;    
    foodMenuItemIntervalId = setInterval(
        function()
        {
            let foodMenuItemWithIntervalElementsCount = foodMenuItemWithInterval.querySelector(".foodMenuItemImages").children.length;

            let foodMenuItemImageCurrentSelection = foodMenuItemWithInterval.querySelector('.foodMenuItemImages #foodMenuItemImage' + foodMenuItemCurrentId);
            let foodMenuItemHeaderCurrentSelection = foodMenuItemWithInterval.querySelector('.foodMenuItemDescriptions #foodMenuItemHeader' + foodMenuItemCurrentId);
            let foodMenuItemDetailsCurrentSelection = foodMenuItemWithInterval.querySelector('.foodMenuItemDescriptions #foodMenuItemDetails' + foodMenuItemCurrentId);

            let foodMenuItemImageNextSelection = foodMenuItemWithInterval.querySelector('.foodMenuItemImages #foodMenuItemImage' + foodMenuItemNextId);
            let foodMenuItemHeaderNextSelection = foodMenuItemWithInterval.querySelector('.foodMenuItemDescriptions #foodMenuItemHeader' + foodMenuItemNextId);
            let foodMenuItemDetailsNextSelection = foodMenuItemWithInterval.querySelector('.foodMenuItemDescriptions #foodMenuItemDetails' + foodMenuItemNextId); 

            foodMenuItemWithInterval.querySelectorAll('.foodMenuItemImages > *').forEach(image => { image.style.display = "none"; });

            if (foodMenuItemCurrentId != foodMenuItemWithIntervalElementsCount && foodMenuItemNextId == 1)
            {
                if (foodMenuItemImageNextSelection !== null && foodMenuItemHeaderNextSelection !== null)
                {
                    foodMenuItemImageNextSelection.style.display = "inline-block";
                    foodMenuItemHeaderNextSelection.style["font-weight"]="bolder";                 
                    foodMenuItemHeaderNextSelection.style["color"]="gold";   
                }
                if (foodMenuItemDetailsNextSelection !== null) 
                {
                    foodMenuItemDetailsNextSelection.style["font-weight"]="bolder";
                    foodMenuItemDetailsNextSelection.style["color"]="gold";
                }                                
            }
            else
            {
                if (foodMenuItemImageCurrentSelection !== null && foodMenuItemHeaderCurrentSelection !== null)
                {
                    foodMenuItemImageCurrentSelection.style.display = "none";
                    foodMenuItemHeaderCurrentSelection.style["font-weight"]="normal";                 
                    foodMenuItemHeaderCurrentSelection.style["color"]="tan";   
                }
                if (foodMenuItemDetailsCurrentSelection !== null) 
                {
                    foodMenuItemDetailsCurrentSelection.style["font-weight"]="normal";
                    foodMenuItemDetailsCurrentSelection.style["color"]="tan";
                }  
                
                
                if (foodMenuItemImageNextSelection !== null && foodMenuItemHeaderNextSelection !== null)
                {
                    foodMenuItemImageNextSelection.style.display = "inline-block";
                    foodMenuItemHeaderNextSelection.style["font-weight"]="bolder";                 
                    foodMenuItemHeaderNextSelection.style["color"]="gold";   
                }
                if (foodMenuItemDetailsNextSelection !== null) 
                {
                    foodMenuItemDetailsNextSelection.style["font-weight"]="bolder";
                    foodMenuItemDetailsNextSelection.style["color"]="gold";
                }  
            }
            foodMenuItemCurrentId = foodMenuItemNextId;
            foodMenuItemNextId++;
            if (foodMenuItemCurrentId == foodMenuItemWithIntervalElementsCount) { foodMenuItemNextId = 1; }           
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


/* JQuery Code */

$('section nav ul li a').on('click', function() {
    const goToSection = "#" + $(this).attr('class').replace("Link","") + "Id";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top - $('#navigationMenuId').height()
    })
})

$(document).on('scroll', function() {

    const windowHeight = $(window).height();
    currentScrollValue = $(this).scrollTop();  

    $('.foodMenuItem').each(function() {
        var element = $(this);
        var itemFromTop = element.offset().top;
        var itemHeight = element.outerHeight();
        if (currentScrollValue > itemFromTop + itemHeight/2 - windowHeight) {
            element.addClass('showAfterScrollOn');
            element.find('.foodMenuItemImages').addClass('showAfterScrollOn');
            element.find('.foodMenuItemDescriptions').addClass('flow');
            element.find('.foodMenuItemDescriptionsNoFlow').addClass('showAfterScrollOn');
        }
    });
    if (currentScrollValue > 0)
    {
        $('.navigationMenu').css('border-bottom','1.5px solid tan');
    }
    else
    {
        $('.navigationMenu').css('border-bottom','none');
    }
    if (currentScrollValue < 200 && currentScrollValue < previousScrollValue) {
        previousScrollValue = currentScrollValue;     
        $('.foodMenu .foodMenuItem').removeClass('showAfterScrollOn');    
        $('.foodMenu .foodMenuItem .foodMenuItemImages').removeClass('showAfterScrollOn');
        $('.foodMenu .foodMenuItem .foodMenuItemDescriptionsNoFlow').removeClass('showAfterScrollOn');
        $('.foodMenu .foodMenuItem .foodMenuItemDescriptions').removeClass('flow');
        $('.foodMenu .foodMenuItem .foodMenuItemImages > *').each(function() { var elementt = $(this); elementt.removeAttr("display"); }); 
    }
    else {previousScrollValue = currentScrollValue;}
})

$('.flipBoxInner').on('click', function() {    
    if ($(this).css("transform") == 'none' ){
        clearTimeout(commitmentIntevalId);
        $(commitmentClicked).css("transform","" );
        $(commitmentClicked).find('.flipBoxFront').css("visibility","visible");
        commitmentClicked = $(this);
        $(this).css("transform","rotateY(180deg)");
        $(this).find('.flipBoxFront').css("visibility","hidden");
        commitmentIntevalId = setTimeout(function() {
            $(commitmentClicked).css("transform","" );
            $(commitmentClicked).find('.flipBoxFront').css("visibility","visible");
        },10000)
    }
});