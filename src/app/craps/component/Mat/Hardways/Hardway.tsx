import { UserContext } from '@/app/craps/context/UserContext'
import { FC, useContext } from 'react'
import { Chip } from '../../Chip'
import { Droppable } from '../DragAndDrop/Droppable'
import { CrapsContext } from '@/app/craps/context/CrapsBetsContext'

interface HardwayProps {
  hardway: number
}

export const Hardway: FC<HardwayProps> = ({ hardway }) => {
  const { setMoney } = useContext(UserContext)
  const { bets } = useContext(CrapsContext)

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
