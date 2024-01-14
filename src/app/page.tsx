"use client";
import { useState } from "react";
import { Actions } from "./component/Actions";
import { History } from "./component/History";
import { Mat } from "./component/Mat";
import { Dices } from "./component/Dice";
import { GameContext } from "./context/GameContext";

export default function Home() {
  const [die1, setDie1] = useState(3);
  const [die2, setDie2] = useState(3);

  return (
    <GameContext.Provider value={{ die1, die2, setDie1, setDie2 }}>
      <main className="grid grid-cols-3 min-h-screen">
        <History />
        <Mat />
        <div className="flex flex-col">
          <Actions />
          <Dices />
        </div>
      </main>
    </GameContext.Provider>
  );
}
