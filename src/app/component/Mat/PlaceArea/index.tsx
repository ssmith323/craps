import { useContext } from 'react'
import { GameContext } from '../../../context/GameContext'
import { PLACE_NUMBERS } from '../../../context/bets'
import { PlaceBet } from './PlaceBets'

export const Place = () => {
  const { point } = useContext(GameContext)
  return (
    <div className="h-full grid grid-cols-6 gap-0">
      {PLACE_NUMBERS.map((num) => (
        <PlaceBet key={num} number={num} isPoint={point === num} />
      ))}
    </div>
  )
}
