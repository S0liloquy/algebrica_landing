//paralax function

$(document).ready(function () {
    $('.parallax').parallax();

       
       /* $('.btn-mod-border').on('click', function(e){
        $('.toggle').toggleClass('active');
        $('.btn-mod-border').toggleClass('btn-active');
            $('.secondary-link').toggleClass('link-active');
            
    })*/
       
//togle buttons
    
// set content on click
$('.btn-mod-border').click(function (e) {
    e.preventDefault();
    setContent($(this));
});

    
// set content on load
$('.btn-mod-border.btn-active').length && setContent($('.btn-mod-border.btn-active'));

function setContent($el) {
    $('.btn-mod-border').removeClass('btn-active');
    $('.toggle').hide();

    $el.addClass('btn-active');
    $($el.data('rel')).show();
};
        $(".button-collapse").sideNav();
           });


//hide menu on-scroll down

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('h-nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('h-nav-up').addClass('h-nav-down');
        }
    }
    
    lastScrollTop = st;
}




