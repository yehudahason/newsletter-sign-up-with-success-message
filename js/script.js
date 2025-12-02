const form = document.getElementById("form");
const email = document.getElementById("email");
const input = document.getElementById("input");
const valid = document.getElementById("valid");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(email.value);
  const result = emailIsValid(email.value);

  if (result) {
    input.classList.remove("alert");
    valid.style.visibility = "hidden";
    window.location.href = "/success.html";
  } else {
    input.classList.add("alert");
    valid.style.visibility = "visible";
  }
});

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
