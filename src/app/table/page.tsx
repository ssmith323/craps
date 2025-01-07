'use client'
import ProtectedRoute from '../component/ProtectedRoute'
import { GameProvider } from '../context/GameProvider'

// eslint-disable-next-line space-before-function-paren
export default function Table() {
  return (
    <ProtectedRoute>
      <GameProvider />
    </ProtectedRoute>
  )
}
