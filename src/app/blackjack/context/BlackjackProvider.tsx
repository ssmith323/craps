import { FC, PropsWithChildren, useState } from 'react'
import { BlackjackContext } from './BlackjackContext'

export const BlackjacProvider: FC<PropsWithChildren> = ({ children }) => {
  const [bet, setBet] = useState<number | null>(null)

  return (
    <BlackjackContext.Provider value={{ bet, setBet }}>
      {children}
    </BlackjackContext.Provider>
  )
}
