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
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
