import { createContext, useContext, useReducer } from "react";
import { evaluateExpression } from "../hooks/useEvaluation";

export const CalculateHistoryContext = createContext();
export const CalculateHistoryDispatchContext = createContext();

export const useCalculateHistory = () => useContext(CalculateHistoryContext);
export const useCalculateHistoryDispatch = () =>
  useContext(CalculateHistoryDispatchContext);

const reducer = (history, action) => {
  switch (action.type) {
    case "APPEND":
      try {
        const expression = action.expression;
        const result = evaluateExpression(expression);
        history.push({ expression, result });
      } catch (error) {
        console.error(error);
      }
      return history;
  }
};

export const CalculateHistoryProvider = ({ children }) => {
  const [history, dispatch] = useReducer(reducer, []);

  return (
    <CalculateHistoryContext.Provider value={history}>
      <CalculateHistoryDispatchContext.Provider value={dispatch}>
        {children}
      </CalculateHistoryDispatchContext.Provider>
    </CalculateHistoryContext.Provider>
  );
};
