import { FC } from 'react'

interface ChipProps {
  bet: number | null
  removeBet?: () => void
}

export const Chip: FC<ChipProps> = ({ bet, removeBet }) => {
  return (
    bet &&
    bet > 0 && (
      <button
        className="absolute top-0 right-0 rounded-full w-8 h-8 bg-red-700 border border-gray-800 text-center"
        onClick={removeBet}
      >
        {bet}
      </button>
    )
  )
}
