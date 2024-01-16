"use client";
import { Dispatch, SetStateAction, createContext } from "react";

interface IUserBets {
  pass: number | null;
  setPass: Dispatch<SetStateAction<number | null>>;
  field: number | null;
  setField: Dispatch<SetStateAction<number | null>>;
  odds: number | null;
  setOdds: Dispatch<SetStateAction<number | null>>;
  place4: number | null;
  setPlace4: Dispatch<SetStateAction<number | null>>;
  place5: number | null;
  setPlace5: Dispatch<SetStateAction<number | null>>;
  place6: number | null;
  setPlace6: Dispatch<SetStateAction<number | null>>;
  place8: number | null;
  setPlace8: Dispatch<SetStateAction<number | null>>;
  place9: number | null;
  setPlace9: Dispatch<SetStateAction<number | null>>;
  place10: number | null;
  setPlace10: Dispatch<SetStateAction<number | null>>;
  hard4: number | null;
  setHard4: Dispatch<SetStateAction<number | null>>;
  hard6: number | null;
  setHard6: Dispatch<SetStateAction<number | null>>;
  hard8: number | null;
  setHard8: Dispatch<SetStateAction<number | null>>;
  hard10: number | null;
  setHard10: Dispatch<SetStateAction<number | null>>;
}

interface IUser {
  money: number;
  setMoney: Dispatch<SetStateAction<number>>;
  bets: IUserBets;
}

export const UserContext = createContext<IUser>({} as IUser);
