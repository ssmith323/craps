import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { PLACE_BETS } from "../context/bets";
import { PlaceBet } from "./PlaceBets";

export const Place = () => {
  const { point } = useContext(GameContext);
  return (
    <div className="flex items-center justify-center">
      {PLACE_BETS.map((num) => (
        <PlaceBet key={num} number={num} isPoint={point === num} />
      ))}
    </div>
  );
};
