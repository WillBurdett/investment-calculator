export default function UserInput({ values, handleValueChange }) {
  function handleChange(attribute, value) {
    handleValueChange(
      attribute,
      value === "" ? "" : parseInt(value)
    );
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={values.initialInvestment}
            onChange={(event) => handleChange('initialInvestment', event.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={values.annualInvestment}
            onChange={(event) => handleChange('annualInvestment', event.target.value)}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={values.expectedReturn}
            onChange={(event) => handleChange('expectedReturn', event.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={values.duration}
            onChange={(event) => handleChange('duration', event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
