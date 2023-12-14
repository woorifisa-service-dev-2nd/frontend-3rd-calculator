import { createContext, useContext, useReducer } from "react"
import { useCalculate } from './CalculateContext';

const CalculateResultContext = createContext();
const CalculateResultDispatchContext = createContext();

export const useCalculateResult = () => useContext(CalculateResultContext);
export const useCalculateResultDispatch = () => useContext(CalculateResultDispatchContext);

const reducer = (data, action) => {
  switch(action.type) {
    case "RESULT":
      return; // 계산 결과 input 창에 보여주기
  }
}

export const CalculateResultProvider = ({ children }) => {
  const [result, dispatch] = useReducer(reducer, '');

  return (
      <CalculateResultContext.Provider value={result}>
          <CalculateResultDispatchContext.Provider value={dispatch}>
              {children}
          </CalculateResultDispatchContext.Provider>
      </CalculateResultContext.Provider>
  )
}