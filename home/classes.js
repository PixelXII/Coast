var posts = []
var title, content;
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
		document.getElementById('postD').style.display = 'none'
		document.getElementById('content').style.display = 'block'
  	}
});

document.onunload = function() {
	localStorage.pc = []
	for(var i = 0; i <= posts.length; i++) {
		localStorage.pc.push(document.querySelectorAll('.postcard')[i].outerHTML)
	}
}
		
		
