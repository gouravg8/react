import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const add = () => count < 20 && setCount(count + 1);
  const subtract = () => count > 0 && setCount(count - 1);

  return (
    <>
      <div>
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
      </div>
    </>
  );
}

export default App;
