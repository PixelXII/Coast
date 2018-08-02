const namee = document.getElementById('name')
var name, description;
var deeppurple = '#673AB7', indigo = '#3F51B5', teal = '#009688', bluegrey = '#607D8B';
var na;
localStorage.desc = "No description provided"
if(document.title.toString().includes('undefined')) {
	localStorage.clear()
	location.reload()
}

setInterval(function() {
	if(document.getElementById('home').style.display === 'block' && name != undefined) {
		document.title = localStorage.name+'\'s profile'
	}
}, 100)
if(namee.innerText = "$_dev") {
	namee.innerText = 'kia'
}

function setProfile(img) {
	document.getElementById('profileimg').src = 'images/'+img+'.png'
	localStorage.profile = img
}

function changeImage() {
	const pig = document.getElementById('pimg')
	if(pig.style.display === 'none') {
		pig.style.display = 'block'
	} else {
		pig.style.display = 'none'
	}
	if(document.getElementById('password-setup').style.display === 'block') {
		document.getElementById('password-setup').style.display = 'none'
	}
	if(document.getElementById('colors').style.display === 'block') {
		document.getElementById('colors').style.display = 'none'
	}
}

function reset() {
	localStorage.clear()
	location.reload()
}

function colors() {
	var col = document.getElementById('colors')
	if(col.style.display === 'none') {
		col.style.display = 'block'
	} else {
		col.style.display = 'none'
	}
	if(document.getElementById('pimg').style.display === 'block') {
		document.getElementById('pimg').style.display = 'none'
	}
	if(document.getElementById('password-setup').style.display === 'block') {
		document.getElementById('password-setup').style.display = 'none'
	}
}

function resetPass() {
	if(confirm('Are you sure you want to remove your password?') === true) { 
		localStorage.removeItem('pass')
		location.reload()
	} else {
		document.getElementById('password-setup').style.display = 'none'
	}
}

function displaySettings() {
	var sett = document.getElementById('settings')
	if(sett.style.display === 'none') {
		sett.style.display = 'block'
	} else {
		sett.style.display = 'none'
	}
}

function processName() {
	name = document.getElementById('name').value
	if(name.length < 2) {
		document.getElementById('error').style.color = 'red'
		document.getElementById('error').innerHTML = "that name is too short"
		return;
	} else {
		if(name === '$_dev') {
			document.getElementById('namedisplay').innerText = "kia"
			dev()
		}
		document.getElementById('first-screen').style.display = 'none'
		document.getElementById('home').style.display = 'block'
		localStorage.name = name
		startHome()
	}
}

function startHome() {
	document.getElementById('namedisplay').innerHTML = name
}

var des;
function configDesc() {
	const desc = document.getElementById('desc')
	desc.style.cursor = "default"
	desc.style.display = 'none'
	if(desc.innerHTML != 'No description provided') {
		document.getElementById('confd').style.display = 'block'
		document.getElementById('descnote').innerHTML = 'Edit description:'
		document.getElementById('descIn').placeholder = localStorage.desc
	} else {
		document.getElementById('confd').style.display = 'block'
	}
}

function passwordSetup() {
	var pdiv = document.getElementById('password-setup')
	if(pdiv.style.display === 'none') {
		document.getElementById('reset').style.display = 'none'
		pdiv.style.display = 'block'
	} else {
		document.getElementById('reset').style.display = 'block'
		pdiv.style.display = 'none'
	}
	if(localStorage.pass != null) {
		document.getElementById('setup').innerText = 'Change account password:'
		document.getElementById('rem').style.display = 'block'
	}
	if(document.getElementById('pimg').style.display === 'block') {
		document.getElementById('pimg').style.display = 'none'
	}
	if(document.getElementById('colors').style.display === 'block') {
		document.getElementById('colors').style.display = 'none'
	}
}

function setPassword() {
	var el = document.getElementById('password')
	var password = btoa(el.value)
	el.value = null
	el = null
	localStorage.pass = password
	location.reload()
}

function submitdesc() {
	document.getElementById('desc').style.display = 'block'
	document.getElementById('desc').style.cursor = "pointer"
	description = document.getElementById('descIn').value
	document.getElementById('desc').innerText = description
	localStorage.desc = description
	return false;
}

function enterPass() {
	const pa = document.getElementById('pa')
	const interval = setInterval(function() {
		document.getElementById('home').style.display = 'none'
		document.getElementById('pass-screen').style.display = 'block'
		document.getElementById('nam').innerHTML = "<img id='prev'> "+localStorage.name
		document.getElementById('prev').src = 'images/'+localStorage.profile+'.png'
	}, 1)
	pa.addEventListener('keypress', function(e) {
		if(e.keyCode === 13) {
			document.getElementById('auth').innerText = 'authenticating...'
			setTimeout(function() {
				if(btoa(pa.value) === localStorage.pass) {
					clearInterval(interval)
					document.getElementById('pass-screen').style.display = 'none'
					document.getElementById('home').style.display = 'block'
					document.getElementById('namedisplay').innerText = localStorage.name
					document.body.style.backgroundColor = localStorage.bg
					document.getElementById('desc').innerText = localStorage.desc
					document.getElementById('profileimg').src = 'images/'+localStorage.profile+'.png'
					return true;
				} else {
					document.getElementById('perror').style.color = 'red'
					document.getElementById('auth').innerText = ""
					document.getElementById('perror').innerHTML = 'i n c o r r e c t &nbsp &nbsp &nbsp p a s s w o r d'
					document.getElementById('pa').value = ""
					return false;
				}
			}, 750)
		}
	});
}

function store() {
	if(localStorage.length != 0) {
		if(localStorage.pass != undefined) {
			document.getElementById('home').style.display = 'none'
			document.getElementById('first-screen').style.display = 'none'
			document.getElementById('pass-screen').style.display = 'block'
			document.getElementById('passet').innerText = 'Change password'
			enterPass()
		} else {
			name = localStorage.name
			document.getElementById('namedisplay').innerHTML = name
			document.getElementById('first-screen').style.display = 'none'
			if(localStorage.desc != undefined) {
				description = localStorage.desc
				document.getElementById('desc').innerHTML = localStorage.desc
			}
			if(localStorage.bg != null || localStorage.bg != undefined) {
				document.body.style.backgroundColor = localStorage.bg
			}
			if(localStorage.profile != undefined) {
				document.getElementById('profileimg').src = 'images/'+localStorage.profile+'.png'
			}
			document.getElementById('home').style.display = 'block'
		}
	}
}

store()
