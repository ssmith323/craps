import { FC, PropsWithChildren, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { UserContext } from '../craps/context/UserContext'

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
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
