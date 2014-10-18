$(document).ready(function(){
	
	console.log('Hello!')

	$('.pic').click(function(){
		$('.pic').fadeOut('slow');
	});

	$.ajax({
		url:'http://graph.facebook.com/jeshuamaxey',
		method:'GET'
	}).success(function(data){
		console.log(data)
	})

	$('.getInfo').click(function(){
		var user = $('.fader').val()
		console.log(user)
		var username = 'http://graph.facebook.com/' + user
		$.ajax({
			url:username,
			method:'GET'
		}).success(function(data){
			console.log(data)

		})		

	});
  
      

})

