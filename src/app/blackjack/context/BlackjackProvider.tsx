import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { BlackjackContext } from './BlackjackContext'
import { Card, CardNumberValue } from '../component/card'
import Deck from '../component/deck'
import { BLACKJACK_GAME_STATE } from '../types'
import { useToast } from '@/app/common/ToastContext'
import { useUserContext } from '@/app/craps/context/UserContext'

export const BlackjacProvider: FC<PropsWithChildren> = ({ children }) => {
  const { setMoney } = useUserContext()
  const [bet, setBet] = useState<number | null>(null)
  const [deck, setDeck] = useState(new Deck())
  const [gameState, setGameState] = useState<BLACKJACK_GAME_STATE>('init')
  const [playerHand, setPlayerHand] = useState<Card[]>([])
  const [dealerHand, setDealerHand] = useState<Card[]>([])
  const [playerScore, setPlayerScore] = useState<number>(0)
  const [dealerScore, setDealerScore] = useState<number>(0)
  const toast = useToast()

  useEffect(() => {
    if (gameState === 'gameover' && deck.cards.length < 10) {
      setDeck(new Deck())
      toast.info('Deck shuffled, new game started!')
    }
  }, [deck.cards.length, gameState, toast])

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  }, [playerHand, toast])

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
    <BlackjackContext.Provider
      value={{
        bet,
        setBet,
        deal,
        hit,
        stand,
        dealerScore,
        playerScore,
        gameState,
        dealerHand,
        playerHand,
        deck,
      }}
    >
      {children}
    </BlackjackContext.Provider>
  )
}
