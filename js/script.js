$(function () {
    //Start general
    //start smooth scroll
    $('.nav-item .nav-link, .navbar-brand, .to-top a').on('click', function () {
        $('html, body').animate({
            scrollTop : $('#' + $(this).data('target')).offset().top
        }, 1200);
    });
    //end smooth scroll

    //start to top arrow
        $(window).on('scroll',function () {
            if($(window).scrollTop() >= 400){
                $('.to-top').fadeIn(500);
            }else {
                $('.to-top').fadeOut(200);
            }
        });
    //end to top arrow
    //End general


    //start home
    $(".home").height($(window).height() - 100);

    //add class active to nav-items
    $('.nav-item').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    //end home
});