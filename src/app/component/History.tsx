import { useContext } from "react";
import { HistoryContext } from "../context/HistoryContext";

const cellStyle = "px-2";
export const History = () => {
  const { rolls } = useContext(HistoryContext);
  return (
    <div>
      <table className="p-3 m-2 h-44 overflow-y-scroll">
        <thead>
          <tr>
            <th className={cellStyle}>Shooter</th>
            <th className={cellStyle}>Roll</th>
            <th className={cellStyle}>Bet</th>
            <th className={cellStyle}>Winnings</th>
            <th className={cellStyle}>Losings</th>
          </tr>
        </thead>
        <tbody className="">
          {rolls.map((roll, i) => (
            <tr key={i} className="pb-1">
              <td className={cellStyle}>{roll.shooter}</td>
              <td className={cellStyle}>{roll.roll}</td>
              <td className={cellStyle}>{roll.bet}</td>
              <td className={cellStyle}>{roll.winnings}</td>
              <td className={cellStyle}>{roll.losing}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
