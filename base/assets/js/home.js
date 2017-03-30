function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
    /* For Introduction Bar*/
    var $intro = $('.intro-with-image');
    // If the animation has already been started
    if ($intro.hasClass('end')) {

    }
    else if (isElementInViewport($intro)) {
        $(".intro-with-image").animate({left: '0px'},1000);
        $intro.addClass('end');
    }
    /*For the headline*/
    var $headline = $('.headline');
    // If the animation has already been started
    if ($headline.hasClass('end')) {

    }
    else if (isElementInViewport($headline)) {
        $(".headline").animate({left: '0px'},800);
        $headline.addClass('end');
    }
    /*For Past Event*/
    var $past = $('.past-events');
    // If the animation has already been started
    if ($past.hasClass('end')) {

    }
    else if (isElementInViewport($past)) {
        $(".past-events").animate({left: '0px'},800);
        $past.addClass('end');
    }
    /*For The Contact*/
    var $contact = $('.time-contact');
    // If the animation has already been started
    if ($contact.hasClass('end')) {

    }
    else if (isElementInViewport($contact)) {
        $(".time-contact").animate({left: '0px'},800);
        $contact.addClass('end');
    }
    /*For Welcome Intro*/
    var $welcome = $('.welcome-intro');
    // If the animation has already been started
    if ($welcome.hasClass('end')) {

    }
    else if (isElementInViewport($welcome)) {
        $(".welcome-intro").animate({left: '0px'},800);
        $welcome.addClass('end');
    }
    /*For the whole menu*/
    var $menu = $('.menu');
    // If the animation has already been started
    if ($menu.hasClass('end')) {

    }
    else if (isElementInViewport($menu)) {
        $(".menu").animate({left: '0px'},800);
        $menu.addClass('end');
    }
    /*For contact menu*/
    var $book = $('.book-table');
    // If the animation has already been started
    if ($book.hasClass('end')) {

    }
    else if (isElementInViewport($book)) {
        $(".book-table").animate({left: '0px'},800);
        $book.addClass('end');
    }
    /*For contact menu*/
    var $us = $('.contact-us-now');
    // If the animation has already been started
    if ($us.hasClass('end')) {

    }
    else if (isElementInViewport($us)) {
        $(".contact-us-now").animate({left: '0px'},800);
        $us.addClass('end');
    }
    /*Event For Upcoming*/
    var $Upcoming = $('.event');
    // If the animation has already been started
    if ($Upcoming.hasClass('end')) {

    }
    else if (isElementInViewport($Upcoming)) {
        $(".event").animate({left: '0px'},800);
        $Upcoming.addClass('end');
    }
    /*For Introduction*/
    var $eventIntro = $('.event-intro');
    // If the animation has already been started
    if ($eventIntro.hasClass('end')) {

    }
    else if (isElementInViewport($eventIntro)) {
        $(".event-intro").animate({left: '0px'},800);
        $eventIntro.addClass('end');
    }
    var $bestIntro = $('.best-intro');
    // If the animation has already been started
    if ($bestIntro.hasClass('end')) {

    }
    else if (isElementInViewport($bestIntro)) {
        $(".best-intro").animate({left: '0px'},800);
        $bestIntro.addClass('end');
    }
    var $conIntro = $('.contact-intro');
    // If the animation has already been started
    if ($conIntro.hasClass('end')) {

    }
    else if (isElementInViewport($conIntro)) {
        $(".contact-intro").animate({left: '0px'},800);
        $conIntro.addClass('end');
    }
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
});
$(document).ready(function(){
    checkAnimation();
});