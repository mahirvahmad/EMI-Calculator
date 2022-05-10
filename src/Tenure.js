import { useState } from "react";
import DisplayEMI from "./DisplayEMI";
import "./Tenure.css";

const Tenure = ({ rangeValue }) => {
  const [three, six, twelve, eighteen, twentyFour, thirtySix] = [
    9.25, 10, 10.5, 11, 12.5, 14,
  ];
  let [loanAmount, setLoanAmount] = useState("0.00");
  let [loanInterest, setLoanInterest] = useState("0.00");

  function threeMonths() {
    let interest = (rangeValue * three * 3) / 100;
    let principal = (Number(interest) + Number(rangeValue)) / 3;
    setLoanAmount(principal.toFixed(2));
    setLoanInterest(three);
  }
  function sixMonths() {
    let interest = (rangeValue * six * 6) / 100;
    let principal = (Number(interest) + Number(rangeValue)) / 6;
    setLoanAmount(principal.toFixed(2));
    setLoanInterest(six);
  }

  function twelveMonths() {
    let interest = (rangeValue * twelve * 12) / 100;
    let principal = (Number(interest) + Number(rangeValue)) / 12;
    setLoanAmount(principal.toFixed(2));
    setLoanInterest(twelve);
  }

  function eighteenMonths() {
    let interest = (rangeValue * eighteen * 18) / 100;
    let principal = (Number(interest) + Number(rangeValue)) / 18;
    setLoanAmount(principal.toFixed(2));
    setLoanInterest(eighteen);
  }

  function twentyFourMonths() {
    let interest = (rangeValue * twentyFour * 24) / 100;
    let principal = (Number(interest) + Number(rangeValue)) / 24;
    setLoanAmount(principal.toFixed(2));
    setLoanInterest(twentyFour);
  }

  function thirtySixMonths() {
    let interest = (rangeValue * thirtySix * 36) / 100;
    let principal = (Number(interest) + Number(rangeValue)) / 36;
    setLoanAmount(principal.toFixed(2));
    setLoanInterest(thirtySix);
  }

  return (
    <div>
      <div className="main-tenure">
        <h3>Tenure:</h3>
        <div className="is-flex">
          <h4 onClick={threeMonths}>3 months</h4>
          <h4 onClick={sixMonths}>6 months</h4>
          <h4 className="special" onClick={twelveMonths}>
            12 months
          </h4>
        </div>
        <div className="is-flex">
          <h4 onClick={eighteenMonths}>18 months</h4>
          <h4 onClick={twentyFourMonths}>24 months</h4>
          <h4 onClick={thirtySixMonths}>36 months</h4>
        </div>
      </div>
      <div className="interest is-flex">
        <h3>Interest:</h3>
        <h3 className="rate">{`${loanInterest}%`}</h3>
      </div>
      <DisplayEMI emiValue={`${Math.round(loanAmount)}.00`} />
    </div>
  );
};

export default Tenure;
