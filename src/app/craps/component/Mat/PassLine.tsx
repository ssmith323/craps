import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { GameContext } from '../../GameContext'
import { Chip } from '../Chip'
import { Droppable } from './DragAndDrop/Droppable'
import { useToast } from '@/app/common/ToastContext'

export const PassLine = () => {
  const {
    bets: { pass, setPass, odds, setOdds },
    setMoney,
  } = useContext(UserContext)
  const { point } = useContext(GameContext)
  const toast = useToast()

  const removeBet = () => {
    if (!point) {
      setPass(null)
      setMoney((money) => money + (pass ?? 0))
    } else {
      toast.error('Cannot remove pass line bet after point is set')
    }
  }

  const removeOdds = () => {
    setOdds(null)
    setMoney((money) => money + (odds ?? 0))
  }

  return (
    <Droppable id={!point ? 'setPass' : 'setOdds'}>
      <div className="relative flex flex-col items-center border border-white h-12">
        <h3 className="text-bold">Pass Line</h3>

        <Chip bet={pass} removeBet={removeBet} />
        <div className="relative h-1">
          <Chip bet={odds} removeBet={removeOdds} />
        </div>
      </div>
    </Droppable>
  )
}
