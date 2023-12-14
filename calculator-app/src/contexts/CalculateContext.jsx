import { createContext, useContext, useReducer } from "react";

export const CalculateContext = createContext();
export const CalculateDispatchContext = createContext();

//추상화
export const useCalculate = () => useContext(CalculateContext);
export const useCalculateDispatch = () => useContext(CalculateDispatchContext);

const reducer = (data, action) => {
  switch (action.type) {
    case "INPUT":
      if (data === "" && action.data === ".") {
        return "0.";
      }
      return data + action.data;

    case "REMOVE":
      if (data.length > 0) {
        return data.slice(0, data.length - 1);
      }
      return "";

    case "AC":
      return "";

    case "HISTORY":
        return action.data;
  }
};

// App.jsx에서 <CalculateProvider> 로 사용
export const CalculateProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, "");

  return (
    <CalculateContext.Provider value={data}>
      <CalculateDispatchContext.Provider value={dispatch}>
        {children}
      </CalculateDispatchContext.Provider>
    </CalculateContext.Provider>
  );
};
