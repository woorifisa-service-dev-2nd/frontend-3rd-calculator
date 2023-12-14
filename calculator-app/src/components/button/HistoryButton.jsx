import React, { useState } from "react";
import { useCalculateHistory } from "../../contexts/CalculateHistoryContext";
import { createPortal } from 'react-dom';
import Modal from "../ui/Modal";
import HistoryForm from "../ui/HistoryForm";
import { useCalculateDispatch } from "../../contexts/CalculateContext";
import { useCalculateResultDispatch } from "../../contexts/CalculateResultContext";

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

  const dispatch = useCalculateDispatch();
  const dispatchResult = useCalculateResultDispatch();

  const historyHandler = (history) => {
    closeModal();
    dispatch({ type: "HISTORY", data: history.expression });
    dispatchResult({ type: "HISTORY", result: history.result });
  };

  return (
    <>
    <button className="bg-blue-200 hover:bg-blue-300" onClick={buttonHandler}>
      {children}
    </button>
    {isOpen && createPortal(
      <Modal onClose={closeModal}>
        <HistoryForm onClose={closeModal} onClick={historyHandler}></HistoryForm>
      </Modal>, 
      document.body)}
    </>
  );
};

export default HistoryButton;
