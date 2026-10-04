import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const click = (value) => {
    setInput(input + value);
  };

  const clear = () => {
    setInput("");
    setResult("");
  };

  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(input).toString());
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        {input || "0"}
        <br />
        <b>{result}</b>
      </div>

      <div className="buttons">
        <button onClick={clear}>AC</button>

        <button onClick={backspace}>⌫</button>

        <button onClick={() => click("/")}>÷</button>

        <button onClick={() => click("*")}>×</button>

        {[
          "7",
          "8",
          "9",
          "-",
          "4",
          "5",
          "6",
          "+",
          "1",
          "2",
          "3",
          "0",
          ".",
        ].map((x) => (
          <button key={x} onClick={() => click(x)}>
            {x}
          </button>
        ))}

        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;