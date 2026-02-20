const input = document.getElementById("birthdate");
const btn = document.getElementById("calculate-btn");
const errorMessage = document.getElementById("error-message");
/////////////////////////////////
const resultYears = document.getElementById("result-years");
const resultMonths = document.getElementById("result-months");
const resultDays = document.getElementById("result-days");
////////////////////////////////
const cardYears = document.getElementById("card-years");
const cardMonths = document.getElementById("card-months");
const cardDays = document.getElementById("card-days");

btn.addEventListener("click", calculate);

function calculate() {

  errorMessage.classList.remove("visible");
  cardYears.classList.remove("visible");
  cardMonths.classList.remove("visible");
  cardDays.classList.remove("visible");

  const inputValue = input.value;

  if (inputValue === "") {
    errorMessage.textContent = "// ВЫБЕРИТЕ ДАТУ РОЖДЕНИЯ";
    errorMessage.classList.add("visible");
    return;
  }

  const birthDate = new Date(inputValue);
  const today = new Date();

  if (birthDate > today) {
    errorMessage.textContent = "// ДАТА НЕ МОЖЕТ БЫТЬ В БУДУЩЕМ";
    errorMessage.classList.add("visible");
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months = months - 1;

    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    const daysInPrevMonth = prevMonth.getDate();

    days = days + daysInPrevMonth;
  }

  if (months < 0) {
    years = years - 1;
    months = months + 12;
  }

  resultYears.textContent = years;
  resultMonths.textContent = months;
  resultDays.textContent = days;

  setTimeout(function () {
    cardYears.classList.add("visible");
  }, 0);
  setTimeout(function () {
    cardMonths.classList.add("visible");
  }, 100);
  setTimeout(function () {
    cardDays.classList.add("visible");
  }, 200);
}