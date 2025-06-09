import { createContext, Dispatch, SetStateAction, useContext } from 'react'
import { BLACKJACK_GAME_STATE } from '../types'
import { Card } from '../component/card'
import Deck from '../component/deck'

interface IBlackjack {
  bet: number | null
  setBet: Dispatch<SetStateAction<number | null>>
  stand: () => void
  hit: () => void
  deal: () => void
  dealerScore: number
  playerScore: number
  gameState: BLACKJACK_GAME_STATE
  dealerHand: Card[]
  playerHand: Card[]
  deck: Deck
}

export const BlackjackContext = createContext<IBlackjack>({} as IBlackjack)

export const useBlackjackContext = () => {
  const context = useContext(BlackjackContext)
  if (!context) {
    throw new Error(
      'useBlackjackContext must be used within a BlackjackProvider',
    )
  }
  return context
}
