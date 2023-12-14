import React from 'react'

const OperatorButton = ({children}) => {
  return (
    <button className="bg-blue-200 hover:bg-blue-300">
      {children}
    </button>
  )
}

export default OperatorButton