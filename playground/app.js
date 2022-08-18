const body = document.querySelector("main");
const mainHtml = document.querySelector("#main").innerHTML;
const btn = document.querySelector("#btn");

const classes = ["diff", "reff", "overlay"];

classes.forEach((className) => {
  let canvas = document.createElement("div");
  canvas.classList.add("canvas", className);
  canvas.innerHTML = mainHtml;
  body.appendChild(canvas);
});

function upadateimage() {
  const value = document.querySelector("#url").value;
  document.documentElement.style.setProperty("--image", "url('" + value + "')");
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  upadateimage();
});
