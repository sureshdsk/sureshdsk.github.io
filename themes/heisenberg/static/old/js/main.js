$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	setTimeout(function() {
 var typed = new Typed('#dsk-first', {
    strings: [
    "S.",
      "Suresh",
      "Suresh"
    ],
    typeSpeed: 70,
    cursorChar: '',
    // loop: true,
    startDelay:0,
    backSpeed:0,
    // backDelay: 2500,
  onComplete: function (){
  	var typed2 = new Typed('#dsk-last', {
    strings: [
      "K.",
      "Kumar",
      "K"
    ],
    typeSpeed: 70,
    cursorChar: '',
    // loop: true,
    // startDelay:2500,
    backDelay: 1000,
    backSpeed:0,
  onComplete: function (){
  	document.getElementById("dsk-first").innerHTML = 'S.';
  	document.getElementById("dsk-last").innerHTML = 'K.';
  }
  });
  }
  });


	}, 2000);


	
	// var typed2 = new Typed('#dsk-last', {
 //    strings: [
 //      "K",
 //      "Kumar^100",
 //      "K"
 //    ],
 //    typeSpeed: 100,
 //    cursorChar: '',
 //    // loop: true,
 //    startDelay:2500,
 //    backDelay: 1000,
 //    backSpeed:0,
 //    fadeOut: false,
 //  fadeOutClass: 'typed-fade-out',
 //  fadeOutDelay: 500,
 //  });

});




