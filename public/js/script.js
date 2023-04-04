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

  const form = document.querySelector("form");
  const submitButton2 = document.getElementById("save");

  submitButton2.addEventListener("click", (event) => {
    event.preventDefault();
    const selectedValue = document.querySelector(
      'input[name="selectOne"]:checked'
    ).value;
    const selectedOption = document.getElementById("selected-option");
    selectedOption.innerHTML = "<strong>" + selectedValue + "</strong>";
    selectedOption.textContent = selectedValue;
  });
  const form2 = document.querySelector(".postTemp");
  const submitButton3 = document.getElementById("submit-3");
  submitButton3.addEventListener("click", (event) => {
    const selectedValue2 = document.querySelector(
      'input[name="oneOption"]:checked'
    ).value;
    const selectedOption2 = document.getElementById("selected-option2");
    selectedOption2.innerHTML = "<strong>" + selectedValue2 + "</strong>";
    selectedOption2.textContent = selectedValue2;
  });

  const slider = document.querySelector("#temp-slider");
  const selectedOption3 = document.querySelector("#selected-option3");

  slider.addEventListener("input", () => {
    selectedOption3.innerHTML = slider.value + "°C";
  });
});
