import React from "react";
import { useCalculateDispatch } from "../../contexts/CalculateContext";
import { useCalculateResultDispatch } from "../../contexts/CalculateResultContext";

const NumberButton = ({ children }) => {
  const dispatch = useCalculateDispatch();
  const resultDispatch = useCalculateResultDispatch();

  const buttonHandler = () => {
    dispatch({ type: "INPUT", data: children });
    resultDispatch({ type: "AC" });
  };

  return (
    <button className="text-red-800 bg-yellow-200" onClick={buttonHandler}>
      {children}
    </button>
  );
};

export default NumberButton;
