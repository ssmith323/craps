import { FC, ReactElement, useState } from "react";
import { HistoryContext, IRoll } from "./HistoryContext";

interface HistoryProviderProps {
  children: ReactElement;
}

export const HistoryProvider: FC<HistoryProviderProps> = ({ children }) => {
  const [rolls, setRolls] = useState<IRoll[]>([]);

  const addRoll = (roll: IRoll) => setRolls((rolls) => [...rolls, roll]);

  return (
    <HistoryContext.Provider value={{ rolls, addRoll }}>
      {children}
    </HistoryContext.Provider>
  );
};
