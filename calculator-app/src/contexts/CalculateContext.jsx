import { createContext, useContext, useReducer } from "react"

export const CalculateContext = createContext();
export const CalculateDispatchContext = createContext();

//추상화
export const useCalculate = () => useContext(CalculateContext);
export const useCalculateDispatch = () => useContext(CalculateDispatchContext);

// App.jsx에서 <CalculateProvider> 로 사용
export const CalculateProvider = ({ childern }) => {

    const [data, dispatch] = useReducer(reducer, '');

    return (
        <CalculateContext.Provider value={data}>
            <CalculateDispatchContext.Provider value={dispatch}>
                {childern}
            </CalculateDispatchContext.Provider>
        </CalculateContext.Provider>
    )
}

const reducer = (data, action) => {

    switch (action.type) {
        case 'INPUT':
            return data + action.data;

        case 'REMOVE':
            if (data.length === 1) {
                return '';
            } else {
                return data.substing(0, data.length-1);
            }
        
        case 'AC':
            return 0;
            
        case 'RESULT':
            const resultData = action;
            return resultData;
    }
}