 "use strict"

const valueInput = document.querySelector("#valueInput");
const currencySelector = document.querySelector("#currencySelector");
const currencyButton = document.querySelector("#currencyButton");
const comeout = document.querySelector("#comeout");

const chooseCurrency = async (event) => {
  document.body.setAttribute("style", "cursor: progress");
  try {
    const response = await fetch(
      `https://api.nbp.pl/api/exchangerates/rates/a/${event.target.value}/?format=json`
    );
    const finalResponse = await response.json();
    const chosenCurrencyRate = await finalResponse.rates[0].mid;
    currencyButton.addEventListener("click", () =>
      getComeout(chosenCurrencyRate)
    );
  } catch (err) {
    console.log(err);
  }
  document.body.setAttribute("style", "cursor: default");
};

const getComeout = (chosenCurrencyRate) => {
 console.log(valueInput.value, chosenCurrencyRate)
 const finalValue = (valueInput.value * chosenCurrencyRate).toFixed(2);
    comeout.innerHTML = finalValue;
  if (valueInput.value > 0 && chosenCurrencyRate == true) {
   console.log(valueInput.value, chosenCurrencyRate, "if")
    const finalValue = (valueInput.value * chosenCurrencyRate).toFixed(2);
    comeout.innerHTML = finalValue;
  }  else if (chosenCurrencyRate == false) {
   console.log(valueInput.value, chosenCurrencyRate, "waluta")
   alert("Wybierz walutę");
  } else if (valueInput.value < 0) {
   "kwota"
   alert("Wpisz poprawną kwotę");
  } else {
    alert("Wybierz walutę i wpisz poprawną kwotę");
   console.log("dół")
  }
};

currencySelector.addEventListener("change", chooseCurrency);
