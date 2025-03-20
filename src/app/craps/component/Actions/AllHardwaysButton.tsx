import { FC, useContext, useState } from 'react'
import { Button } from '../../../common/Button'
import { UserContext } from '@/app/craps/context/UserContext'
import { HARDWAYS_NUMBERS } from '@/app/craps/bets'
import { useToast } from '@/app/common/ToastContext'

export const AllHardwaysButton: FC = () => {
  const toast = useToast()
  const { money, setMoney, bets } = useContext(UserContext)
  const [bet, setBet] = useState<string | null>()

  const placeBet = () => {
    const num = parseInt(bet ?? '0')
    if (money >= HARDWAYS_NUMBERS.length * num) {
      HARDWAYS_NUMBERS.forEach((hardway) =>
        bets[`setHard${hardway}`]((field: number | null) => (field ?? 0) + num),
      )
      setMoney((money) => money - HARDWAYS_NUMBERS.length * num)
      setBet('')
    } else {
      toast.error('Not enough money to place the bet')
    }
  }
  return (
    <div className="flex flex-col space-y-1">
      <input
        className="text-black rounded-xl p-1"
        onChange={(event) => setBet(event.currentTarget.value)}
        type="number"
        value={bet ?? ''}
      />
      <Button onClick={placeBet}>All hardways</Button>
    </div>
  )
}
