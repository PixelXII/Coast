function Post(title, content) {
  this.title = title
  this.content = content
  var post = document.createElement('div')
  document.getElementById('content').appendChild(post)
  post.innerHTML = "<h2 class='title'>"+title+"</h2> <br> <p id='content'>"+content+"</p>"
}

Post.prototype.edit = function() {
  // PATIENCE, IM WORKING ON IT
  
  // actually im not
  
  // but i leave it here to remind me that i *want* to add it
}
