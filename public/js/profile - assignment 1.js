window.addEventListener("DOMContentLoaded", (event) => {
  const dateDisplay = document.getElementById("date");

  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  dateDisplay.innerHTML = ` Current Date: ${year}-${
    month + 1
  }-${day}<br> Current Time: ${hours}:${minutes}`;

  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");

  const submitButton = document.querySelector("#submit-password");
  submitButton.addEventListener("click", (event) => {
    if (password.value !== confirmPassword.value) {
      event.preventDefault();
      alert("Passwords don't match.");
    }
  });

  function validateEmail() {
    var email = document.getElementById("email").value;
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    submitButton.addEventListener("click", (event) => {
      if (re.test !== email) {
        alert("Invalid Email Address");
      }
    });
  }
});
