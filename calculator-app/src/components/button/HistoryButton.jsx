import React, { useState } from "react";
import { useCalculateHistory } from "../../contexts/CalculateHistoryContext";

const HistoryButton = ({ children }) => {
  const [isOpen, open] = useState(false);

  const openModal = () => open(true);
  const closeModal = () => open(false);

  const history = useCalculateHistory();

  const buttonHandler = (event) => {
    openModal();

    // history 정보 가져옴
    console.log(history);
  };

  return (
    <button className="bg-blue-200 hover:bg-blue-300" onClick={buttonHandler}>
      {children}
    </button>
  );
};

export default HistoryButton;
