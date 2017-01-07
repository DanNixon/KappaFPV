function clamped_map(value, in_low, in_high, out_low, out_high) {
  if (value <= in_low)
    return out_low;
  if (value >= in_high)
    return out_high;
  return (((value - in_low) * (out_high - out_low)) / (in_high - in_low)) + out_low;
}

function TitleCard(logoDiv, titleDiv) {
  this.logoDiv = logoDiv;
  this.titleDiv = titleDiv;
  this.titleText = titleDiv.getElementsByTagName("p")[0]
}

TitleCard.prototype.render = function (time) {
  this.titleText.innerText = webvfx.getStringParameter('title');
  this.titleDiv.style.width = webvfx.getNumberParameter('title_width') + "px";
  
  var titleOpacity = clamped_map(time, 0.8, 1, 1, 0);

  this.logoDiv.style.borderRightColor = "rgba(157, 151, 217, " + titleOpacity + ")";
  this.logoDiv.style.opacity = titleOpacity;

  this.titleDiv.style.top = clamped_map(time, 0.02, 0.05, 250, 0) + "px";
  this.titleDiv.style.opacity = titleOpacity;
}

function onLoad() {
  var title = new TitleCard(document.getElementById("logo"), document.getElementById("video_title"));
  webvfx.renderRequested.connect(title, TitleCard.prototype.render);
  webvfx.readyRender(true)
}

window.addEventListener("load", onLoad, false);
