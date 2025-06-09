import { useToast } from '@/app/common/ToastContext'
import { useUserContext } from '@/app/craps/context/UserContext'
import { DndContext } from '@dnd-kit/core'
import { useContext } from 'react'
import { ChipTray } from '../../../common/ChipTray'
import { CrapsContext } from '../../context/CrapsBetsContext'
import { Dices } from '../Dice'
import { FieldBets } from './FieldBets'
import { Hardways } from './Hardways'
import { PassLine } from './PassLine'
import { Place } from './PlaceArea'

export const Mat = () => {
  const { money, setMoney } = useUserContext()
  const { bets } = useContext(CrapsContext)
  const toast = useToast()

  const handleDrag = (evt: any) => {
    const num = parseInt(evt.active.id ?? '0')
    if (money >= num) {
      try {
        ;(bets as any)[evt.collisions[0].id](
          (field: number) => (field ?? 0) + num,
        )
        setMoney((money) => money - num)
        toast.success('Nice bet!')
      } catch (error) {
        toast.error('Not valid bet')
      }
    } else {
      toast.error('Not enough money to place the bet')
    }
  }

  return (
    <DndContext onDragEnd={handleDrag}>
      <div className="bg-green-900 border-2 p-4 rounded-xl relative">
        <div className="grid grid-cols-3 grid-rows-3 gap-1">
          <div className="col-span-2">
            <Place />
          </div>
          <div className="col-span-2 col-start-1 row-start-2">
            <FieldBets />
          </div>
          <div className="row-span-2 col-start-3 row-start-1">
            <Hardways />
          </div>
          <div className="col-span-3 row-start-3">
            <PassLine />
          </div>
        </div>

        <ChipTray />
        <Dices />
      </div>
    </DndContext>
  )
}
