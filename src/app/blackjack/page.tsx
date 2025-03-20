'use client'
import { useEffect, useState } from 'react'
import ProtectedRoute from '../common/ProtectedRoute'
import Deck from './component/deck'
import { Button } from '../common/Button'
import { Hand } from './component/hand'
import { Card, CardNumberValue } from './component/card'
import { useToast } from '../common/ToastContext'

export default function BlackjackTable() {
  const toast = useToast()

  const [deck, setDeck] = useState(new Deck())
  const [gameState, setGameState] = useState<'init' | 'playing' | 'gameover'>(
    'init',
  )
  const [playerHand, setPlayerHand] = useState<Card[]>([])
  const [dealerHand, setDealerHand] = useState<Card[]>([])

  useEffect(() => {
    if (playerHand.length > 0) {
      const playerScore = playerHand.reduce(
        (acc, card) => acc + CardNumberValue[card.value]!,
        0,
      )
      if (playerScore > 21) {
        setGameState('gameover')
        toast.error('You busted!')
      }
    }
  }, [playerHand])

  const deal = () => {
    const playerCard1 = deck.drawCard()
    const dealerCard1 = deck.drawCard()
    const playerCard2 = deck.drawCard()
    const dealerCard2 = deck.drawCard()

    setPlayerHand([playerCard1, playerCard2])
    setDealerHand([dealerCard1, dealerCard2])
    setGameState('playing')
  }

  const hit = () => {
    const card = deck.drawCard()

    setPlayerHand((hand) => [...hand, card])
  }

  return (
    <ProtectedRoute>
      <div className="bg-green-900 border-2 p-4 rounded-xl relative flex flex-col items-center gap-4">
        <Hand cards={dealerHand} isDealer />
        <Hand cards={playerHand} />
        {gameState === 'init' && <Button onClick={deal}>Deal</Button>}
        {gameState === 'gameover' && <Button onClick={deal}>Play again</Button>}

        {gameState === 'playing' && <Button onClick={hit}>Hit</Button>}
      </div>
    </ProtectedRoute>
  )
}
