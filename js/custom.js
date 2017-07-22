// show and hide nav bar

$(document).ready(function() {
  'use strict';
  $(window).scroll(function() {
    'use strict';
    if ($(window).scrollTop() < 80) {
      $('.navbar').css({
        'margin-top': '-100px',
        'opacity': '0'
      });

      $('.navbar-default').css({
        'background-color': 'rgba(59, 59, 59, 0)'
      })

    } else {
      $('.navbar').css({
        'margin-top': '0px',
        'opacity': '1'
      });

      $('.navbar-default').css({
        'background-color': 'rgba(59, 59, 59, 0.7)',
        'border-color': '#444'
      });

      $('.navbar-brand > img').css({
        'height': '35px',
        'padding-top': '0px'
      });

      $('.navbar-nav > li > a ').css({
        'padding-top': '15px'
      });
    }
  });
});

// active menu on click
$(document).ready(function(){
  'use strict';
  $('.navbar-nav > li > a').click(function(){
    'use strict';
    $('.navbar-nav > li > a').parent().removeClass("active");

    $(this).parent().addClass("active");
  });
});

// highlight navbar item on scroll
$(document).ready(function(){
    'use strict';
    $(window).scroll(function(){
      'use strict';
      $('section').each(function(){
        var id = $(this).attr('id');
        var height = $(this).outerHeight();
        var gettop = $(this).offset().top - 70;

        if($(window).scrollTop() > gettop && $(window).scrollTop() < gettop + height){
          $(".navbar-nav > li > a[href='#" + id + "']").parent().addClass('active');
        }else{
          $(".navbar-nav > li > a[href='#" + id + "']").parent().removeClass('active');

        }
      })
    })
});

//Add smooth scrolling
$(document).ready(function() {
  'use strict';
  // Select all links with hashes
  $('.nav-item, #scroll-to-top')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
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
          }, 1000, function() {
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
})

// add auto padding to header
$(document).ready(function(){
  'use strict';
  setInterval(function(){
    'use strict';
    var windowHeight = $(window).height();
    var headerHeight = $(".header-container").height();
    var aboutHeight = $("#about").height();
    var gitHeight = $("#git").height();
    var contactHeight = $("#contact").height();
    var padTopHeader = windowHeight - headerHeight;
    var padTopAbout = windowHeight - aboutHeight;
    var padTopGit = windowHeight - gitHeight;
    var padTopContact = windowHeight - contactHeight;

    $(".header-container").css({
      'padding-top': Math.round(padTopHeader/2) + 'px',
      'padding-bottom': Math.round(padTopHeader/2) + 'px'
    });

    $("#about").css({
      'padding-top': Math.round(padTopAbout/2) + 'px',
      'padding-bottom': Math.round(padTopAbout/2) + 'px'
    });

    $("#git").css({
      'padding-top': Math.round(padTopGit/2) + 'px',
      'padding-bottom': Math.round(padTopGit/2) + 'px'
    });

    $("#contact").css({
      'padding-top': Math.round(padTopContact/2) + 'px',
      'padding-bottom': Math.round(padTopContact/2) + 'px'
    });
  }, 10);
});

// Add bxslider
$(document).ready(function(){
  $('.bxslider').bxSlider({
    slideWidth: 292.5,
    auto: true,
    minSlides: 1,
    maxSlides: 3,
    slideMargin: 50
  })
});

// Add counters
$(document).ready(function(){
  $('.counter-num').counterUp({
    delay: 15,
    time: 1500
  });
});

// Add animation / inialize wow
$(document).ready(function(){
  'use strict';
  new WOW().init();
});
