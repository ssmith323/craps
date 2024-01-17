import { Actions } from "./Actions";
import { Dices } from "./Dice";
import { Mat } from "./Mat";
import { History } from "./History";
import { useCheckWinners } from "../context/useCheckWinners";
import { useContext, useEffect, useState } from "react";
import { GameContext, GameState } from "../context/GameContext";
import { UserView } from "./UserView";
import { usePayout } from "../context/usePayout";
import { useHistory } from "../context/useHistory";

export const Game = () => {
  const check = useCheckWinners();
  const payout = usePayout();
  const { addHistory, getTotalBet, totalDamage } = useHistory();
  const { state, setState, die1, die2 } = useContext(GameContext);

  const [shooter, setShooter] = useState(0);
  useEffect(() => {
    if (state === GameState.PAYOUT && die1 < 7 && die2 < 7) {
      const totalBet = getTotalBet();
      const results = check();
      const { winnings, losings } = payout(results);
      console.log(results);
      addHistory(shooter, die1 + die2, totalBet, winnings, losings);
      if (results.crapOut) {
        alert(`Total damage: ${totalDamage(shooter) - losings + winnings}`);
        setShooter((shooter) => ++shooter);
      }
      setState(GameState.INIT);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, check, setState]);
  return (
    <main className="grid grid-cols-2 min-h-screen">
      <History />

      <div className="flex flex-col justify-between h-screen">
        <Mat />
        <Actions />
        <Dices />
      </div>
      <UserView />
    </main>
  );
};
