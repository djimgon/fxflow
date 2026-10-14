import { useState } from "react";

export function CurrencyConverter() {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");

    return (
        <div className="__converter">
            <h1>FXFlow Currency Converter</h1>

            <form>
                <label htmlFor="amount">Amount</label>
                <input
                    type="number"
                    id="amount"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                />
                <div>
                    <label htmlFor="fromCurrency">From</label>

                    <select
                        id="fromCurrency"
                        value={fromCurrency}
                        onChange={(event) => setFromCurrency(event.target.value)}
                    >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="JPY">JPY</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="toCurrency">To</label>

                    <select
                        id="toCurrency"
                        value={toCurrency}
                        onChange={(event) => setToCurrency(event.target.value)}
                    >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="JPY">JPY</option>
                    </select>
                </div>
                <p>To Currency: {toCurrency}</p>
            </form>
        </div>
    );
}