import clsx from 'clsx'
import { Card, Suit, SuitIcon } from './card'

interface HandProps {
  cards: Card[]
  isDealer?: boolean
  gameState: 'init' | 'player-playing' | 'dealer-playing' | 'gameover'
}
export const Hand = ({ cards, isDealer, gameState }: HandProps) => {
  return (
    <div className="flex gap-1">
      {cards.map(({ suit, value }) => (
        <span
          key={`${suit}-${value}`}
          className={clsx(
            'bg-white p-1 rounded-lg',
            isDealer &&
              !['dealer-playing', 'gameover'].includes(gameState) &&
              'first:bg-blue-500 first:text-blue-500',
            suit === Suit.Diamonds || suit === Suit.Hearts
              ? 'text-red-500'
              : 'text-black',
          )}
        >
          {SuitIcon[suit]} : {value}
        </span>
      ))}
    </div>
  )
}
