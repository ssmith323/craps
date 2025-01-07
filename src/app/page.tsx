'use client'
import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'
import { UserContext } from './context/UserContext'
import { Button } from './component/reusable/Button'
import { Input } from './component/reusable/Input'
import { useToast } from './context/ToastContext'

// eslint-disable-next-line space-before-function-paren
export default function Home() {
  const router = useRouter()
  const toast = useToast()
  const { setMoney } = useContext(UserContext)
  const [initalMoney, setInitalMoney] = useState<number | undefined>()

  const startGame = () => {
    if (!initalMoney) {
      toast.error('Please enter a valid amount of money')
      return
    }
    setMoney(initalMoney)
    router.push('/table')
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
          value={initalMoney}
        >
          Starting Money
        </Input>
        <Button onClick={startGame}>Start</Button>
      </div>
    </div>
  )
}
