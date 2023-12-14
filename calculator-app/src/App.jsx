import NumberButton from "./components/button/NumberButton";
import OperatorButton from "./components/button/OperatorButton";
import DefaultLayout from "./layout/DefaultLayout";
import CalculateArea from "./components/ui/CalculateArea";
import CalculateButton from "./components/button/CalculateButton";
import { CalculateProvider } from "./contexts/CalculateContext";
import { CalculateResultProvider } from "./contexts/CalculateResultContext";
import CalculateResultArea from "./components/ui/CalculateResultArea";
import InputActionButton from "./components/button/InputActionButton";

function App() {
  return (
    <DefaultLayout>
      <CalculateProvider>
        <CalculateResultProvider>
          <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
            <CalculateArea />
            <CalculateResultArea />
            <div className="grid grid-cols-4 gap-2 w-64 h-48">
              <InputActionButton action={{ type: "AC" }}>AC</InputActionButton>

              <OperatorButton>%</OperatorButton>
              <OperatorButton>/</OperatorButton>
              <InputActionButton action={{ type: "REMOVE" }}>
                {"<"}
              </InputActionButton>

              <NumberButton>7</NumberButton>
              <NumberButton>8</NumberButton>
              <NumberButton>9</NumberButton>

              <OperatorButton>+</OperatorButton>

              <NumberButton>4</NumberButton>
              <NumberButton>5</NumberButton>
              <NumberButton>6</NumberButton>

              <OperatorButton>-</OperatorButton>

              <NumberButton>1</NumberButton>
              <NumberButton>2</NumberButton>
              <NumberButton>3</NumberButton>

              <OperatorButton>x</OperatorButton>

              {/* todo: history 버튼 구현 */}
              <OperatorButton>⏱️</OperatorButton>

              <NumberButton>0</NumberButton>

              <OperatorButton>.</OperatorButton>
              <CalculateButton>=</CalculateButton>
            </div>
          </div>
        </CalculateResultProvider>
      </CalculateProvider>
    </DefaultLayout>
  );
}

export default App;
