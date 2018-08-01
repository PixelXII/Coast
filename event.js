namee.addEventListener('keypress', function(e) {
	if(e.keyCode === 13) {
		processName()
	}
});

document.getElementById('descIn').addEventListener('keypress', function(e) {
	const cf = document.getElementById('confd')
	if(e.keyCode === 13) {
		submitdesc()
		document.getElementById('link').style.display = 'block'
		cf.style.display = "none"
		cf.value = ""
	} 
});

/* document.getElementById('descIn').addEventListener('keypress', function(e) {
	const cf = document.getElementById('confd')
	if(e.keyCode === 27) {
		cf.style.display = 'none'
		cf.value = ''
	}
}); */

document.getElementById('desc').addEventListener('click', function() {
	configDesc()
	document.getElementById('link').style.display = 'none'
});

document.getElementById('password').addEventListener('keypress', function(e) {
	if(e.keyCode === 13) {
		setPassword()
	}
});
