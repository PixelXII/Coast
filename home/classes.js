var posts = []
var title, content, arr;
var pi = localStorage.pc
if(pi === undefined) {
	pi = "<div class='postcard'><h2 class='title'>My first post!</h2><p class='content'>Wow...</p></div>"
}
function Post(title, content) {
  if(title === undefined) {
    throw new Error('TITLE is undefined')
  } else if(content === undefined) {
    throw new Error('CONTENT is undefined')
  } else {
    this.title = title
    this.content = content
    var post = document.createElement('div')
    post.className = 'postcard'
    document.getElementById('content').appendChild(post)
    post.innerHTML = "<h2 class='title'>"+this.title+"</h2> <br> <p class='content'>"+this.content+"</p>"
  }
}

Post.prototype.edit = function() {
  // PATIENCE, IM WORKING ON IT
  
  // actually im not
  
  // but i leave it here to remind me that i *want* to add it
}

document.getElementById('pcon').addEventListener('keypress', function(e) {
	if(e.keyCode === 13) {
		title = document.getElementById('title').value
    		content = document.getElementById('pcon').value
		document.getElementById('pcon').value = ""
		document.getElementById('title').value = ""
   		var np = new Post(title, content)
    		posts.push(np)
		var index = document.querySelectorAll('.postcard')[posts.indexOf(np)]
		if(pi === undefined) {
			pi = index.outerHTML + '/split'
		} else {
			pi = pi + index.outerHTML + '/split'
			pi = pi.slice(pi.indexOf('<div'))
		}
		console.log(pi)
		document.getElementById('postD').style.display = 'none'
		document.getElementById('content').style.display = 'block'
  	}
});

function load() {
	if(pi.includes('undefined') === false) {
		arr = pi.split('/split')
		arr.forEach(function(e) {
			if(e.includes('undefined') === false || e.includes('/') === false || e.includes('split') === false) {
				var p = document.createElement('div')
				document.getElementById('content').appendChild(p)
				p.outerHTML = e
			}
		});
	}
}

load()
