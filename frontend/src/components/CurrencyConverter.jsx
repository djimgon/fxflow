import { useState, useMemo } from "react";

const currencies = ["USD", "EUR", "GBP", "JPY"];

const exchangeRates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7
};

export function CurrencyConverter() {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");

    const convertedAmounts = useMemo(() => {
        const amountInUSD = Number(amount) / exchangeRates[fromCurrency];

        return currencies.map((currency) => {
            return {
                currency: currency,
                amount: amountInUSD * exchangeRates[currency]
            };
        });
    }, [amount, fromCurrency]);

    const convertedAmount = convertedAmounts.find(
        (item) => item.currency === toCurrency
    );

    return (
        <div className="__converter">
            <h1 className="__converter-title">
                FXFlow Currency Converter
            </h1>

            <form
                className="__converter-form"
                onSubmit={(event) => event.preventDefault()}
            >
                <div className="__converter-field">
                    <label htmlFor="amount">Amount</label>

                    <div className="__converter-amount">
                        <input
                            type="number"
                            id="amount"
                            min="0"
                            step="0.01"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(event) => setAmount(event.target.value)}
                        />

                        <div className="__converter-amount-controls">
                            <button
                                type="button"
                                aria-label="Decrease amount"
                                onClick={() =>
                                    setAmount(Math.max(0, Math.round((Number(amount) - 1) * 100) / 100))
                                }
                            >
                                −
                            </button>

                            <button
                                type="button"
                                aria-label="Increase amount"
                                onClick={() =>
                                    setAmount(Math.round((Number(amount) + 1) * 100) / 100)
                                }
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>

                <div className="__converter-currencies">
                    <div className="__converter-field">
                        <label htmlFor="fromCurrency">From</label>

                        <div className="__converter-select">
                            <select
                                id="fromCurrency"
                                value={fromCurrency}
                                onChange={(event) => setFromCurrency(event.target.value)}
                            >
                            {currencies.map((currency) => (
                                <option key={currency} value={currency}>{currency}</option>
                            ))}
                            </select>
                        </div>
                    </div>

                    <div className="__converter-field">
                        <label htmlFor="toCurrency">To</label>

                        <div className="__converter-select">
                            <select
                                id="toCurrency"
                                value={toCurrency}
                                onChange={(event) => setToCurrency(event.target.value)}
                            >
                            {currencies.map((currency) => (
                                <option key={currency} value={currency}>{currency}</option>
                            ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="__converter-result">
                    <span>Converted Amount:&nbsp;</span>

                    <strong>
                        {convertedAmount.amount.toFixed(2)} {toCurrency}
                    </strong>
                </div>
            </form>
        </div>
    );
}