import { useCalculateResultDispatch } from "../../contexts/CalculateResultContext";
import { useCalculate } from "../../contexts/CalculateContext";
import { useCalculateHistoryDispatch } from "../../contexts/CalculateHistoryContext";

const CalculateButton = ({ children }) => {
  const expression = useCalculate();
  const dispatch = useCalculateResultDispatch();
  const historyDispatch = useCalculateHistoryDispatch();

  const buttonHandler = () => {
    dispatch({ type: "RESULT", expression });
    historyDispatch({ type: "APPEND", expression });
  };

  return (
    <button className="bg-blue-200 hover:bg-blue-300" onClick={buttonHandler}>
      {children}
    </button>
  );
};

export default CalculateButton;
