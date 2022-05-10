import LoanAmount from "./components/LoanAmount";
import Tenure from "./Tenure";
import "./MainStyle.css";
import { useState } from "react";

function App() {
  const [rangeValue, setRangeValue] = useState("1000");

  return (
    <div className="app-container">
      <h1>EMI Calculator</h1>
      <LoanAmount rangeValue={rangeValue} setRangeValue={setRangeValue} />
      <Tenure rangeValue={rangeValue} />
    </div>
  );
}

export default App;
