$(function () {
    //Start general
    //start smooth scroll
    $('.nav-item .nav-link, .navbar-brand').click(function () {
        $('html, body').animate({
            scrollTop : $('#' + $(this).data('target')).offset().top
        }, 1200);
    });
    //end smooth scroll
    //End general


    //start home
    $(".home").height($(window).height() - 100);

    //add class active to nav-items
    $('.nav-item').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    //end home
});