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

document.getElementById('content').addEventListener('keypress', function(e) {
	if(e.keyCode === 13) {
		title = document.getElementById('title').value
    content = document.getElementById('content').value
    var np = new Post(title, content)
    posts.push(np)
  }
});
