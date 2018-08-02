var posts = []
function Post(title, content) {
  this.title = title
  this.content = content
  var post = document.createElement('div')
  post.className = 'postcard'
  document.getElementById('content').appendChild(post)
  post.innerHTML = "<h2 class='title'>"+this.title+"</h2> <br> <p class='content'>"+this.content+"</p>"
}

Post.prototype.edit = function() {
  // PATIENCE, IM WORKING ON IT
  
  // actually im not
  
  // but i leave it here to remind me that i *want* to add it
}
