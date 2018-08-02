var profileImg = document.getElementById('profileimg')
var nameOut = document.getElementById('namedisplay')
document.style.backgroundColor = localStorage.bg

document.title = 'Homepage for '+localStorage.name;

nameOut.innerText = localStorage.name
profileImg.src = '../images/' + localStorage.profile + '.png'

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
