 "use strict"

const valueInput = document.querySelector("#valueInput");
const currencySelector = document.querySelector("#currencySelector");
const currencyButton = document.querySelector("#currencyButton");
const comeout = document.querySelector("#comeout");

const chooseCurrency = async (event) => {
  document.body.setAttribute("style", "cursor: progress");
 console.log(event.target.value)
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
  if (valueInput.value > 0 && chosenCurrencyRate == true) {
    const finalValue = (valueInput.value * chosenCurrencyRate).toFixed(2);
    comeout.innerHTML = finalValue;
  }  else if (valueInput.value > 0 && chosenCurrencyRate == false) {
   alert("Wybierz walutę");
  } else if (valueInput.value < 0) {
   alert("Wpisz poprawną kwotę");
  } else {
    alert("Wybierz walutę i wpisz poprawną kwotę");
   console.log(valueInput.value, chosenCurrencyRate)
  }
};

currencySelector.addEventListener("change", chooseCurrency);
