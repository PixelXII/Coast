var val;
function addone() {
  setInterval(function() { document.getElementById('out').innerText = val }, 10);
  val = 0;
  val++;
}
