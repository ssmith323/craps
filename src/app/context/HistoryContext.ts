'use client'
import { createContext } from 'react'

export interface IRoll {
  shooter: number
  roll: number
  bet: number
  winnings: number
  losing: number
}

interface IHistory {
  rolls: IRoll[]
  addRoll: (roll: IRoll) => void
}

export const HistoryContext = createContext<IHistory>({} as IHistory)
