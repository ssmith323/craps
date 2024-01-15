import { useContext } from "react";
import { PlaceBet } from "./PlaceBets";
import { GameContext } from "../context/GameContext";
import { PLACE_BETS } from "../context/bets";
import { FieldBets } from "./FieldBets";
import { PassLine } from "./PassLine";

export const Mat = () => {
  const { point } = useContext(GameContext);
  return (
    <div className="bg-green-900 border-2 p-4">
      <div className="flex items-center justify-center">
        {PLACE_BETS.map((num) => (
          <PlaceBet key={num} number={num} isPoint={point === num} />
        ))}
      </div>
      <FieldBets />
      <PassLine />
    </div>
  );
};
