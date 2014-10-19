$(document).ready(function(){
	
	console.log('Hello!')
  
    $( 'p' ).on( "swipeleft", function(){
    	console.log('swiped left')
    	$( ".container" ).animate({
    		opacity: 0.25,
    		left: "+=50",
  		}, 5000, function() {
    	// Animation complete.
  		});

    });  


    $('.submit').click(function(){
    	var comment = $('.com_box').text();
    	var pnum = clicked_p;

    	var pass_comment = jQuery.parseJSON( '{ "pnum": pnum, "comment": comment }' );
    	$.ajax({
  			type: "POST",
  			url: url,
  			data: { "pnum": pnum, "comment": comment },
  			success: success,
  			dataType: string
    	});
    });

    var clicked_p = "";

    var comments_open = false;
    $( 'p' ).click(function(){
    	console.log('swiped left')
		var rect = this.getBoundingClientRect();
		
		clicked_p = this.className
		console.log(clicked_p)

    	if (comments_open == false) {
    		$(clicked_p).css('background-color', '#7BA8E3')
    		$( ".container.article" ).animate({
    			left: "-=80%",
  			}, 500, function() {
 
  			});
	  		comments_open = true;
  		} else {
  			$(clicked_p).css('background-color', '#ffffff')
  			$( ".container.article" ).animate({
    			left: "+=80%"
  			}, 500, function() {

	  		});
	  		comments_open = false;
  		}


    }); 

    $('.check').click(function(){
    	if($('.toggle').prop('checked')) {
    		$('toggle').prop('checked', false);
    		$('toggle').css('background-color: #428bca')
   
    		$('.p3').removeClass('bg1')
    		$('.p5').removeClass('bg3')
    		$('.p6').removeClass('bg2')
    		$('.p3').addClass('reset_bg')
    		$('.p5').addClass('reset_bg')
    		$('.p6').addClass('reset_bg')
		} else {
    		$('toggle').prop('checked', true);
    		$('toggle').css('background-color: #ffffff')
			
			$('.p3').removeClass('reset_bg')
    		$('.p5').removeClass('reset_bg')
    		$('.p6').removeClass('reset_bg')
			$('.p3').addClass('bg1')
    		$('.p5').addClass('bg3')
    		$('.p6').addClass('bg2')
    	}
    })

    $( 'p' ).on("swipeleft", function(){
    	console.log('swiped left')

    	if (comments_open == false) {
    		$( ".container.article" ).animate({
    			left: "-=80%",
    			opacity: 0.5
  			}, 500, function() {
 
  			});
	  		comments_open = true;
  		} else {
  			
  			$( ".container.article" ).animate({
    			opacity: 1,
    			left: "+=80%"
  			}, 500, function() {

	  		});
	  		comments_open = false;
  		}


    }); 

})

