import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultsTable from "./components/ResultsTable";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [values, setValues] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 1,
  });

  function handleValueChange(attribute, value) {
    setValues((prevValues) => {
      return {
        ...prevValues,
        [attribute]: value,
      };
    });
  }

  const results = calculateInvestmentResults({ ...values });

  return (
    <>
      <Header />
      <UserInput values={values} handleValueChange={handleValueChange} />
      {values.duration < 1 ? (
        <p className="center">Duration must be more than 0</p>
      ) : (
        <ResultsTable results={results} />
      )}
    </>
  );
}

export default App;
