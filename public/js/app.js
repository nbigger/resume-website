$(document).ready(function() {
  var $win = $(window),
  $win_height = $(window).height(),
  
        windowPercentage = $(window).height() * 1.2;
        $win.on("scroll", scrollReveal);
        function scrollReveal() {
          var scrolled = $win.scrollTop();

          $(".trigger").each(function() {
            var $this = $(this),
            offsetTop = $this.offset().top;
            if (
              scrolled + windowPercentage > offsetTop ||
              $win_height > offsetTop
              ) {
              $(this).each(function(key, bar) {
                var percentage = $(this).data("percentage");
                var years = $(this).data("years");
                $(this).css("height", percentage + "%"); 
                $(this).text(years);

              });

          } else {
            $(this).each(function(key, bar) {
              $(this).css("height", 0);
            });
          }    
        });
        }
      });
