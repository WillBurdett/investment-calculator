import { formatter } from "../util/investment";

export default function RowFormatter({ values }) {
  return (
    <tr>
      {/* Year number */}
      <td>{values.year}</td> 
      
      {/* Total investment value */}
      <td>{formatter.format(values.valueEndOfYear)}</td>

      {/* Annual interest earned */}
      <td>{formatter.format(values.interest)}</td>

      {/* Lifetime interest earned */}
      <td>{formatter.format(values.valueEndOfYear - values.totalInvestment)}</td>

      {/* Lifetime cash invested */}
      <td>{formatter.format(values.totalInvestment)}</td>
    </tr>
  );
}
