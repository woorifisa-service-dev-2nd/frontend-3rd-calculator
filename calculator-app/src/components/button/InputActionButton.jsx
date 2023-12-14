import React from 'react'
import { useCalculateDispatch } from '../../contexts/CalculateContext'

const InputActionButton = ({children, action}) => {
  const dispatch = useCalculateDispatch();
  
  const buttonHandler = () => {
    dispatch(action)
  }
  
  return (
    <button className="bg-blue-200 hover:bg-blue-300" onClick={buttonHandler}>
      {children}
    </button>
  )
}

export default InputActionButton