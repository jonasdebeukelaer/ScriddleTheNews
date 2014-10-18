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

    var comments_open = false;
    $( 'p' ).click(function(){
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

