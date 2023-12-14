import React from "react";
import { useCalculateDispatch } from "../../contexts/CalculateContext";

const NumberButton = ({ children }) => {
  const dispatch = useCalculateDispatch();

  const buttonHandler = () => {
    dispatch({ type: "INPUT", data: children });
  };

  return (
    <button className="text-red-800 bg-yellow-200" onClick={buttonHandler}>
      {children}
    </button>
  );
};

export default NumberButton;
