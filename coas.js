var val;
function addone() {
  setInterval(function() { document.getElementById('out').innerText = val }, 20);
  val = 0;
  val++;
}
