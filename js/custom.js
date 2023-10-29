
   //-------mixitup area------//
	
		
	var mixer = mixitup('.gallery');
	
	var container = document.querySelector('.gallery');
	var mixer = mixitup(container,{
	      selectors:{control:'[data-mixitup-control]'}
	})
	
	//----------owl area------//
	
	$(document).ready(function(){

	  $(".owl-carousel").owlCarousel({
		   autoplay:true,
		   autoplayTimeout:2000,
		   loop:true,
		   
		   responsive:{
		    
			0:{
			     items:1
			 },
			 600:{
			     items:2
			 }, 
			 1000:{
			     items:4
			 },
		   }
		   
	  });
	});
	
	//---------nav time------//
	 
	$('.navbar-nav a[href^="#"]').click(function(e){
	    e.preventDefault();
		
		var target = this.hash;
		$('html, body').animate({
		   scrollTop: $(target).offset().top -50
		}, 1500);
	});


	//---menu fixed---//

	$(window).scroll(function(){
	  var ourWindow = $(this).scrollTop();
	  
	  
	  if(ourWindow>100){
		  $('body').addClass('fixed');
	  }
	  else{
		$('body').removeClass('fixed');
	  }
	});

	//---menu active---//

	 $('.navbar-nav li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	 });


 
	   //----------top------------//
  
   

	$('.top').click(function(){
	   $("html, body").animate({
		  scrollTop:0
		},2000);
		
	});