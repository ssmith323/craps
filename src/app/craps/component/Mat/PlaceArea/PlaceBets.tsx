import { PLACE_BETS_TYPE } from '@/app/craps/bets'
import { useCrapsContext } from '@/app/craps/context/CrapsBetsContext'
import { FC } from 'react'
import { Chip } from '../../../../common/Chip'
import { Droppable } from '../../../../common/DragAndDrop/Droppable'
import { useUserContext } from '../../../context/UserContext'

interface NumberProps {
  number: PLACE_BETS_TYPE
  isPoint: boolean
}
export const PlaceBet: FC<NumberProps> = ({ number, isPoint }) => {
  const { setMoney } = useUserContext()
  const { bets } = useCrapsContext()
  const removeBet = () => {
    bets[`setPlace${number}`](null)
    setMoney((money) => money + (bets[`place${number}`] ?? 0))
  }

  return (
    <div className="flex flex-col  text-white items-center h-full">
      <div className="border border-white h-4 w-full"></div>
      <div className="relative border border-white text-lg py-4 w-full text-center">
        {number}
        {isPoint && (
          <div className="absolute top-0 left-0 bg-white border rounded-full text-gray-800">
            On
          </div>
        )}
      </div>
      <Droppable id={`setPlace${number}`}>
        <div className="relative border border-white h-4 w-full">
          <Chip bet={bets[`place${number}`]} removeBet={removeBet} />
        </div>
      </Droppable>
    </div>
  )
}
