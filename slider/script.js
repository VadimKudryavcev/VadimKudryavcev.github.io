(function() {
	const leftButton = document.querySelector('#left-btn')
	const rightButton = document.querySelector('#right-btn')
	const image = document.getElementById('image-box')

	let index = 1
	setImage(index)

	leftButton.addEventListener('click', swipeLeft)
	rightButton.addEventListener('click', swipeRight)

	function swipeLeft() {
		if (index > 1) {
			index--	
		}
		else {
			index = 6
		}
		setImage(index)
	};

	function swipeRight() {
		if (index < 6) {
			index++
		}
		else {
			index = 1
		}
		setImage(index)
	};

	function setImage(index) {
		image.src = `img/image (${index}).jpg`
	}
})();