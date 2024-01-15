"use client";
import { Dispatch, SetStateAction, createContext } from "react";

interface IUserBets {
  pass: number | null;
  setPass: Dispatch<SetStateAction<number | null>>;
  field: number | null;
  setField: Dispatch<SetStateAction<number | null>>;
  odds: number | null;
  setOdds: Dispatch<SetStateAction<number | null>>;
}

interface IUser {
  money: number;
  setMoney: Dispatch<SetStateAction<number>>;
  bets: IUserBets;
}

export const UserContext = createContext<IUser>({} as IUser);
