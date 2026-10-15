import { currencies } from "../data/currencies";

export function CurrencySelect({ id, label, value, onChange }) {
    return (
        <div className="__converter-field">
            <label htmlFor={id}>{label}</label>

            <div className="__converter-select">
                <select
                    id={id}
                    value={value}
                    onChange={onChange}
                >
                    {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}