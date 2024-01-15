import { FC, useState } from "react";
import { GameContext, GameState } from "./GameContext";
import { Game } from "../component/Game";
import { HistoryProvider } from "./HistoryProvider";

export const GameProvider: FC = () => {
  const [die1, setDie1] = useState(3);
  const [die2, setDie2] = useState(3);
  const [state, setState] = useState(GameState.INIT);
  const [point, setPoint] = useState<number | null>(null);

  return (
    <HistoryProvider>
      <GameContext.Provider
        value={{
          die1,
          die2,
          setDie1,
          setDie2,
          state,
          setState,
          point,
          setPoint,
        }}
      >
        <Game />
      </GameContext.Provider>
    </HistoryProvider>
  );
};
