import { FC, ReactElement, useState } from "react";
import { UserContext } from "./UserContext";

interface UserProviderProps {
  children: ReactElement;
}

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [money, setMoney] = useState(1000);
  const [fieldBet, setFieldBet] = useState<number | null>(null);
  const [passBet, setPassBet] = useState<number | null>(null);
  const [odds, setOdds] = useState<number | null>(null);
  const [place4, setPlace4] = useState<number | null>(null);
  const [place5, setPlace5] = useState<number | null>(null);
  const [place6, setPlace6] = useState<number | null>(null);
  const [place8, setPlace8] = useState<number | null>(null);
  const [place9, setPlace9] = useState<number | null>(null);
  const [place10, setPlace10] = useState<number | null>(null);
  const [hard4, setHard4] = useState<number | null>(null);
  const [hard6, setHard6] = useState<number | null>(null);
  const [hard8, setHard8] = useState<number | null>(null);
  const [hard10, setHard10] = useState<number | null>(null);

  return (
    <UserContext.Provider
      value={{
        money,
        setMoney,
        bets: {
          field: fieldBet,
          setField: setFieldBet,
          pass: passBet,
          setPass: setPassBet,
          setOdds,
          odds,
          place6,
          setPlace6,
          place10,
          place4,
          place5,
          place8,
          place9,
          setPlace10,
          setPlace4,
          setPlace5,
          setPlace8,
          setPlace9,
          hard4,
          hard6,
          hard8,
          hard10,
          setHard4,
          setHard6,
          setHard8,
          setHard10,
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
