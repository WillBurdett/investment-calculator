import { formatter } from "../util/investment";

export default function RowFormatter({ values }) {
  let yearNumber = values.year  
  let totalInvestmentValue = formatter.format(values.valueEndOfYear); 
  let annualInterestEarned = formatter.format(values.interest); 
  let lifetimeInterestEarned = formatter.format(values.valueEndOfYear - values.totalInvestment); 
  let lifetimeIncomeInvested = formatter.format(values.totalInvestment)
  return (
    <tr>
      <td>{yearNumber}</td>
      <td>{totalInvestmentValue}</td>
      <td>{annualInterestEarned}</td>
      <td>{lifetimeInterestEarned}</td>
      <td>{lifetimeIncomeInvested}</td>
    </tr>
  );
}
