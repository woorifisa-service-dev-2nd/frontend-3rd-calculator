import React from 'react'

const CalculateResultItem = ({ history, onClick }) => {

  return (
    <div onClick={() => onClick(history)} className="text-xs bg-gray-100 hover:bg-gray-300 p-2 m-2">{history.expression} = {history.result}</div>

  )
}

export default CalculateResultItem