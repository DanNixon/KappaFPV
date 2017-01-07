function clamped_map(value, in_low, in_high, out_low, out_high) {
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
  var titleOpacity = clamped_map(time, 0.8, 1, 1, 0);

  this.logoDiv.style.borderRightColor = "rgba(157, 151, 217, " + titleOpacity + ")";
  this.logoDiv.style.opacity = titleOpacity;

  this.titleDiv.style.top = clamped_map(time, 0.02, 0.05, 250, 0) + "px";
  this.titleDiv.style.opacity = titleOpacity;
}

function onLoad() {
  var transition = new Transition(document.getElementById("logo"), document.getElementById("video_title"));
  webvfx.renderRequested.connect(transition, Transition.prototype.render);
  webvfx.readyRender(true)
}

window.addEventListener("load", onLoad, false);
