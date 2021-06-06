'use strict';

$(document).ready(function(){

	/* ------ Owl Gallery Carousel script ------ */

	$("#slider1").owlCarousel({
		loop:true,
		margin:70,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:false,
		nav:false,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			720:{
				items:2
			},
			1140:{
				items:3
			}
		}
	});

	/* ------ Owl Testimonials Carousel script ------ */

	$('#slider2').owlCarousel({
		lazyLoad:true,
		loop:true,
		margin:30,
		dots:true,
		responsive:{
			0:{
				items:1
			},
			720:{
				items:1
			},
			1140:{
				items:2
			}
		}
	});


	/* ------ Navbar Toggle Background script ------ */

  var navbar = $('.navbar-toggle');
  navbar.on('click', function(){
    $('.navbar-header').toggleClass('toggle');
  });


	/* ------ Remove Button Socus script ------ */

  navbar.on('click', function(event) {
    $(this).blur();
  });


	/* ------ Navbar Toggle Background script ------ */

  $(window).trigger('resize').trigger('scroll');


	/* ------ Init CSS Animations script ------ */

  new WOW().init();


	/* ------ Page Scrolling Feature script ------ */

  $('a.page-scroll').bind('click', function(event) {
    var navbarHeight = $('.navbar').height();
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - navbarHeight
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });


	/* ------ Collapse The Navbar On Scroll Script ------ */

  var navbarTop = $(".navbar-default");
  var newClass = "top-nav-collapse";
  var offset = navbarTop.offset();
  if (offset.top > 1) { navbarTop.addClass(newClass); }

  $(window).on('scroll', function(){
  var scrollTop = $(window).scrollTop();
      if (scrollTop > 1) {
          navbarTop.addClass(newClass);
      } else {
          navbarTop.removeClass(newClass);
      }
  });


	/* ------ Magnific Popup Script ------ */

	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300,
			opener: function(element) {
				return element.find('img');
			}
		}
	});


	/* ------ Header Navigation Script ------ */

	var didScroll;
	var lastScrollTop = 0;
	var delta = 0;
	var navbarHeight = $('header').outerHeight();

	$(window).scroll(function(event){
	  didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 150);

	function hasScrolled() {
	    var st = $(this).scrollTop();

	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;

	    if (st > lastScrollTop && st > navbarHeight && lastScrollTop > 500){
	        // Scroll Down
	        $('header').removeClass('nav-down').addClass('nav-up');
	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	            $('header').removeClass('nav-up').addClass('nav-down');
	        }
	    }

	    lastScrollTop = st;
	}


	/* ------ Google Maps script ------ */
	var myLatlng = {lat: 47.6, lng: -122.332};
//	var latlng = new google.maps.LatLng(40.4464, -74.3788);

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 14,
		scrollwheel: false,
		draggable: false,
		center: myLatlng
	});

	var image = 'images/pin.png';
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		icon: image,
		title: 'Click to zoom'
	});

	map.addListener('center_changed', function() {
		window.setTimeout(function() {
		map.panTo(marker.getPosition());
		}, 3000);
	});

	marker.addListener('click', function() {
		map.setZoom(17);
		map.setCenter(marker.getPosition());
	});


	/* ------ Form Subscription Script ------ */

	$('#subscribe_form').validate({
      onfocusout: false,
      onkeyup: false,
      rules: {
          email: {
              required: true,
              email: true
          }
      },
      errorPlacement: function(error, element) {
          error.appendTo( element.closest("form"));
      },
      messages: {
          email: {
              required: "We need your email address to contact you",
              email: "Please, enter a valid email"
          }
      },
      highlight: function(element) {
          $(element)
      },
      success: function(element) {
          element
          .text('').addClass('valid')
      }
  });
});

	/*  ----- Show More scripts --------- */

	function showMore1() {
		var dots1 = document.getElementById("dots1");
		var moreText1 = document.getElementById("more1");
		var btnText1 = document.getElementById("myBtn1");
		console.log("showmore1 fires")
		if (dots1.style.display === "none") {
			console.log("if statement1 fires")
			dots1.style.display = "inline";
			btnText1.innerHTML = "more";
			moreText1.style.display = "none";
		} else {
			dots1.style.display = "none";
			btnText1.innerHTML = "less";
			moreText1.style.display = "inline";
		}
	}

	function showMore2() {
		var dots2 = document.getElementById("dots2");
		var moreText2 = document.getElementById("more2");
		var btnText2 = document.getElementById("myBtn2");
		console.log("showmore2 fires")
		if (dots2.style.display === "none") {
			console.log("if statement2 fires")
			dots2.style.display = "inline";
			btnText2.innerHTML = "more";
			moreText2.style.display = "none";
		} else {
			dots2.style.display = "none";
			btnText2.innerHTML = "less";
			moreText2.style.display = "inline";
		}
	}

	function showMore3() {
		var dots3 = document.getElementById("dots");
		var moreText3 = document.getElementById("more");
		var btnText3 = document.getElementById("myBtn");
		console.log("showmore3 fires")
		if (dots.style.display === "none") {
			console.log("if statement3 fires")
			dots3.style.display = "inline";
			btnText3.innerHTML = "more";
			moreText3.style.display = "none";
		} else {
			dots3.style.display = "none";
			btnText3.innerHTML = "less";
			moreText3.style.display = "inline";
		}
	}
