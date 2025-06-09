import { createContext, Dispatch, SetStateAction } from 'react'

interface IBlackjack {
  bet: number | null
  setBet: Dispatch<SetStateAction<number | null>>
}

export const BlackjackContext = createContext<IBlackjack>({} as IBlackjack)

export const useBlackjackContext = () => {
  const context = createContext(BlackjackContext)
  if (!context) {
    throw new Error(
      'useBlackjackContext must be used within a BlackjackProvider',
    )
  }
  return context
}
