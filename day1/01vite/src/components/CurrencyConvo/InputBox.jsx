import PropTypes from "prop-types";
function InputBox({
  label,
  amount,
  onAmountChanged,
  currencyOptions = [],
  onCurrencyChanged,
  selectCurrency = "usd",
  className = "",
}) {
  return (
    <div className={`bg-gray-50 p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          value={amount}
          onChange={(e) => onAmountChanged && onAmountChanged(e.target.value)}
          className="outline-none w-full  px-4 rounded py-1.5"
          type="number"
          placeholder="Amount"
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          onChange={(e) =>
            onCurrencyChanged && onCurrencyChanged(e.target.value)
          }
          value={selectCurrency}
        >
          {/* {console.log("this is currency options", currencyOptions)} */}
          {currencyOptions.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  onAmountChanged: PropTypes.func.isRequired,
  currencyOptions: PropTypes.arrayOf(PropTypes.string),
  onCurrencyChanged: PropTypes.func,
  selectCurrency: PropTypes.string,
  className: PropTypes.string,
  minValue: PropTypes.number,
};
