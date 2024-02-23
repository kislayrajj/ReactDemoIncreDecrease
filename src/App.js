// import logo from './logo.svg';
import "./App.css";

import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const incNum = () => {
    setNum(num + 1);
    document.querySelector("h1").style.color = "green";
  };

  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
      document.querySelector("h1").style.color = "red";
    } else {
      setNum(0);
      alert("Can not be less than 0");
    }
  };
  return (
    <>
      <div className="main_div ">
        <div className="center_div">
          <h1> {num}</h1>
          <div className="btn_div">
            <button
              onClick={incNum}
              className="border-2 border-red-500 border-solid p-1"
            >
              Increase
            </button>
            <button onClick={decNum} className="border-2 border-red-500 border-solid p-1">Decrease</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
