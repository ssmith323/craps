'use client'
import ProtectedRoute from '../common/ProtectedRoute'
import { BlackjacProvider } from './context/BlackjackProvider'
import { Table } from './component/Table'
import { UserView } from '../common/UserView'

export default function BlackjackTable() {
  return (
    <ProtectedRoute>
      <BlackjacProvider>
        <Table />
        <UserView />
      </BlackjacProvider>
    </ProtectedRoute>
  )
}
