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
  const [gameState, setGameState] = useState<
    'init' | 'player-playing' | 'dealer-playing' | 'dealer-draw' | 'gameover'
  >('init')
  const [playerHand, setPlayerHand] = useState<Card[]>([])
  const [dealerHand, setDealerHand] = useState<Card[]>([])
  const [playerScore, setPlayerScore] = useState<number>(0)
  const [dealerScore, setDealerScore] = useState<number>(0)

  useEffect(() => {
    if (['dealer-playing'].includes(gameState)) {
      const dealerScore = dealerHand.reduce(
        (acc, card) => acc + CardNumberValue[card.value]!,
        0,
      )
      setDealerScore(dealerScore)
      if (dealerScore > 21) {
        setGameState('gameover')
        toast.success('Dealer busted!')
      } else if (dealerScore >= 17) {
        if (dealerScore > playerScore) {
          setGameState('gameover')
          toast.error('Dealer wins!')
        } else if (dealerScore < playerScore) {
          setGameState('gameover')
          toast.success('Player wins!')
        } else {
          setGameState('gameover')
          toast.info('It is a tie!')
        }
      } else {
        const card = deck.drawCard()
        setDealerHand((hand) => [...hand, card])
      }
    }
  }, [dealerHand, gameState])

  useEffect(() => {
    if (playerHand.length > 0) {
      const playerScore = playerHand.reduce(
        (acc, card) => acc + CardNumberValue[card.value]!,
        0,
      )
      setPlayerScore(playerScore)
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
    setDealerScore(0)
    setPlayerHand([playerCard1, playerCard2])
    setDealerHand([dealerCard1, dealerCard2])
    setGameState('player-playing')
  }

  const hit = () => {
    const card = deck.drawCard()

    setPlayerHand((hand) => [...hand, card])
  }

  const stand = () => {
    setGameState('dealer-playing')
  }

  return (
    <ProtectedRoute>
      <div className="bg-green-900 border-2 p-4 rounded-xl relative flex flex-col items-center gap-4">
        <Hand cards={dealerHand} gameState={gameState} isDealer />
        <Hand cards={playerHand} gameState={gameState} />
        {playerScore > 0 && <div>Player score {playerScore}</div>}
        {dealerScore > 0 && <div>Dealer score {dealerScore}</div>}
        {gameState === 'init' && <Button onClick={deal}>Deal</Button>}
        {gameState === 'gameover' && <Button onClick={deal}>Play again</Button>}

        {gameState === 'player-playing' && <Button onClick={hit}>Hit</Button>}
        {gameState === 'player-playing' && (
          <Button onClick={stand}>Stand</Button>
        )}
      </div>
    </ProtectedRoute>
  )
}
