import InputBox from "./InputBox.tsx";
import useCurrencyInfo from "../../hooks/useCurrencyInfo";
import { useState } from "react";

function CurrencyConvo() {
  const backgroundImage =
    "https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const [amount, setAmount] = useState(0);
  const [amountCurrency, setAmountCurrency] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [convertedAmountCurrency, setConvertedAmountCurrency] = useState("inr");

  let data = useCurrencyInfo(amountCurrency);
  let options = Object.keys(data);

  const convert = () => {
    setConvertedAmount(amount * data[convertedAmountCurrency]);
  };

  const swap = () => {
    setAmount(convertedAmount);
    setConvertedAmount(amount);
    setAmountCurrency(convertedAmountCurrency);
    setConvertedAmountCurrency(amountCurrency);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                selectCurrency={amountCurrency}
                onAmountChanged={(amount) => setAmount(Number(amount))}
                currencyOptions={options}
                onCurrencyChanged={(amountCurrency) =>
                  setAmountCurrency(amountCurrency)
                }
                minValue={0}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                selectCurrency={convertedAmountCurrency}
                onAmountChanged={() =>
                  setConvertedAmount(Number(convertedAmount))
                }
                currencyOptions={options}
                onCurrencyChanged={(convertedAmountCurrency) =>
                  setConvertedAmountCurrency(convertedAmountCurrency)
                }
                minValue={-1}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={convert}
            >
              Convert {amountCurrency.toUpperCase()} to{" "}
              {convertedAmountCurrency.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConvo;
