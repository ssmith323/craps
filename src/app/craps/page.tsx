'use client'
import ProtectedRoute from '../common/ProtectedRoute'
import { GameProvider } from './context/GameProvider'

// eslint-disable-next-line space-before-function-paren
export default function CrapsTable() {
  return (
    <ProtectedRoute>
      <GameProvider />
    </ProtectedRoute>
  )
}
