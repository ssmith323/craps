import { useContext } from "react";
import { UserContext } from "./UserContext";
import { GameContext } from "./GameContext";
import { BetResults, IGameResults } from "./useCheckWinners";

const ODDS_PAYOUT = new Map([
  [4, 2],
  [5, 1.5],
  [6, 1.2],
  [10, 2],
  [9, 1.5],
  [8, 1.2],
]);

const PLACE_PAYOUT = new Map([
  [4, 1.8],
  [5, 1.4],
  [6, 1.16666666667],
  [10, 1.8],
  [9, 1.4],
  [8, 1.16666666667],
]);

export const usePayout = () => {
  const { bets, setMoney } = useContext(UserContext);
  const { die1, die2 } = useContext(GameContext);

  const payoutUser = (results: IGameResults) => {
    if (results.field === BetResults.PAY && bets.field != null) {
      const payout =
        die1 + die2 === 2 || die1 + die2 === 12 ? 2 * bets.field : bets.field;
      setMoney((m) => m + payout);
    } else if (results.field === BetResults.COLLECT) {
      bets.setField(null);
    }
    if (results.pass === BetResults.PAY && bets.pass != null) {
      let payout = bets.pass;
      if (results.odds && bets.odds != null) {
        payout +=
          Math.floor(ODDS_PAYOUT.get(die1 + die2)! * bets.odds) + bets.odds;
        bets.setOdds(null);
      }
      setMoney((m) => m + payout);
    } else if (results.pass === BetResults.COLLECT) {
      bets.setPass(null);
      bets.setOdds(null);
    }
    if (results.place === BetResults.PAY) {
      const payout = Math.floor(
        PLACE_PAYOUT.get(die1 + die2)! * (bets as any)[`place${die1 + die2}`]
      );
      setMoney((m) => m + payout);
    } else if (results.place === BetResults.COLLECT) {
      bets.setPlace4(null);
      bets.setPlace5(null);
      bets.setPlace6(null);
      bets.setPlace8(null);
      bets.setPlace9(null);
      bets.setPlace10(null);
    }
  };

  return payoutUser;
};
