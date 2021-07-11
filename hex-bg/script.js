const button = document.querySelector('button')
const body = document.querySelector('body')
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const value = document.querySelector('#hex-value')

body.style.backgroundColor = '#FFFFFF'
button.addEventListener('click', changeBackground)

function changeBackground() {
	let hex = '#'
	for (var i = 0; i < 6; i++) {
		const num = Math.floor(Math.random()*hexValues.length)
		hex += hexValues[num]
	}
	value.textContent = hex
	body.style.backgroundColor = hex
}