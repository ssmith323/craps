import { Actions } from './Actions'
import { Mat } from './Mat'
import { useCheckWinners } from '../context/useCheckWinners'
import { useContext, useEffect, useState } from 'react'
import { GameContext, GameState } from '../GameContext'
import { UserView } from '../../common/UserView'
import { usePayout } from '../context/usePayout'
import { useHistory } from '../context/useHistory'
import { useToast } from '../../common/ToastContext'

export const Game = () => {
  const check = useCheckWinners()
  const payout = usePayout()
  const toast = useToast()
  const { addHistory, getTotalBet, totalDamage } = useHistory()
  const { state, setState, die1, die2 } = useContext(GameContext)

  const [shooter, setShooter] = useState(0)
  useEffect(() => {
    if (state === GameState.PAYOUT && die1 < 7 && die2 < 7) {
      toast.info(`Rolled ${die1 + die2}`)
      const totalBet = getTotalBet()
      const results = check()
      const { winnings, losings } = payout(results)

      addHistory(shooter, die1 + die2, totalBet, winnings, losings)
      if (results.crapOut) {
        const shooterDamage = totalDamage(shooter) - losings + winnings
        if (shooterDamage > 0) {
          toast.success(`You won ${shooterDamage}`)
        } else {
          toast.error(`You lost ${Math.abs(shooterDamage)}`)
        }
        setShooter((shooter) => ++shooter)
      }
      setState(GameState.INIT)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, check, setState])

  return (
    <main className="grid grid-cols-3">
      <div className="col-span-3 p-4">
        <Mat />
      </div>
      <Actions />
      <UserView />
    </main>
  )
}
