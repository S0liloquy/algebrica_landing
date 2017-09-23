$(document).ready(function(){
    $('.parallax').parallax();

       
       /* $('.btn-mod-border').on('click', function(e){
        $('.toggle').toggleClass('active');
        $('.btn-mod-border').toggleClass('btn-active');
            $('.secondary-link').toggleClass('link-active');
            
    })*/
       
       // set content on click
$('.btn-mod-border').click(function(e) {
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