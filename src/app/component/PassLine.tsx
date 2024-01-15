import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { GameContext } from "../context/GameContext";

export const PassLine = () => {
  const [bet, setBet] = useState<string | null>();
  const [oddsBet, setOddsBets] = useState<string | null>();
  const {
    bets: { pass, setPass, odds, setOdds },
    setMoney,
    money,
  } = useContext(UserContext);
  const { point } = useContext(GameContext);

  const placeBet = () => {
    const num = parseInt(bet ?? "0");
    if (money > num) {
      setPass((pass) => (pass ?? 0) + num);
      setMoney((money) => money - num);
      setBet("");
    } else {
      console.error("Not enough money to place the bet");
    }
  };

  const addOdds = () => {
    const num = parseInt(oddsBet ?? "0");
    if (money > num) {
      setOdds((odds) => (odds ?? 0) + num);
      setMoney((money) => money - num);
      setOddsBets("");
    } else {
      console.error("Not enough money to place the bet");
    }
  };

  return (
    <div className="relative flex flex-col items-center m-2 border border-white">
      <h3 className="text-bold">Pass Line</h3>

      {!point && (
        <>
          <input
            className="text-black"
            onChange={(event) => setBet(event.currentTarget.value)}
            type="number"
            value={bet ?? ""}
          />
          <button onClick={placeBet}>Place bet</button>
        </>
      )}
      {point && pass && (
        <>
          <input
            className="text-black"
            onChange={(event) => setOddsBets(event.currentTarget.value)}
            type="number"
            value={oddsBet ?? ""}
          />
          <button onClick={addOdds}>Add odds</button>
        </>
      )}
      {pass && pass > 0 && (
        <div className="absolute top-0 right-0 rounded-full w-8 h-8 bg-red-700 border border-gray-800 text-center">
          {pass}
        </div>
      )}
      {odds && odds > 0 && (
        <div className="absolute top-8 right-0 rounded-full w-8 h-8 bg-red-700 border border-gray-800 text-center">
          {odds}
        </div>
      )}
    </div>
  );
};
