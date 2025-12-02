const formEl = document.getElementById("form");
const emailEl = document.getElementById("email");
const inputEl = document.getElementById("input");
const validEl = document.getElementById("valid");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const result = emailIsValid(emailEl.value);

  if (result) {
    inputEl.classList.remove("alert");
    validEl.style.visibility = "hidden";
    // SENT EMAIL TO LOCALSTORAGE
    localStorage.setItem("email", emailEl.value);
    window.location.href = "./success.html";
  } else {
    // ALERT
    inputEl.classList.add("alert");
    validEl.style.visibility = "visible";
  }
});

// SIMPLE EMAIL REGEX CHECK  https://ui.dev/validate-email-address-javascript
function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
