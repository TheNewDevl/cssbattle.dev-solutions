const body = document.querySelector("body");
const mainHtml = document.querySelector("#main").innerHTML;

const classes = ["diff", "reff", "overlay"];

classes.forEach((className) => {
  let canvas = document.createElement("div");
  canvas.classList.add("canvas", className);
  canvas.innerHTML = mainHtml;
  body.appendChild(canvas);
});
