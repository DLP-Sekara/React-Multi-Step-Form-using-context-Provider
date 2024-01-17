import "./App.css";
import { MultiStepProvider } from "./component/MultiStepContext/MultiStepContext";
import HorizontalLinearAlternativeLabelStepper from "./component/Stepper/Stepper";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MultiStepProvider>
          <div className="Container">
            <HorizontalLinearAlternativeLabelStepper />
          </div>
        </MultiStepProvider>
      </header>
    </div>
  );
}

export default App;
