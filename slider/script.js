(function() {
	const leftButton = document.querySelector('#left-btn')
	const rightButton = document.querySelector('#right-btn')
	const image = document.getElementById('image-box')
	image.src = 'img/image (1).jpg'

	let index = 1

	leftButton.addEventListener('click', swipeLeft)
	rightButton.addEventListener('click', swipeRight)

	function swipeLeft() {
		if (index > 1) {
			index--	
		}
		else {
			index = 6
		}
		image.src = `img/image (${index}).jpg`
	};

	function swipeRight() {
		if (index < 6) {
			index++
		}
		else {
			index = 1
		}
		image.src = `img/image (${index}).jpg`
	};
})();