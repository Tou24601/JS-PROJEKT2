const valueInput = document.querySelector("#valueInput");
const currencySelector = document.querySelector("#currencySelector");
const currencyButton = document.querySelector("#currencyButton");
const comeout = document.querySelector("#comeout");

const chooseCurrency = async (event) => {
  try {
    let chosenCurrencyRate;
    const response = await fetch(
      `http://api.nbp.pl/api/exchangerates/rates/a/${event.target.value}/?format=json`
    );
    const finalResponse = await response.json();
    chosenCurrencyRate = finalResponse.rates[0].mid;
    console.log(chosenCurrencyRate);
    const getComeout = () => {
        const finalValue = (valueInput.value * chosenCurrencyRate).toFixed(2);
        comeout.innerHTML = finalValue;
      };
      currencyButton.addEventListener("click", getComeout);
 //   return chosenCurrencyRate;
  } catch (err) {
    console.log(err);
  }
};

//console.log(chosenCurrencyRate);
/*const getComeout = () => {
  const finalValue = (valueInput.value * chosenCurrencyRate).toFixed(2);
  comeout.innerHTML = finalValue;
};*/

currencySelector.addEventListener("change", chooseCurrency);
//currencyButton.addEventListener("click", getComeout);
