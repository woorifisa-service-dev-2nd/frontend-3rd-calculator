import React from 'react'
import { useCalculateResultDispatch } from '../../contexts/CalculateResultContext';
import { useCalculate } from '../../contexts/CalculateContext';

const CalculateButton = ({children}) => {
  const dispatch = useCalculateResultDispatch();
  const expression = useCalculate();
  
  const buttonHandler = () => {
    dispatch({type:"RESULT", expression})
  }
  
  return (
    <button className="bg-blue-200 hover:bg-blue-300" onClick={buttonHandler}>
      {children}
    </button>
  )
}

export default CalculateButton