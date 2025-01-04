'use client'
import { GameProvider } from './context/GameProvider'
import { ToastProvider } from './context/ToastProvider'
import { UserProvider } from './context/UserProvider'

export const Home = () => {
  return (
    <ToastProvider>
      <UserProvider>
        <GameProvider />
      </UserProvider>
    </ToastProvider>
  )
}

export default Home
