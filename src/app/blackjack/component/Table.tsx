'use client'
import { Button } from '@/app/common/Button'
import { BlackjackContext } from '../context/BlackjackContext'
import { Hand } from './hand'
import { useContext, useEffect, useState } from 'react'
import { BLACKJACK_GAME_STATE } from '../types'
import { Card, CardNumberValue } from './card'
import Deck from './deck'
import { UserContext } from '@/app/craps/context/UserContext'
import { useToast } from '@/app/common/ToastContext'
import { DndContext } from '@dnd-kit/core'
import { ChipTray } from '@/app/common/ChipTray'
import { Droppable } from '@/app/common/DragAndDrop/Droppable'
import { Chip } from '@/app/common/Chip'

export const Table = () => {
  const { bet, setBet } = useContext(BlackjackContext)
  const toast = useToast()
  const { money, setMoney } = useContext(UserContext)

  const [deck, setDeck] = useState(new Deck())
  const [gameState, setGameState] = useState<BLACKJACK_GAME_STATE>('init')
  const [playerHand, setPlayerHand] = useState<Card[]>([])
  const [dealerHand, setDealerHand] = useState<Card[]>([])
  const [playerScore, setPlayerScore] = useState<number>(0)
  const [dealerScore, setDealerScore] = useState<number>(0)

  useEffect(() => {
    if (gameState === 'gameover' && deck.cards.length < 10) {
      setDeck(new Deck())
      toast.info('Deck shuffled, new game started!')
    }
  }, [gameState])

  useEffect(() => {
    if (['dealer-playing'].includes(gameState)) {
      const dealerScore = dealerHand.reduce(
        (acc, card) => acc + CardNumberValue[card.value]!,
        0,
      )
      setDealerScore(dealerScore)
      if (dealerScore > 21) {
        setGameState('gameover')
        setMoney((money) => money + (bet ?? 0))
        toast.success('Dealer busted!')
      } else if (dealerScore >= 17) {
        if (dealerScore > playerScore) {
          setGameState('gameover')
          setBet(null)
          toast.error('Dealer wins!')
        } else if (dealerScore < playerScore) {
          setGameState('gameover')
          setMoney((money) => money + (bet ?? 0))
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
        setBet(null)
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

  const removeBet = () => {
    setBet(null)
    setMoney((money) => money + (bet ?? 0))
  }

  const handleDrag = (evt: any) => {
    const num = parseInt(evt.active.id ?? '0')
    if (money >= num) {
      try {
        setBet((b) => (b ?? 0) + num)
        setMoney((money) => money - num)
        toast.success('Nice bet!')
      } catch (error) {
        toast.error('Not valid bet')
      }
    } else {
      toast.error('Not enough money to place the bet')
    }
  }

  return (
    <DndContext onDragEnd={handleDrag}>
      <div className="bg-green-900 border-2 p-4 rounded-xl relative flex flex-col items-center gap-4">
        <Hand cards={dealerHand} gameState={gameState} isDealer />
        <Hand cards={playerHand} gameState={gameState} />
        <Droppable id="bet">
          <div className="relative border border-white h-4 w-full">
            <Chip bet={bet ?? 0} removeBet={removeBet} />
          </div>
        </Droppable>
        {playerScore > 0 && <div>Player score {playerScore}</div>}
        {dealerScore > 0 && <div>Dealer score {dealerScore}</div>}
        {gameState === 'init' && <Button onClick={deal}>Deal</Button>}
        {gameState === 'gameover' && <Button onClick={deal}>Play again</Button>}

        {gameState === 'player-playing' && <Button onClick={hit}>Hit</Button>}
        {gameState === 'player-playing' && (
          <Button onClick={stand}>Stand</Button>
        )}
        {(gameState === 'init' || gameState === 'gameover') && <ChipTray />}
        <div className="text-white">Deck left: {deck.cards.length}</div>
      </div>
    </DndContext>
  )
}
