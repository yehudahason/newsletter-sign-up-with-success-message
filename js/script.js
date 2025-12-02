const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(email.value);
  const result = emailIsValid(email.value);

  if (result) {
    console.log(result);
  } else {
    console.log("bad email");
  }
});

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
