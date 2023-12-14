import React from 'react';
import NumberButton from './component/ui/NumberButton';
import OperatorButton from './component/ui/OperatorButton';
import DefaultLayout from './layout/DefaultLayout';
import CalculateArea from './component/ui/CalculateArea';
import InputActionButton from './component/InputActionButton';

function App() {


  return (


    <DefaultLayout>

  
      <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <CalculateArea />
        <div className="grid grid-cols-4 gap-2 w-48">

          <InputActionButton>AC</InputActionButton>

          <OperatorButton>%</OperatorButton>
          <OperatorButton>/</OperatorButton>
          <InputActionButton>{'<'}</InputActionButton>

          <NumberButton>7</NumberButton>
          <NumberButton>8</NumberButton>
          <NumberButton>9</NumberButton>

          <OperatorButton onAction={{type:"clear"}}>+</OperatorButton>

          <NumberButton>4</NumberButton>
          <NumberButton>5</NumberButton>
          <NumberButton>6</NumberButton>

          <OperatorButton>-</OperatorButton>

          <NumberButton>1</NumberButton>
          <NumberButton>2</NumberButton>
          <NumberButton>3</NumberButton>

          <OperatorButton>x</OperatorButton>

          <OperatorButton>⏱️</OperatorButton>

          <NumberButton>0</NumberButton>

          <OperatorButton>.</OperatorButton>
          <InputActionButton>=</InputActionButton>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default App;