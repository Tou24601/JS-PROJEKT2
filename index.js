const valueInput = document.querySelector("#valueInput");
const currencySelector = document.querySelector("#currencySelector");
const currencyButton = document.querySelector("#currencyButton");
const comeout = document.querySelector("#comeout");

const euroApi = "http://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json";
const usdApi = "http://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json";
const chfApi = "http://api.nbp.pl/api/exchangerates/rates/a/chf/?format=json";

let chosenCurrencyRate


const chooseCurrency = (event) => {
    if (event.target.value == "EUR") {
        fetch(euroApi)
        .then((response) => response.json())
        .then((json) => {
            const chosenCurrencyRate = json.rates[0].mid;
            console.log(chosenCurrencyRate);
            return chosenCurrencyRate;
        })
        .catch(() => alert("Coś poszło nie tak"));
    } else if (event.target.value == "USD") {
        fetch(usdApi)
        .then((response) => response.json())
        .then((json) => {
            const chosenCurrencyRate = json.rates[0].mid;
            console.log(chosenCurrencyRate);
            return chosenCurrencyRate;
        })
        .catch(() => alert("Coś poszło nie tak"));
    } else if (currencySelector.value == "CHF") {
        fetch(chfApi)
        .then((response) => response.json())
        .then((json) => {
            const chosenCurrencyRate = json.rates[0].mid;
            console.log(chosenCurrencyRate);
            return chosenCurrencyRate;
        })
        .catch(() => alert("Coś poszło nie tak"));
    } else {
    alert("Coś poszło nie tak");
    }
    console.log(chosenCurrencyRate);
    return chosenCurrencyRate;
};

const getComeout = () => {
     const usersValue = valueInput.value;
     const finalValue = usersValue * chosenCurrencyRate;
     comeout.innerHTML = finalValue;
};

currencySelector.addEventListener("change", chooseCurrency);
currencyButton.addEventListener("click", getComeout);