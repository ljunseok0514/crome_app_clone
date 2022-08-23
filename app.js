const h1 = document.querySelector("div.hello:first-child h1");

function hadleTitleClick() {
  const cliickedClass = "cliicked lee_font";
  if (h1.className === cliickedClass) {
    h1.className = "";
  } else {
    h1.className = cliickedClass;
  }
}

h1.addEventListener("click", hadleTitleClick);
