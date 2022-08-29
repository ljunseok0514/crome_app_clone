const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSumit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

function handleLinkClick() {
  alert("clicked!");
}

loginForm.addEventListener("submit", onLoginSumit);
const link = document.querySelector("a");
link.addEventListener("click", handleLinkClick);
