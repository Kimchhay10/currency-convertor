"use strict"
// Object.defineProperty(exports, "__esModule", {value: true})
// exports.convert = void 0
// function convert(amount, fromCurrency, toCurrency) {
//     return amount // Placeholder, replace with actual conversion logic
// }

// exports.convert = convert
class CurrencyConverter {
    constructor() {
        this.baseCurrency = "USD"
    }

    async getExchangeRates() {
        const response = await fetch("https://open.er-api.com/v6/latest")
        const data = await response.json()

        if (data.error) {
            throw new Error(
                `Failed to fetch exchange rates: ${data.error.message}`,
            )
        }

        this.exchangeRates = data.rates
    }

    async convert(amount, fromCurrency, toCurrency) {
        if (!this.exchangeRates) {
            await this.getExchangeRates()
        }

        const fromRate = this.exchangeRates[fromCurrency]
        const toRate = this.exchangeRates[toCurrency]

        if (!fromRate || !toRate) {
            throw new Error("Invalid currency code")
        }

        const convertedAmount = (amount / fromRate) * toRate
        return convertedAmount
    }
}
