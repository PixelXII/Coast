var val;
var out = document.getElementById('out');
function addone() {
  setInterval(function() { out.innerText = val }, 10);
  val = 0;
  val++;
}
