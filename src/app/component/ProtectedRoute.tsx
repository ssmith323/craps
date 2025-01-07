import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { UserContext } from '../context/UserContext'

const ProtectedRoute = ({ children }: any) => {
  const { money } = useContext(UserContext)
  const router = useRouter()

  if (money < 0) {
    // Redirect to the login page if not authenticated
    router.push('/')
    return null
  }

  return children
}

export default ProtectedRoute
