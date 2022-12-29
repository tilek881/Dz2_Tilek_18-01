import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./App.css";

function App() {

    const [input, setInput] = useState("");
    const calculator = [];
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ].forEach((item) => {
        calculator.push(
            <button
                onClick={(e) => {
                    setInput(input + e.target.value);
                }}
                value={item}
                key={item}
            >
                {" "}
                {item}
            </button>
        );
    });

    return (
        <div className="wrapper">
            {" "}
            <div className="show-input">{input}</div>
            <div className="digits flex">{calculator}</div>
            <div className="modifiers subgrid">


                <button onClick={() => setInput(input.substr(0, input.length - 1))}>
                    Clear
                </button>


                <button onClick={() => setInput("")} value="">
                    AC
                </button>
            </div>
            <div className="operations subgrid">

                <button onClick={(e) => setInput(input + e.target.value)} value="+">
                    +
                </button>


                <button onClick={(e) => setInput(input + e.target.value)} value="-">
                    {" "}
                    -{" "}
                </button>

                <button onClick={(e) => setInput(input + e.target.value)} value="*">
                    {" "}
                    *
                </button>

                <button onClick={(e) => setInput(input + e.target.value)} value="/">
                    {" "}
                    /
                </button>

                <button
                    onClick={(e) => {
                        try {
                            setInput(
                                String(eval(input)).length > 3 &&
                                String(eval(input)).includes(".")
                                    ? String(eval(input).toFixed(4))
                                    : String(eval(input))
                            );
                        } catch (e) {
                            console.log(e);
                        }
                    }}
                    value="="
                >
                    =
                </button>
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



