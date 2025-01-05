'use client'
import { GameProvider } from './context/GameProvider'
import { ToastProvider } from './context/ToastProvider'
import { UserProvider } from './context/UserProvider'

// eslint-disable-next-line space-before-function-paren
export default function Home() {
  return (
    <ToastProvider>
      <UserProvider>
        <GameProvider />
      </UserProvider>
    </ToastProvider>
  )
}
