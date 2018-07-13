$(function () {
    //Start general
    //start smooth scroll
    $('.nav-item .nav-link, .navbar-brand, .to-top a').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('target')).offset().top
        }, 1200);
    });
    //end smooth scroll

    //start to top arrow
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 400) {
            $('.to-top').fadeIn(500);
        } else {
            $('.to-top').fadeOut(200);
        }
    });
    //end to top arrow

    //start nice scroll
    if (window.matchMedia('(min-width: 1200px)').matches) {
        let color = '#21AE62';
        $("body").niceScroll(
            {
                cursorcolor: color,
                cursorwidth: "10px",
                cursorborder: "none",
                cursorborderradius: "5px"
            }
        );
    }
    //end nice scroll

    //start tooltip
    $('[data-toggle="tooltip"]').tooltip();
    //end tooltip

    //start popover
    $('[data-toggle="popover"]').popover({
        container: 'footer'
    });
    //end popover

    //start wow
    new WOW().init();
    //end wow
    //End general


    //start home
    $(".home").height($(window).height() - 100);

    //add class active to nav-items
    $('.nav-item, .nav-btn').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    //end home

    //start portfolio
    //shuffle
    $('.nav-btn').on('click', function () {
        if ($(this).data('class') === 'all') {
            $('.projects-wrapper .project').css('opacity', 1);
        } else {
            $('.projects-wrapper .project').css('opacity', .09);
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });
    //shuffle
    //end portfolio
});