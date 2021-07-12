(function() {
	let window_ = document.querySelector('.window')
	let clear = document.querySelector('.clear-btn')
	let equal = document.querySelector('.equal-btn')
	let buttons = document.querySelectorAll('.btn')
	let history = document.querySelector('.history')
	history.innerHTML = ''
	
	buttons.forEach(function(button) {
		button.addEventListener('click', function(e) {
			let value = e.srcElement.firstChild.data
			window_.value += value
		})
	})

	equal.addEventListener('click', solve)
	window_.addEventListener('keydown', function(e) {
		if(e.keyCode == 13) {
     	   e.preventDefault();
     	   solve()
    	}
	})

	function solve() {
		
		if (window_.value === '' || window_.value === 'NO VALUES') {
			window_.value = 'NO VALUES'
		} else {
			history.innerHTML = window_.value
			let answer = eval(window_.value)
			window_.value = answer
		}
	}

	clear.addEventListener('click', function() {
		window_.value = ''
		history.innerHTML = ''
	})

})()