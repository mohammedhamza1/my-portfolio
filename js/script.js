$(function () {
    //start home

    $(".home").height($(window).height() - 100);

    //add class active to nav-items
    $('.nav-item').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //end home
});