export function CurrencyConverter() {
    return (
        <div>
            <h1>FXFlow Currency Converter</h1>

            <form>
                <label htmlFor="amount">Amount</label>
                <input
                    type="number"
                    id="amount"
                    placeholder="Enter amount"
                />
            </form>
        </div>
    );
}