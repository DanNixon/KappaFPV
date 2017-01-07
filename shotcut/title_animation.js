function clamped_map(value, in_low, in_high, out_low, out_high) {
  console.log("map, v=" + value);
  if (value <= in_low)
    return out_low;
  if (value >= in_high)
    return out_high;
  return (((value - in_low) * (out_high - out_low)) / (in_high - in_low)) + out_low;
}

function Transition(logoDiv, titleDiv) {
  this.logoDiv = logoDiv;
  this.titleDiv = titleDiv;
  // titleDiv.getElementsByTagName("p")[0].innerText = webvfx.getStringParameter('title');
}

Transition.prototype.render = function (time) {
  var mainOpacity = 1 - clamped_max(time, 0.6, 1, 0, 1);

  this.logoDiv.style.borderRightColor = "rgba(157, 151, 217, " + mainOpacity + ")";
  this.logoDiv.style.opacity = mainOpacity;

  this.titleDiv.style.top = clamped_map(time, 0.02, 0.05, 250, 0) + "px";
  this.titleDiv.style.opacity = mainOpacity;
}

function onLoad() {
  onResize();

  var transition = new Transition(document.getElementById("logo"), document.getElementById("video_title"));

  webvfx.renderRequested.connect(transition, Transition.prototype.render);

  webvfx.readyRender(true)
}

function onResize() {
}

window.addEventListener("load", onLoad, false);
window.addEventListener("load", onResize, false);
