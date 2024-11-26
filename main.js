let contImage = document.getElementById("image");
let h2 = document.getElementById("h2");
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let mountains7 = document.getElementById("mountain7");

// start animation
window.onscroll = function name() {
  let value = scrollY;

  stars.style.left = value + "px";
  if (scrollY >= 154) {
    contImage.style.background = "linear-gradient(#376281,#10001f)";
  } else {
    contImage.style.background = "linear-gradient(#200016, #10001f)";
  }
  if (scrollY <= 60) {
    h2.style.fontSize = 60 + "px";
  } else if (scrollY <= 196) {
    h2.style.fontSize = value + "px";
  } else {
    h2.style.fontSize = 196 + "px";
  }
  moon.style.top = value * 4 + "px";
  mountains3.style.top = value * 1.8 + "px";
  mountains4.style.top = value + "px";
  boat.style.left = value * 2 + "px";
  console.log(value);
};
