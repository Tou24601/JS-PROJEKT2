const valueInput = document.querySelector("#valueInput");
const currencySelector = document.querySelector("#currencySelector");
const currencyButton = document.querySelector("#currencyButton");
const comeout = document.querySelector("#comeout");

const chooseCurrency = async (event) => {
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
};

const getComeout = (chosenCurrencyRate) => {
  if (valueInput.value > 0) {
    const finalValue = (valueInput.value * chosenCurrencyRate).toFixed(2);
    comeout.innerHTML = finalValue;
  } else {
    alert("Wpisz poprawną kwotę");
  }
};

currencySelector.addEventListener("change", chooseCurrency);
