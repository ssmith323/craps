import { FC, PropsWithChildren } from 'react'
import { useRouter } from 'next/navigation'
import { useUserContext } from '../craps/context/UserContext'

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { money } = useUserContext()
  const router = useRouter()

  if (money < 0) {
    // Redirect to the login page if not authenticated
    router.push('/')
    return null
  }

  return children
}

export default ProtectedRoute
