$(document).ready(function(){

	$('.ham-icon').click(function(){
		/*$(this).css('display', 'none');*/
		$('.my-sidenav').css('max-width', '380px');

	});
	$('.cross-btn').click(function(){
		$('.my-sidenav').css('max-width', '0px');

		/*$('.ham-nav').css('display', 'block');*/
	});

	$(".menu-icon").on("click", function() {
		$("nav").toggleClass("showing");
	});

	

	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		if (scroll >=50) {
			$("#header").addClass("sticky");
		} else {
			$("#header").removeClass("sticky");
		}
	});
});

$(document).ready(function(){
    $(".my-sidenav").accordion();
  });

      // Scrolling Effect

      $(window).on("scroll", function() {
      	if($(window).scrollTop()) {
      		$('nav').addClass('black');
      	}

      	else {
      		$('nav').removeClass('black');
      	}


      });
      $('.committed-slider.owl-carousel').owlCarousel({
      	autoplay: false,
      	loop: true,
      	nav: true,
      	dots:false,
      	touchDrag: true,
      	mouseDrag: false,
      	items:3,
      	responsive: {
      		0: {
      			items: 1
      		},
      		600: {
      			items: 1
      		},
      		1000: {
      			items: 3
      		}
      	}
      });


