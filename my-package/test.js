// test.js
const { convert } = require("./dist/index");

const amount = 100;
const fromCurrency = "USD";
const toCurrency = "EUR";

const result = convert(amount, fromCurrency, toCurrency);

console.log(`${amount} ${fromCurrency} is equal to ${result} ${toCurrency}`);
