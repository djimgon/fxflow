import { useState } from "react";

export function CurrencyConverter() {
    const [amount, setAmount] = useState(0);

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
                <p>Entered amount: {amount}</p>
            </form>
        </div>
    );
}