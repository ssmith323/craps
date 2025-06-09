import { Input } from '@/app/common/Input'
import { useToast } from '@/app/common/ToastContext'
import { HARDWAYS_NUMBERS } from '@/app/craps/bets'
import { useUserContext } from '@/app/craps/context/UserContext'
import { FC, useContext, useState } from 'react'
import { Button } from '../../../common/Button'
import { CrapsContext } from '../../context/CrapsBetsContext'

export const AllHardwaysButton: FC = () => {
  const toast = useToast()
  const { money, setMoney } = useUserContext()
  const { bets } = useContext(CrapsContext)
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
      <Input
        onChange={(event) => setBet(event.currentTarget.value)}
        type="number"
        value={bet ?? ''}
      />
      <Button onClick={placeBet}>All hardways</Button>
    </div>
  )
}
