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

    //start progress
    var bar = new ProgressBar.Circle(skill1, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 6000,
        color: '#00C853',
        trailColor: 'transparent',
        trailWidth: 1,
        svgStyle: null
    });

    bar.animate(0.9);  // Number from 0.0 to 1.0
    var bar = new ProgressBar.Circle(skill2, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 7000,
        color: '#00C853',
        trailColor: 'transparent',
        trailWidth: 1,
        svgStyle: null
    });

    bar.animate(0.8);  // Number from 0.0 to 1.0
    var bar = new ProgressBar.Circle(skill3, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 5000,
        color: '#00C853',
        trailColor: 'transparent',
        trailWidth: 1,
        svgStyle: null
    });

    bar.animate(0.6);  // Number from 0.0 to 1.0
    var bar = new ProgressBar.Circle(skill4, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 4000,
        color: '#00C853',
        trailColor: 'transparent',
        trailWidth: 1,
        svgStyle: null
    });

    bar.animate(0.7);  // Number from 0.0 to 1.0
    var bar = new ProgressBar.Circle(skill5, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 9000,
        color: '#00C853',
        trailColor: 'transparent',
        trailWidth: 1,
        svgStyle: null
    });

    bar.animate(0.8);  // Number from 0.0 to 1.0
    var bar = new ProgressBar.Circle(skill6, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 6000,
        color: '#00C853',
        trailColor: 'transparent',
        trailWidth: 1,
        svgStyle: null
    });

    bar.animate(0.7);  // Number from 0.0 to 1.0
    var bar = new ProgressBar.Circle(skill7, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 9000,
        color: '#00C853',
        trailColor: 'transparent',
        trailWidth: 1,
        svgStyle: null
    });

    bar.animate(0.75);  // Number from 0.0 to 1.0
    var bar = new ProgressBar.Circle(skill8, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 8000,
        color: '#00C853',
        trailColor: 'transparent',
        trailWidth: 1,
        svgStyle: null
    });

    bar.animate(0.65);  // Number from 0.0 to 1.0
    //end progress

    //media query
    //switch between services section in deffirent screens
    if (window.matchMedia('(max-width: 575px)').matches) {
        $('.services').remove();
        $('.services-mobile').show();
    } else {
        $('.services-mobile').remove();
        $('.services').show();
    }
    //end media query

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

    //start contact
    //hide this (alt contact section) for now
    if (window.matchMedia('(min-width: 0px)').matches) {
        $('.second-contact-form').remove();
    }
    //set map height to form height
    $('.map iframe').height($('.second-contact-form form').height());
    //end contact
});