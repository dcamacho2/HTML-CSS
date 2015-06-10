$(document).ready(function() {
	var originalChars = $('.counter').text();
	function getRandom() {
		return Math.floor(Math.random()*10)+1;
	}

	function randomUser(rand) {
		var user;

		console.log(rand);
		if(rand <= 2){
			user = {
				profilePic: 'user.png',
				name: 'blah',
				username: 'blah',
			}
		} else if(rand <= 4){
			user = {
				profilePic: 'user1.png',
				name: 'blah',
				username: 'blah',
			}
		} else if(rand <= 6){
			user = {
				profilePic: 'user2.png',
				name: 'blah',
				username: 'blah',
			}
		} else if(rand <= 8){
			user = {
				profilePic: 'user3.png',
				name: 'blah',
				username: 'blah',
			}
		} else if(rand > 8) {
			user = {
				profilePic: 'user4.png',
				name: 'blah',
				username: 'blah',
			}
		}

		return user;
	}

	function posting() {
		var posting = $('.status-box').val();
		$('<div class="post">').append('<img src="img/' + randomUser(getRandom()).profilePic +'">').append('<p>' + posting).prependTo('.posts');
		$('.status-box').val('');
		$('.counter').text(originalChars);
		$('.btnPost').addClass('disabled');
	}

	$('.btnPost').addClass('disabled');

	$('.btnPost').click(posting);

	$('.status-box').keyup(function (evt) {
		var postLength = $(this).val().length;
		var charactersLeft = originalChars - postLength;

		if(charactersLeft >= 0 && charactersLeft != originalChars){
			$('.btnPost').removeClass('disabled');
			$('.counter').text(charactersLeft);
		} else {
			$('.btnPost').addClass('disabled');
		}
	});

	$('.status-box').keydown(function(evt) {
		if(evt.keyCode === 13 && !evt.shiftKey) {
			evt.preventDefault();
		}
	});
})