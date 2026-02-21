$(document).ready(function(){
    setTimeout(function(){ updateActiveTab(); }, 500);
});

$(window).on('resize', function(){
    setTimeout(function(){ updateActiveTab(); }, 500);
});

// Function to update active tab styling
function updateActiveTab(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position().top;
    var itemPosNewAnimLeft = activeItemNewAnim.position().left;

    $(".hori-selector").css({
        "top": itemPosNewAnimTop + "px", 
        "left": itemPosNewAnimLeft + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
    });
}

// Handle click event on navbar links correctly
$("#navbarSupportedContent").on("click", "a", function(event){
    var newPage = $(this).attr("href");
    if(newPage && newPage !== "javascript:void(0);") {
        window.location.href = newPage;
    } else {
        event.preventDefault();
    }
});

// Handle active class when navigating between pages
$(document).ready(function(){
    var path = window.location.pathname.split("/").pop();
    if (path == '') { path = 'homepage.html'; }
    var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
    if (target.length) {
        target.parent().addClass('active');
    }
});

// Close mobile menu on link click
$(".nav-link").click(function(){
    $(".navbar-collapse").collapse('hide');
});

// Mobile navbar toggle fix
$(".navbar-toggler").click(function(){
    $(".navbar-collapse").slideToggle(300);
    setTimeout(function(){ updateActiveTab(); }, 300);
});
