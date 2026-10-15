export function AmountInput({ value, onChange, onIncrease, onDecrease }) {
    return (
        <div className="__converter-field">
            <label htmlFor="amount">Amount</label>

            <div className="__converter-amount">
                <input
                    type="text"
                    inputMode="decimal"
                    id="amount"
                    placeholder="Enter amount"
                    value={value}
                    onChange={onChange}
                />

                <div className="__converter-amount-controls">
                    <button
                        type="button"
                        aria-label="Decrease amount"
                        onClick={onDecrease}
                    >
                        −
                    </button>

                    <button
                        type="button"
                        aria-label="Increase amount"
                        onClick={onIncrease}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}