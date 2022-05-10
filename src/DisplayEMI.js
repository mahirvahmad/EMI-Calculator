import "./DisplayEMI.css";


const DisplayEMI = ({emiValue}) => {
  return (
    <div className="emi-display">
      <h1 className="emi">EMI:</h1>
      <h1 className="emi">{`₹ ${emiValue}`}</h1>
    </div>
  );
};

export default DisplayEMI;
