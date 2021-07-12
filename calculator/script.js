(function() {
	let window_ = document.querySelector('.window')
	let clear = document.querySelector('.clear-btn')
	let equal = document.querySelector('.equal-btn')
	let buttons = document.querySelectorAll('.btn')
	
	buttons.forEach(function(button) {
		button.addEventListener('click', function(e) {
			let value = e.srcElement.firstChild.data
			window_.value += value
		})
	})

	equal.addEventListener('click', function() {
		if (window_.value === '') {
			window_.value = 'NO VALUES'
		} else {
			let answer = eval(window_.value)
			window_.value = answer
			console.log(answer)
		}
	})

	clear.addEventListener('click', function() {
		window_.value = ''
	})

})()