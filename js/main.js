$(document).ready(function () {
    // One page scrolling Animation by section by section 
    new WOW().init();
    // Mobile menu style 
    var removeClass = true;
    $(".menu_button").click(function () {
        $(".menu_show, .toggletag").toggleClass('open');
        removeClass = false;
    });
    $(".menu_show, .toggletag").click(function () {
        removeClass = false;
    });
    $("body").click(function () {
        if (removeClass) {
            $(".menu_show, .toggletag").removeClass('open');
        }
        removeClass = true;
    });
    // Instantiate MixItUp:
    $('#protfolio').mixItUp({
        //callbacks: {
        //   onMixLoad: function (state) {
        // alert('Welcome My MixItUp Slider, Now ready  MixItUp Slider for You :)');
        //   }
        //  }
        //  ,
        animation: {
            effects: 'fade rotateY(-10deg)'
        }
        , controls: {
            activeClass: 'active'
        }
        , load: {
            filter: '.default'
        }
    });
    // external js: masonry.pkgd.js
    $('.blog_posts').masonry({
        itemSelector: '.post'
        , percentPosition: true
    });
    // Pricing Table 
    // hover class add and remove 
    $('.pricing_table').hover(function () {
        $(this).addClass('active')
    }, function () {
        $(this).removeClass('active')
    });
    // onclick class add and remove 
    $(document).ready(function () {
        $('.pricing_table').click(function () {
            $(this).toggleClass('clicked').siblings().removeClass('clicked');
        });
    });
    //  jQuery Animated Number Counter From Zero To Value -
    //  Javascript Animation by SHIVA SURYA  css, fancy, interest, js  2 comments
    jQuery(document).ready(function ($) {
        $('.counter').counterUp({
            delay: 5
            , time: 5000
        });
    });
    // animation when click href by id 
    $(function () {
        // Generic selector to be used anywhere
        $(".herf_animation").click(function (e) {
            // Get the href dynamically
            var destination = $(this).attr('href');
            // Prevent href=“#” link from changing the URL hash (optional)
            e.preventDefault();
            // Animate scroll to destination
            $('html, body').animate({
                scrollTop: $(destination).offset().top
            }, 1500);
        });
    });
    // finish main.js 
});