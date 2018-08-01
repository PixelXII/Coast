var profileImg = document.getElementById('profileimg')
var nameOut = document.getElementById('namedisplay')

nameOut.innerText = localStorage.name
profileImg.src = '../images/' + localStorage.profile + '.png'

document.getElementById('desc').innerText = localStorage.desc

document.getElementById('desc').addEventListener('click', function() {
	configDesc()
	document.getElementById('link').style.display = 'none'
});

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

document.getElementById('descIn').addEventListener('keypress', function(e) {
	const cf = document.getElementById('confd')
	if(e.keyCode === 13) {
		submitdesc()
		document.getElementById('link').style.display = 'block'
		cf.style.display = "none"
		cf.value = ""
	} 
});

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

function displaySettings() {
	var sett = document.getElementById('settings')
	if(sett.style.display === 'none') {
		sett.style.display = 'block'
	} else {
		sett.style.display = 'none'
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
