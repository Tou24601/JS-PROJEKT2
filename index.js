const valueInput = document.querySelector("#valueInput");
const currencySelector = document.querySelector("#currencySelector");
const currencyButton = document.querySelector("#currencyButton");
const comeout = document.querySelector("#comeout");

const chooseCurrency = async (event) => {
    let chosenCurrencyRate;
    const response = await fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${event.target.value}/?format=json`)
    const finalResponse = await response.json();
    chosenCurrencyRate = await finalResponse.rates[0].mid;
    console.log(chosenCurrencyRate);
    return newFunction(chosenCurrencyRate);
};
const newFunction = (parametr) => {
    const currencyRate = parametr;
    return currencyRate;
};
console.log(currencyRate);
const getComeout = () => {
     const finalValue = (valueInput.value * currencyRate).toFixed(2)
     comeout.innerHTML = finalValue;
};

currencySelector.addEventListener("change", chooseCurrency);
currencyButton.addEventListener("click", getComeout);
console.log(currencyRate);