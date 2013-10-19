$(document).ready(function(){
	var firebase = new Firebase('https://banzai.firebaseio.com/email');
	$('#notify-me-button').click(function() {
		$('#notify-box').slideDown();
		var email = $('#notify-email-id').val();
		var rollno = $('#enroll-no').val();
		if (email.length) {
			firebase.push({email: email,enrollmentid: rollno});
			$('#notify-box').html('<p>Thank you! You will hear from us soon.</p>');
		}


	});
});