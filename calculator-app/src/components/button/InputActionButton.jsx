import React from "react";
import { useCalculateDispatch } from "../../contexts/CalculateContext";
import { useCalculateResultDispatch } from "../../contexts/CalculateResultContext";

const InputActionButton = ({ children, action }) => {
  const dispatch = useCalculateDispatch();
  const resultDispatch = useCalculateResultDispatch();

  const buttonHandler = () => {
    dispatch(action);
    resultDispatch({ type: "AC" });
  };

  return (
    <button className="bg-blue-200 hover:bg-blue-300" onClick={buttonHandler}>
      {children}
    </button>
  );
};

export default InputActionButton;
