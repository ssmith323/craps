import clsx from 'clsx'
import { Card, Suit, SuitIcon } from './card'

interface HandProps {
  cards: Card[]
  isDealer?: boolean
}
export const Hand = ({ cards, isDealer }: HandProps) => {
  return (
    <div
      className={clsx(
        'flex gap-1',
        isDealer && 'last:bg-red-500 last:text-red-500',
      )}
    >
      {cards.map(({ suit, value }) => (
        <span
          key={`${suit}-${value}`}
          className={clsx(
            '!bg-white p-1 rounded-lg',
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
