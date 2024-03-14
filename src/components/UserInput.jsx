export default function UserInput({ values, handleValueChange }) {
  function handleInitialInvestment(event) {
    handleValueChange(
      "initialInvestment",
      event.target.value === "" ? "" : parseInt(event.target.value)
    );
  }

  function handleAnnualInvestment(event) {
    handleValueChange(
      "annualInvestment",
      event.target.value === "" ? "" : parseInt(event.target.value)
    );
  }

  function handleExpectedReturn(event) {
    handleValueChange(
      "expectedReturn",
      event.target.value === "" ? "" : parseInt(event.target.value)
    );
  }

  function handleDuration(event) {
    handleValueChange(
      "duration",
      event.target.value === "" ? "" : parseInt(event.target.value)
    );
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <form>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={values.initialInvestment}
            onChange={handleInitialInvestment}
          />
        </form>
        <form>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={values.annualInvestment}
            onChange={handleAnnualInvestment}
          />
        </form>
      </div>

      <br />

      <div className="input-group">
        <form>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={values.expectedReturn}
            onChange={handleExpectedReturn}
          />
        </form>
        <form>
          <label>Duration</label>
          <input
            type="number"
            required
            value={values.duration}
            onChange={handleDuration}
          />
        </form>
      </div>
    </div>
  );
}
