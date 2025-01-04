import clsx from 'clsx'
import { useContext } from 'react'
import { FIELD_BETS } from '../../context/bets'
import { UserContext } from '../../context/UserContext'
import { Droppable } from './DragAndDrop/Droppable'
import { Chip } from '../Chip'

export const FieldBets = () => {
  const {
    bets: { setField, field },
    setMoney,
  } = useContext(UserContext)

  const removeBet = () => {
    setField(null)
    setMoney((money) => money + (field ?? 0))
  }

  return (
    <Droppable id="setField">
      <div className="relative flex flex-col items-center border border-white space-y-1">
        <h3 className="text-bold">Field Bets</h3>
        <div className="gap-4 flex">
          {FIELD_BETS.map((num) => (
            <div
              className={clsx(
                'w-8 h-8 align-middle text-center',
                num === 2 || num === 12
                  ? 'mt-4 border border-white rounded-full'
                  : '',
              )}
              key={num}
            >
              {num}
            </div>
          ))}
        </div>
        <p>2 and 12 pay 2:1</p>

        <Chip bet={field} removeBet={removeBet} />
      </div>
    </Droppable>
  )
}
