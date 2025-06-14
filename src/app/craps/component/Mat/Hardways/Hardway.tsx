import { useCrapsContext } from '@/app/craps/context/CrapsBetsContext'
import { useUserContext } from '@/app/craps/context/UserContext'
import { FC } from 'react'
import { Chip } from '../../../../common/Chip'
import { Droppable } from '../../../../common/DragAndDrop/Droppable'

interface HardwayProps {
  hardway: number
}

export const Hardway: FC<HardwayProps> = ({ hardway }) => {
  const { setMoney } = useUserContext()
  const { bets } = useCrapsContext()

  const removeBet = () => {
    ;(bets as any)[`setHard${hardway}`](null)
    setMoney((money) => money + ((bets as any)[`hard${hardway}`] ?? 0))
  }

  return (
    <Droppable id={`setHard${hardway}`}>
      <div className="relative flex flex-col m-2 p-1 border border-white space-y-1 grow items-center">
        <div className="text-lg p-4">{hardway}</div>
        <Chip bet={(bets as any)[`hard${hardway}`]} removeBet={removeBet} />
      </div>
    </Droppable>
  )
}
