import React, { useCallback, useEffect, useRef, useState } from "react";

function InputField() {
  const [inputFields, setInputFields] = useState({
    input: "",
    inpRange: 6,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputFields((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const [inputCheckField, setInputCheckField] = useState({
    inpNumber: false,
    inpCharacter: false,
  });

  const handleInputCheckChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputCheckField((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));

  // useRef
  const passRef = useRef<HTMLInputElement>(null);

  const handleCopy = async () => {
    passRef.current?.select();
    await navigator.clipboard.writeText(inputFields.input);
  };

  const generatePass = useCallback(
    //useCallback is used to optimize(memoize) the method
    (len: number) => {
      let pass = "";
      // all english alphabets
      const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      // all english numbers
      const numbers = "0123456789";
      // all english special characters
      const specialChars = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";

      let str = alphabets;
      if (inputCheckField.inpNumber) str += numbers;
      if (inputCheckField.inpCharacter) str += specialChars;

      for (let idx = 0; idx < len; idx++) {
        pass += str[Math.floor(Math.random() * str.length)];
      }
      return pass;
    },
    [
      inputFields.inpRange,
      inputCheckField.inpNumber,
      inputCheckField.inpCharacter,
    ]
  );

  useEffect(() => {
    // useEffect are use to do something when dependecies changes and also provide the optimization(memoization)
    setInputFields((prevState) => ({
      ...prevState,
      input: generatePass(prevState.inpRange),
    }));
  }, [
    inputFields.inpRange,
    inputCheckField.inpNumber,
    inputCheckField.inpCharacter,
  ]);

  //   const handleInpChange = (e) => setInputField(e.target.value);
  return (
    <div className="flex flex-col w-full justify-center item-center align-middle ">
      <div className="flex gap-4">
        <input
          className="border  outline-none  rounded px-2 text-black w-full"
          type="text"
          name="input"
          id="input"
          placeholder="nothing"
          value={inputFields.input}
          onChange={handleInputChange}
          readOnly
          ref={passRef}
        />
        <button
          onClick={handleCopy}
          className="bg-blue-600 hover:bg-blue-800 px-3 py-1 rounded text-white font-semibold"
        >
          copy
        </button>
      </div>
      <div className="flex flex-wrap gap-4">
        <input
          className="cursor-pointer"
          type="range"
          name="inpRange"
          id="inpRange"
          min={6}
          max={20}
          value={inputFields.inpRange}
          onChange={handleInputChange}
        />

        <p>Length ({inputFields.inpRange})</p>

        <div>
          <input
            className="mr-1 cursor-pointer"
            type="checkbox"
            name="inpNumber"
            id="inpNumber"
            checked={inputCheckField.inpNumber}
            onChange={handleInputCheckChange}
          />
          <label htmlFor="number">Number</label>
        </div>
        <div>
          <input
            className="mr-1 cursor-pointer"
            type="checkbox"
            name="inpCharacter"
            id="inpCharacter"
            checked={inputCheckField.inpCharacter}
            onChange={handleInputCheckChange}
          />
          <label htmlFor="character">Character</label>
        </div>
      </div>
    </div>
  );
}

function PassGen() {
  return (
    <div className="w-full flex justify-center bg-gray-900">
      <div className=" border align-middle shadow-xl w-2/3 md:w-2/3 lg:w-3/4 mx-auto my-32 rounded px-8 py-6 bg-white/80">
        <InputField />
      </div>
    </div>
  );
}

export default PassGen;
