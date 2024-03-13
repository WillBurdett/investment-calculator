import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";

function App() {
  const [values, setValues] = useState({
    initialInvestment : '0',
    annualInvestment : '0',
    expectedReturn : '0',
    duration : '0',
  })

  function handleValueChange(attribute, value){
      setValues((prevValues) => {
        return {
          ...prevValues,
          [attribute]: value,
        };
      });
  }
  return (
    <>
      <Header />
      <UserInput values={values} handleValueChange={handleValueChange}/>
    </>
  );
}

export default App;
