import React from 'react'
import { useCalculateDispatch } from '../contexts/CalculateContext'

const InputButton = ({text}) => {
    const dispatch = useCalculateDispatch();

    const buttonHandler = (event) => {
        dispatch({type:"INPUT", data:text});
    }

  return (
    <button onClick={buttonHandler}>{text}</button>
  )
}

export default InputButton