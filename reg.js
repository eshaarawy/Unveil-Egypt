const form = document.getElementById('registration-form');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	const firstName = document.getElementById('first-name').value;
	const lastName = document.getElementById('last-name').value;
	const profilePhoto = document.getElementById('profile-photo').value;
	const gender = document.getElementById('gender').value;
	const phoneNumber = document.getElementById('phone-number').value;
	const salary = document.getElementById('salary').value;
	const birthday = document.getElementById('birthday').value;
	const prefix = document.getElementById('prefix').value;
	const experience = document.getElementById('experience').value;
	const location = document.getElementById('location').value;
	const languages = document.getElementById('languages').value;
	const options = document.querySelector('input[name="options"]:checked').value;

	// Do something with the form data, such as send it to a server

	alert('Thank you for registering!');
});