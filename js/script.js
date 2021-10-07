$(document).ready(function(){

	"use strict";
	
	/* =================================
	LOADER 
	=================================== */
	$(".loader").delay(400).fadeOut();
    $(".animationload").delay(400).fadeOut("fast");

    var bgi = $("[data-background]");
    bgi.length > 0 && bgi.each(function() {
    	var e = $(this),
    	t = e.attr('data-background');
    	e.css({'background-image': 'url(' + t + ')'});
    });

    var progressBar = $('.progress-bar');
    progressBar.length > 0 && progressBar.each(function() {
    	var e = $(this),
    	t = e.attr('aria-valuenow');
    	e.css({'width': t + '%'});
    });
	
	/* =================================
	NAVBAR 
	=================================== */
	var top = jQuery(document).scrollTop();
	var batas = 200;
	var navbar = jQuery('.navbar-main');
	var navbarnav = jQuery('.navbar-nav');
	var header = jQuery('.header');
	
	
	if ( top > batas ) {
		navbar.addClass('stiky');
		// navbarnav.addClass('ml-auto');
	}
	jQuery(window).scroll(function () {
		top = jQuery(document).scrollTop();

		
		if ( top > batas ) {
			navbar.addClass('stiky');
		}else {
			navbar.removeClass('stiky'); 
			if(header.hasClass('header-2')){
				navbarnav.removeClass('ml-auto');
			}
			if(header.hasClass('header-5')){
				navbarnav.removeClass('ml-auto');
			}
		}

	});
	
	/* =================================
	BANNER ROTATOR IMAGE 
	=================================== */
	var slides = $("#oc-fullslider"),
    b = slides.find('.owl-slide');
    b.each(function(){
        var e = $(this),
        ocImg = e.find('img').attr('src');
        e.css({'background-image': 'url(' + ocImg + ')'});

        console.log('tes ' + ocImg); 
    });
    

	/* =================================
	BACK TO TOP 
	=================================== */
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
	
	
	
});
// ---------------------------------------------------
// addPet profile image 
$(document).ready(function() {
	
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
   
    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
});




 



    


  
  