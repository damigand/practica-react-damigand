import "./Calculator.css";

import { useRef, useReducer } from "react";
import reducer from "../../utils/calculatorReducer";

const initialState = [];

const Calculator = () => {
    const operationRef = useRef(null);
    const numbersRef = useRef({ first: null, second: null });
    const inputRef = useRef(null);

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleOperation = (choice) => {
        if (numbersRef.current?.first) {
            operationRef.current = choice;
            inputRef.current.value = "";
        }
    };

    const calculateOperation = () => {
        dispatch({
            type: operationRef.current,
            payload: {
                ...numbersRef.current,
                operation: operationRef.current
            }
        });

        inputRef.current.value = null;
        numbersRef.current = { first: null, second: null };
        operationRef.current = null;
    };

    const handleNumber = (e) => {
        if (!operationRef.current) {
            numbersRef.current.first = e.target.value;
        } else {
            numbersRef.current.second = e.target.value;
        }
    };

    return (
        <div className="calculator">
            <h2>CALCULATOR</h2>
            <input type="number" onChange={(e) => handleNumber(e)} ref={inputRef} value={inputRef.value} />
            <div className="current-operation">
                <span className="first-number">{numbersRef.current?.first || ""}</span>
                <span className="operation">{operationRef.current || ""}</span>
                <span className="second-number">{numbersRef.current?.second || ""}</span>
            </div>
            <div className="actions">
                <button type="button" onClick={() => handleOperation("+")}>
                    +
                </button>
                <button type="button" onClick={() => handleOperation("-")}>
                    -
                </button>
                <button type="button" onClick={() => handleOperation("x")}>
                    x
                </button>
                <button type="button" onClick={() => handleOperation("/")}>
                    /
                </button>
                <button type="button" onClick={() => handleOperation("%")}>
                    %
                </button>
                <button type="button" onClick={calculateOperation}>
                    =
                </button>
            </div>
            <div className="last-result">
                <h3>Último resultado</h3>
                <span>
                    {state[state.length - 1] &&
                        `
                                ${state[state.length - 1].first} 
                                ${state[state.length - 1].operation}
                                ${state[state.length - 1].second} =
                                ${state[state.length - 1].result}
                                `}
                </span>
            </div>
            <div className="result-history">
                <h3>Historial de resultados</h3>
                <ul>
                    {state.map((result, index) => {
                        return (
                            <li key={index} className="result">
                                {result.first} {result.operation} {result.second} = {result.result}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Calculator;
