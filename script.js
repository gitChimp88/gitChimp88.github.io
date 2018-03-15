jQuery(document).ready(function($) {
  $(".toRoute").on("touchstart", function(event) {
      window.location.href = $(event.target).attr('href');
    });
 });
