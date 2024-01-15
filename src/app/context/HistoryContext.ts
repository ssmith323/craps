"use client";
import { Dispatch, SetStateAction, createContext } from "react";

export interface IRoll {
  roller: number;
  bet: number;
  winnings: number;
  losing: number;
}

interface IHistory {
  rolls: IRoll[];
  addRoll: (roll: IRoll) => void;
}

export const HistoryContext = createContext<IHistory>({} as IHistory);
