
/*====================================================
                        SERVICES
                        $document.ready(function(){
                                    $('[data-spy="scroll"]').each(function () {
                                        var $spy = $(this).scrollspy('refresh');
                                        });
                                });

====================================================*/
$(function () {

    // animate on scroll
    new WOW().init();
});


var x = 1;

function myFunction() {
  var element = document.getElementById("myDiv");
  var but = document.getElementById("bt");
  if(x == 1){
    element.classList.toggle("hidden");
    but.innerHTML = "Show Less";
    x = 2;
  }else{
    element.classList.toggle("hidden");
    but.innerHTML = "Show More";
    $(document).scrollTop(2100);
    x = 1;
  }




}

// Show/Hide transparent black navigation
$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            // hide nav
            $("nav").removeClass("top-n");
            $("#back-to-top").fadeOut();

        } else {
            // show nav
            $("nav").addClass("top-n");
            $("#back-to-top").fadeIn();
        }
    });
});

// Smooth scrolling
$(document).ready(function() {

  var scrollLink = $('.js-scroll-trigger');

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });

  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {

      var sectionOffset = $(this.hash).offset().top - 20;

      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })

  })

  var typed = new Typed(".typed", {
		strings: ["Software Engineer.", "Web Developer.", "Student."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

})

// Close mobile menu on click
$(function(){

    $(".navbar-collapse ul li a").on("click touch", function(){

        $(".navbar-toggler").click();
    });
});

$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

});
