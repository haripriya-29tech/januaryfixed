// side menu
$(document).on("scroll", onScroll);

//smoothscroll
var _scroll = $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");


    $('.np_content_tabs ul li a').each(function () {
        $(this).removeClass('active');
    })
    $(this).addClass('active');


    var target = $(this).attr('href'),
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 20
    }, 500, 'swing', function () {
        // window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop() + 22;

    $('.np_content_tabs a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.np_content_tabs ul li a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });

}

// dropdown
$('.np_dropdown_arrow').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('open');
    $(this).parents('.np_dropdown').find('.np_dropdown_menu').slideToggle();
})

// mobile menu
$('.np_content_tabs_menu').on('click', function () {
    $(this).toggleClass('active');
    $('.np_content_tabs > ul').toggleClass('open');
    $('.np_outlook').toggleClass('np_overlay');
})