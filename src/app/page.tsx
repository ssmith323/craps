'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useUserContext } from './craps/context/UserContext'
import { Button } from './common/Button'
import { Input } from './common/Input'
import { useToast } from './common/ToastContext'

export default function Home() {
  const router = useRouter()
  const toast = useToast()
  const { setMoney } = useUserContext()
  const [initalMoney, setInitalMoney] = useState<number>(0)

  const startGame = (path: string) => {
    if (!initalMoney) {
      toast.error('Please enter a valid amount of money')
      return
    }
    setMoney(initalMoney)
    router.push(path)
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center space-y-4 bg-gray-800 p-4 rounded-lg">
        <div className="text-4xl">Craps</div>
        <Input
          type="number"
          placeholder="Money"
          onChange={(event) =>
            setInitalMoney(parseInt(event.currentTarget.value, 10))
          }
          value={initalMoney ?? ''}
        >
          Starting Money
        </Input>
        <Button onClick={() => startGame('/craps')}>Go to Craps Table</Button>
        <Button onClick={() => startGame('/blackjack')}>
          Go to Blackjack Table
        </Button>
      </div>
    </div>
  )
}
