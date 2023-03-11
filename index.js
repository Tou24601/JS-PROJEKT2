const valueInput = document.querySelector("#valueInput");
const currencySelector = document.querySelector("#currencySelector");
const currencyButton = document.querySelector("#currencyButton");
const comeout = document.querySelector("#comeout");

const chooseCurrency = async (event) => {
  try {
    const response = await fetch(
      `http://api.nbp.pl/api/exchangerates/rates/a/${event.target.value}/?format=json`
    );
    const finalResponse = await response.json();
    const chosenCurrencyRate = await finalResponse.rates[0].mid;
    currencyButton.addEventListener("click", () => getComeout(chosenCurrencyRate));
  } catch (err) {
    console.log(err);
  }
};

const getComeout = (chosenCurrencyRate) => {
  const finalValue = (valueInput.value * chosenCurrencyRate).toFixed(2);
  comeout.innerHTML = finalValue;
};

currencySelector.addEventListener("change", chooseCurrency);
