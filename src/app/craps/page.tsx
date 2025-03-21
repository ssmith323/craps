'use client'
import ProtectedRoute from '../common/ProtectedRoute'
import { CrapsBetsProvider } from './context/CrapsBetsProvider'
import { GameProvider } from './context/GameProvider'

// eslint-disable-next-line space-before-function-paren
export default function CrapsTable() {
  return (
    <ProtectedRoute>
      <CrapsBetsProvider>
        <GameProvider />
      </CrapsBetsProvider>
    </ProtectedRoute>
  )
}
