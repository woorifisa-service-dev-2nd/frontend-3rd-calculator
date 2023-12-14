import React from "react";
import { useCalculateDispatch } from "../../contexts/CalculateContext";

const OperatorButton = ({ children }) => {
  const dispatch = useCalculateDispatch();

  const buttonHandler = () => {
    dispatch({ type: "INPUT", data: children });
  };

  return (
    <button className="bg-blue-200 hover:bg-blue-300" onClick={buttonHandler}>
      {children}
    </button>
  );
};

export default OperatorButton;
