import React, { useState } from "react";
import { useCalculate } from "../../contexts/CalculateContext";

const CalculateArea = () => {
  const expression = useCalculate();

  return (
    <div>
      <input
        className="inputField border border-gray-400 squared-md p-2 mb-1.5 w-64 text-right"
        type="text"
        value={expression}
        readOnly={true}
        placeholder="0"
      />
    </div>
  );
};

export default CalculateArea;
