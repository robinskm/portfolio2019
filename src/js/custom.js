$(document).ready(function(){
  // variables for viewCheck
  var scrollAnimation = $('.view-element');
  var $window = $(window);

    $.scrollify({
        section : "section",
        scrollSpeed: 1000,
        updateHash: false,
        scrollbars:false
    });
    
    $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
          // Store hash
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){});
        } // End if
      });

      // checks for elements in view
    function viewCheck() {
      var winHeight = $window.height();
      var winTopPos = $window.scrollTop();
      var winBotPos = (winTopPos + winHeight);

      $.each(scrollAnimation, function() {
          var $element = $(this);
          var elHeight = $element.outerHeight();
          var elTopPos = $element.offset().top;
          var elBotPos = (elTopPos + elHeight);

          if (!navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
              //check to see if this current container is within viewport
              if ((elBotPos >= winTopPos) && (elTopPos <= winBotPos)) {
                  $element.addClass('in-view');
                  $element.addClass('fade-in');
              } else {
                  $element.removeClass('in-view');
                  $element.removeClass('fade-in');
              }
          } else {
              $element.addClass('in-view');
          }
      });
  }

  $window.on('scroll', viewCheck);
  $window.trigger('scroll');

  $('#Home .container').delay(250).addClass('fade-in');
});