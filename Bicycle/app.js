$(function() {
 
    /* Fixed Header */
    let header = $("#header");
    let top = $("#top");
    let topH = top.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");

    checkScroll(scrollPos, topH);

    $(window).on("scroll resize", function() {
        topH = top.innerHeight();
        scrollPos = $(this).scrollTop(); 

        checkScroll(scrollPos, topH);
    });

    function checkScroll(scrollPos, topH) {
        if(scrollPos > topH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    /* Smoth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop:  elementOffset-100
        }, 700);

    });


    /* Nav Toggle */
    $("#navToggle").on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });
    
});