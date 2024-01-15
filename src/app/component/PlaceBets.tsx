import { FC, useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
interface NumberProps {
  number: number; //"4" | "5" | "6" | "8" | "9" | "10";
  isPoint: boolean;
}
export const PlaceBet: FC<NumberProps> = ({ number, isPoint }) => {
  const [bet, setBet] = useState<string | null>();
  const { bets, setMoney, money } = useContext(UserContext);

  const placeBet = () => {
    const num = parseInt(bet ?? "0");
    if (money >= num) {
      (bets as any)[`setPlace${number}`](
        (field: number | null) => (field ?? 0) + num
      );
      setMoney((money) => money - num);
      setBet("");
    } else {
      console.error("Not enough money to place the bet");
    }
  };

  const removeBet = () => {
    (bets as any)[`setPlace${number}`](null);
    setMoney((money) => money + ((bets as any)[`place${number}`] ?? 0));
    setBet("");
  };
  return (
    <div className="relative flex flex-col border border-white text-white justify-between items-center p-3">
      <div>{number}</div>
      {isPoint && (
        <div className="absolute top-0 left-0 bg-white border rounded-full text-gray-800">
          On
        </div>
      )}
      <input
        className="text-black w-10"
        onChange={(event) => setBet(event.currentTarget.value)}
        type="number"
        value={bet ?? ""}
      />
      <button onClick={placeBet}>Bet</button>
      {(bets as any)[`place${number}`] &&
        (bets as any)[`place${number}`] > 0 && (
          <button
            className="absolute top-0 right-0 rounded-full w-8 h-8 bg-red-700 border border-gray-800 text-center"
            onClick={removeBet}
          >
            {(bets as any)[`place${number}`]}
          </button>
        )}
    </div>
  );
};
