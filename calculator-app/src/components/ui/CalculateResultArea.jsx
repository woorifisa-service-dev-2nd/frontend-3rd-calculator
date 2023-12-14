import React from "react";
import { useCalculateResult } from "../../contexts/CalculateResultContext";

const CalculateResultArea = () => {
  const calculateResult = useCalculateResult();

  return (
    <div>
      <input
        className="inputField border border-gray-400 squared-md p-2 mb-1.5 w-64 text-right"
        type="text"
        value={calculateResult}
        readOnly={true}
        placeholder=""
      />
    </div>
  );
};

export default CalculateResultArea;
