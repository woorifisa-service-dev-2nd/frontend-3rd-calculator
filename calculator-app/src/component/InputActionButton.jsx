import React from 'react'

const InputActionButton = ({children}) => {
  return (
    <button className="bg-blue-200 hover:bg-blue-300">
      {children}
    </button>
  )
}

export default InputActionButton