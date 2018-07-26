var profile = document.getElementById('profile')
var profileImg = document.getElementById('profim')
var nameOut = document.getElementById('name')

nameOut.innerText = localStorage.name
profileImg.src = localStorage.profile + '.png'
