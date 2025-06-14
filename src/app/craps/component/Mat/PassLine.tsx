import { useToast } from '@/app/common/ToastContext'
import { useContext } from 'react'
import { Chip } from '../../../common/Chip'
import { Droppable } from '../../../common/DragAndDrop/Droppable'
import { useCrapsContext } from '../../context/CrapsBetsContext'
import { useUserContext } from '../../context/UserContext'
import { GameContext } from '../../GameContext'

export const PassLine = () => {
  const { setMoney } = useUserContext()
  const {
    bets: { pass, setPass, odds, setOdds },
  } = useCrapsContext()
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
