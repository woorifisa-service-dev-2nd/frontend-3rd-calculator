import { createContext, useContext, useReducer } from "react";
import { evaluateExpression } from "../hooks/useEvaluation";

const CalculateResultContext = createContext();
const CalculateResultDispatchContext = createContext();

export const useCalculateResult = () => useContext(CalculateResultContext);
export const useCalculateResultDispatch = () =>
  useContext(CalculateResultDispatchContext);

const reducer = (data, action) => {
  switch (action.type) {
    case "AC":
      return "";
    case "RESULT":
      return evaluateExpression(action.expression);
  }
};

export const CalculateResultProvider = ({ children }) => {
  const [result, dispatch] = useReducer(reducer, "");

  return (
    <CalculateResultContext.Provider value={result}>
      <CalculateResultDispatchContext.Provider value={dispatch}>
        {children}
      </CalculateResultDispatchContext.Provider>
    </CalculateResultContext.Provider>
  );
};
