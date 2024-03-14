// import { useState } from "react";
import "./App.css";
import CurrencyConvo from "./components/CurrencyConvo/CurrencyConvo.jsx";
// import BgChanger from "./components/BgChanger";
// import PassGen from "./components/PassGen.tsx";

function App() {
  // const [count, setCount] = useState(0);
  // Q. what will output of this code, when we use direct 4 setCounter methods with increase counter by 1
  // change the state by 4
  // const add = () => {
  //   // i've added prev for tracking the previous state of the state variable and then changing it according to it using callback function
  //   // setCount((prev) => prev + 1);
  //   // setCount((prev) => prev + 1);
  //   // setCount((prev) => prev + 1);
  //   setCount(count + 1);
  // };
  // const subtract = () => count > 0 && setCount(count - 1);

  return (
    <div
      style={{ height: "100vh" }}
      className="flex flex-col item-center align-middle justify-center"
    >
      {/* <div>
        <img
          src="https://i.ytimg.com/vi/lI7IIOWM0Mo/maxresdefault.jpg"
          width={"500px"}
          className="rounded item-center mx-auto"
          alt=""
          srcSet=""
        />
      </div>
      <h1 className="font-bold my-8">Gourav is learning react</h1>
      <div className="card mx-auto w-full">
        <button className="mx-3" onClick={add}>
          Add {count}
        </button>
        <button className="mx-3" onClick={subtract}>
          Subtract {count}
        </button>
      </div> */}

      {/* <BgChanger /> */}
      {/* <PassGen /> */}
      <CurrencyConvo/>
    </div>
  );
}

export default App;
