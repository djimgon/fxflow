import {useState, useMemo} from "react";

import { currencies, exchangeRates } from "../data/currencies";
import { CurrencySelect } from "./CurrencySelect";
import { AmountInput } from "./AmountInput";

export function CurrencyConverter() {
    const [amount, setAmount] = useState("");
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");

    const handleAmountChange = (event) => {
        const value = event.target.value;

        if (!/^\d*\.?\d*$/.test(value)) {
            return;
        }

        const normalizedValue = value.replace(/^0+(?=\d)/, "");

        setAmount(normalizedValue);
    };

    const handleIncrease = () => {
        setAmount((prev) =>
            Math.round((Number(prev) + 1) * 100) / 100
        );
    };

    const handleDecrease = () => {
        setAmount((prev) =>
            Math.max(0, Math.round((Number(prev) - 1) * 100) / 100)
        );
    };

    const convertedAmounts = useMemo(() => {
        const numericAmount = Number(amount);

        const amountInUSD =
            (Number.isFinite(numericAmount) ? numericAmount : 0)
            / exchangeRates[fromCurrency];

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
                <AmountInput
                    value={amount}
                    onChange={handleAmountChange}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                />

                <div className="__converter-currencies">
                    <CurrencySelect
                        id="fromCurrency"
                        label="From"
                        value={fromCurrency}
                        onChange={(event) => setFromCurrency(event.target.value)}
                    />

                    <CurrencySelect
                        id="toCurrency"
                        label="To"
                        value={toCurrency}
                        onChange={(event) => setToCurrency(event.target.value)}
                    />
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