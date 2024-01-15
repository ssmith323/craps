import { useContext } from "react";
import { HistoryContext } from "../context/HistoryContext";

export const History = () => {
  const { rolls } = useContext(HistoryContext);
  return (
    <div>
      <table className="">
        <thead>
          <tr>
            <th>Roller</th>
            <th>Bet</th>
            <th>Winnings</th>
            <th>Losings</th>
          </tr>
        </thead>
        <tbody>
          {rolls.map((roll, i) => (
            <tr key={i}>
              <td>{roll.roller}</td>
              <td>{roll.bet}</td>
              <td>{roll.winnings}</td>
              <td>{roll.losing}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
