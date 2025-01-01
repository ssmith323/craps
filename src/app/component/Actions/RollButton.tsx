import { GameContext, GameState } from "@/app/context/GameContext";
import { FC, useContext } from "react";
import { Button } from "../reusable/Button";

const getDiceRoll = () => {
  return Math.ceil(Math.random() * 6);
};

export const RollButton: FC = () => {
  const { die1, die2, setDie1, setDie2, state, setState } =
    useContext(GameContext);

  const roll = () => {
    setState(GameState.ROLLING);
    setDie1(7);
    setDie2(7);

    const time1 = Math.ceil(Math.random() * 1000);
    const time2 = Math.ceil(Math.random() * 1000);
    setTimeout(() => {
      setDie1(getDiceRoll());
      setState(die1 < 7 && die2 < 7 ? GameState.PAYOUT : GameState.ROLLING);
    }, time1);
    setTimeout(() => {
      setDie2(getDiceRoll());
      setState(die1 < 7 && die2 < 7 ? GameState.PAYOUT : GameState.ROLLING);
    }, time2);
  };
  return (
    <Button onClick={roll} disabled={state === GameState.ROLLING}>
      Roll
    </Button>
  );
};
