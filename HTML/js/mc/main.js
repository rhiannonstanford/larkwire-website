// Mailchimp Newsletter
$(document).ready(function() {
	$('#invite').ketchup().submit(function() {
	if ($(this).ketchup('isValid')) {
	var action = $(this).attr('action');
	$.ajax({
	url: action,
	type: 'POST',
	data: {
		email: $('#eaddress').val()
	},
	success: function(data){
		$('#result').html(data);
	},
	error: function() {
		$('#result').html('Sorry, an error occurred.');
	}
	});
	}
	return false;
	});
});
