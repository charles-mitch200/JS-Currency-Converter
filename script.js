const currencyOneElem = document.getElementById("currency-one");
const worthOneElem = document.getElementById("worth-one");
const currencyTwoElem = document.getElementById("currency-two");
const worthTwoElem = document.getElementById("worth-two");
const exchangeRateElem = document.getElementById("exchange-rate");

// Fetch currency data from an API and update the page correctly
const updateRate = () => {
  const apiURL = `https://v6.exchangerate-api.com/v6/cf752c114be29d55265b4192/latest/${currencyOneElem.value}`;
  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencyTwoElem.value];
      exchangeRateElem.innerText = `1 ${currencyOneElem.value} = ${rate.toFixed(
        2
      )} ${currencyTwoElem.value}`;
      worthTwoElem.value = (rate * worthOneElem.value).toFixed(2);
    });
};

// Display the default currency rate when the page loads
updateRate();

// Add event listeners for the necessary functionality
currencyOneElem.addEventListener("change", updateRate);
currencyTwoElem.addEventListener("change", updateRate);
worthOneElem.addEventListener("input", updateRate);
