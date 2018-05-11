var val = 0;
function addone() {
  setInterval(function() { document.getElementById('out').innerText = val }, 20);
  val++;
  if(val == 100) {
    val = "You reached 100! Good job!";
  }
}
