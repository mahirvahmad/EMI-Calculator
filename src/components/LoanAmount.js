const LoanAmount = (props) => {
  function onChange(event) {
    props.setRangeValue(event.target.value);
  }

  return (
    <div className="main-container">
      <div className="amount-container">
        <label htmlFor="amount">Amount you need:</label>
        <input type="text" value={`₹ ${props.rangeValue}`} />
      </div>
      <input
        type="range"
        id="range"
        step="1000"
        min="1000"
        max="500000"
        onChange={onChange}
      />
      <div className="lbl-amount">
        <label htmlFor="range" className="lbl-amt">
          ₹1000
        </label>
        <label htmlFor="range" className="lbl-amt">
          ₹5 Lakh
        </label>
      </div>
    </div>
  );
};

export default LoanAmount;
