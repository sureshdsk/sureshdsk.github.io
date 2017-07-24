jQuery( document ).ready(function($) {
  var typed = new Typed('#my-intro', {
    strings: [
      "I build websites.",
      "I build web applications.",
      "Wannabe pythonista!",
      "Wannabe machine learning engineer!",
      "Wannabe data scientist!"
    ],
    typeSpeed: 50,
    // cursorChar: '|',
    loop: true,
    backDelay: 3000,
    startDelay:500,
  });

  $(".scrollto").click(function() {
      var target = $("#" + $(this).data('scrollto'));
      console.log(target);
      $('html, body').animate({
          scrollTop: $(target).offset().top
      }, 1000);
      return false;
  });

});
