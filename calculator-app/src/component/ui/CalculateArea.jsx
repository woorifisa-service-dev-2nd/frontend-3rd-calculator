import React, { useState } from 'react'

const CalculateArea = () => {

  const [input, setInput] = useState(''); // 입력값 상태



  const handleChange = (event) => {
    setInput(event.target.value); // 입력값 업데이트
  };

  return (
    <div>
        <input
          className="inputField border border-gray-400 rounded-md p-2 mb-4"
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter an expression"
        />
    </div>
  )
}

export default CalculateArea