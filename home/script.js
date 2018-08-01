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
