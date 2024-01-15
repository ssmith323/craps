import { useContext, useState } from "react";
import { FIELD_BETS } from "../context/bets";
import { UserContext } from "../context/UserContext";

export const FieldBets = () => {
  const [bet, setBet] = useState<string | null>();
  const {
    bets: { setField, field },
    setMoney,
    money,
  } = useContext(UserContext);

  const placeBet = () => {
    const num = parseInt(bet ?? "0");
    if (money > num) {
      setField((field) => (field ?? 0) + num);
      setMoney((money) => money - num);
      setBet("");
    } else {
      console.error("Not enough money to place the bet");
    }
  };

  const removeBet = () => {
    setField(null);
    setMoney((money) => money + (field ?? 0));
    setBet("");
  };

  return (
    <div className="relative flex flex-col items-center m-2 border border-white">
      <h3 className="text-bold">Field Bets</h3>
      <div>
        {FIELD_BETS.map((num) => (
          <span key={num}>{num},</span>
        ))}
      </div>

      <input
        className="text-black"
        onChange={(event) => setBet(event.currentTarget.value)}
        type="number"
        value={bet ?? ""}
      />
      <button onClick={placeBet}>Place bet</button>
      {field && field > 0 && (
        <button
          className="absolute top-0 right-0 rounded-full w-8 h-8 bg-red-700 border border-gray-800 text-center"
          onClick={removeBet}
        >
          {field}
        </button>
      )}
    </div>
  );
};
