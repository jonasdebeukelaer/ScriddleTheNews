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
    		$(clicked_p).css('background-color: #7BA8E3')
    		$( ".container.article" ).animate({
    			left: "-=80%",
    			opacity: 0.5
  			}, 500, function() {
 
  			});
	  		comments_open = true;
  		} else {
  			$(clicked_p).css('background-color: #ffffff')
  			$( ".container.article" ).animate({
    			opacity: 1,
    			left: "+=80%"
  			}, 500, function() {

	  		});
	  		comments_open = false;
  		}


    }); 

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

