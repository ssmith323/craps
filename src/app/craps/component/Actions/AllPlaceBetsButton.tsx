import { FC, useContext, useState } from 'react'
import { Button } from '../../../common/Button'
import { UserContext } from '@/app/craps/context/UserContext'
import { GameContext } from '@/app/craps/GameContext'
import { PLACE_NUMBERS } from '@/app/craps/bets'
import { useToast } from '@/app/common/ToastContext'
import { CrapsContext } from '../../context/CrapsBetsContext'
import { Input } from '@/app/common/Input'

export const AllPlaceBetsButton: FC = () => {
  const toast = useToast()
  const { money, setMoney } = useContext(UserContext)
  const { bets } = useContext(CrapsContext)
  const { point } = useContext(GameContext)
  const [bet, setBet] = useState<string | null>()

  const placeBet = () => {
    const num = parseInt(bet ?? '0')
    if (num > 0 && money >= PLACE_NUMBERS.length * num) {
      PLACE_NUMBERS.forEach((place) => {
        if (place !== point) {
          let num2 = num
          if (place === 6 || place === 8) {
            const reminder = num % 6
            num2 += 6 - reminder
          }
          bets[`setPlace${place}`]((b: number | null) => (b ?? 0) + num2)
        }
      })
      setMoney((money) => money - PLACE_NUMBERS.length * num)
      setBet('')
    } else {
      toast.error('Not enough money to place the bet')
    }
  }
  return (
    <div className="flex flex-col space-y-1">
      <Input
        onChange={(event) => setBet(event.currentTarget.value)}
        type="number"
        value={bet ?? ''}
      />
      <Button onClick={placeBet}>All place bets</Button>
    </div>
  )
}
