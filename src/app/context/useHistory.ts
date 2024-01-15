import { useContext } from "react";
import { UserContext } from "./UserContext";
import { HistoryContext } from "./HistoryContext";

export const useHistory = () => {
  const { bets } = useContext(UserContext);
  const { rolls, addRoll } = useContext(HistoryContext);
  const getTotalBet = (): number => {
    return Object.values(bets)
      .filter((val) => typeof val === "number")
      .reduce((prev, curr) => prev + curr, 0);
  };

  const totalDamage = (roller: number): number => {
    return rolls
      .filter((roll) => roll.roller === roller)
      .map((roll) => roll.winnings - roll.losing)
      .reduce((prev, curr) => prev + curr, 0);
  };

  const addHistory = (
    roller: number,
    bet: number,
    winnings: number,
    losing: number
  ) => {
    addRoll({ roller, bet, winnings, losing });
  };

  return { addHistory, getTotalBet, totalDamage };
};
