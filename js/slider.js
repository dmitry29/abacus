import "https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js";

var frame = document.createElement("iframe")
frame.onload = function() {
  var frameWin = frame.contentWindow
  console.log(frameWin.location.origin) // "null"
  console.log(frameWin.origin) // "https://stargate.example"
}
document.body.appendChild(frame)