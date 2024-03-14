import RowFormatter from "./RowFormatter";

export default function ResultsTable({ results }) {
  return (
    <table id="result" className="center">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map(r =>{
          return <RowFormatter values={r} key={r.year}/>;
        })}
      </tbody>
    </table>
  );
}
