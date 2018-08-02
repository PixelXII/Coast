var posts = []
var title, content;
var pi = localStorage.pc
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
		
		console.log(index)
		
		document.getElementById('postD').style.display = 'none'
		document.getElementById('content').style.display = 'block'
  	}
});

document.onload = function() {
	posts = localStorage.pc.split('\split')
	posts.forEach(function(e) {
		let p = document.createElement('div')
		document.getElementById('content').appendChild(p)
		p.outerHTML = e
	})
}
		
