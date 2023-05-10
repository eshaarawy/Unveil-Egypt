const stars = document.querySelectorAll('.star');

function setRating(rating, productId) {
	const productStars = document.querySelectorAll('.' + productId + ', #' + productId + ' .star');
	productStars.forEach(star => {
		if (star.getAttribute('data-rating') <= rating) {
			star.classList.add('active');
		} else {
			star.classList.remove('active');
		}
	});
}

stars.forEach(star => {
	star.addEventListener('click', () => {
		const rating = star.getAttribute('data-rating');
		const productId = star.closest('.product').id;
		setRating(rating, productId);
	});
	star.addEventListener('mouseover', () => {
		const rating = star.getAttribute('data-rating');
		const productId = star.closest('.product').id;
		setRating(rating, productId);
	});
	star.addEventListener('mouseout', () => {
		setRating(0);
	});
});