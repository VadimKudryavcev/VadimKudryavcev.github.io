(function() {
	
})();

function toggle(id, imgId) {
	let password = document.getElementById(id)
	let eye = document.getElementById(imgId)
	if (password.getAttribute('type') == 'password') {
		password.setAttribute('type','text')
		eye.src = 'eye-icon-2.png'
	} else {
		password.setAttribute('type', 'password')
		eye.src = 'eye-icon-1.png'
	}
}