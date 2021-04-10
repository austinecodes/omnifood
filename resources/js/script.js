$(document).ready(function () {

    //  For the sticky navigation
    $('.js-section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        // Bago ma hit si section - js-section-features, lalabas na siya
        offset: '60px;'
    });

    // Jump pages to plans and features
    $('.js-scroll-to-plan').click(function () {
        $('html, body').animate({ scrollTop: $('.js-section-plans').offset().top }, 1000);
    });

    $('.js-scroll-to-start').click(function () {
        $('html, body').animate({ scrollTop: $('.js-section-features').offset().top }, 1000);
    });

    /* Jump pages to sections on nav */
    // Add Anchor tags eg. #features to id="feature"
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    /* Animations */
    $('.js-wp-1').waypoint(function (direction) {
        $('.js-wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        // Bago ma hit si section - js-section-features, lalabas na siya
        offset: '60%;'
    });

    $('.js-wp-2').waypoint(function (direction) {
        $('.js-wp-2').addClass('animate__animated animate__fadeInUp');
    }, {
        offset: '60%;'
    });

    $('.js-wp-3').waypoint(function (direction) {
        $('.js-wp-3').addClass('animate__animated animate__bounceIn');
    }, {
        offset: '50%;'
    });

    $('.js-wp-4').waypoint(function (direction) {
        $('.js-wp-4').addClass('animate__animated animate__pulse');
    }, {
        offset: '50%;'
    });

    /* Mobile Nav*/
    $('.js-nav-icon').click(function () {
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon ion-icon')

        nav.slideToggle(200);

        if (icon.attr('name') == 'menu-outline') {
            $('ion-icon').attr("name", "close-outline");
        } else {
            $('ion-icon').attr("name", "menu-outline");
        }
    });

    //Fix regarding sa nawawala yung Main Nav kapag galing sa mobile nav
    $(window).resize(function () {

        var nav = $('.js-main-nav');

        var icon = $('.js-nav-icon ion-icon')

        if ($(window).width() > 767) {

            nav.css("display", "block");

            $('ion-icon').attr("name", "close-outline");

        } else {

            nav.css("display", "none");

            $('ion-icon').attr("name", "menu-outline");

        }

    });

});