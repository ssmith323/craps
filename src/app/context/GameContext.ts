"use client";
import { createContext } from "react";

interface Game {
  die1: number;
  die2: number;
  setDie1: any;
  setDie2: any;
}

export const GameContext = createContext<Game>({} as Game);
