import React from "react";
import { useCalculateDispatch } from "../../contexts/CalculateContext";
import { useCalculateResultDispatch } from "../../contexts/CalculateResultContext";

const OperatorButton = ({ children }) => {
  const dispatch = useCalculateDispatch();
  const resutltDispatch = useCalculateResultDispatch();

  const buttonHandler = () => {
    dispatch({ type: "INPUT", data: children });
    resutltDispatch({ type: "AC" });
  };

  return (
    <button className="bg-blue-200 hover:bg-blue-300" onClick={buttonHandler}>
      {children}
    </button>
  );
};

export default OperatorButton;
