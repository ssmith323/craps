import { FC, PropsWithChildren, useState } from 'react'
import { HistoryContext, IRoll } from './HistoryContext'

export const HistoryProvider: FC<PropsWithChildren> = ({ children }) => {
  const [rolls, setRolls] = useState<IRoll[]>([])

  const addRoll = (roll: IRoll) => setRolls((rolls) => [...rolls, roll])

  return (
    <HistoryContext.Provider value={{ rolls, addRoll }}>
      {children}
    </HistoryContext.Provider>
  )
}
