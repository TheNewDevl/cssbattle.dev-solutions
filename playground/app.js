const body = document.querySelector("body");
const main = document.querySelector("#main");

const ref = document.createElement("div");
ref.classList.add("ref", "canvas");

const diff = document.createElement("div");
diff.classList.add("diff", "canvas");

const overlay = document.createElement("div");
overlay.classList.add("overlay", "canvas");

body.appendChild(ref);
body.appendChild(diff);
body.appendChild(overlay);

ref.innerHTML = main.innerHTML;
diff.innerHTML = main.innerHTML;
overlay.innerHTML = main.innerHTML;
