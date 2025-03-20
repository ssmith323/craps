import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const UserView = () => {
  const { money } = useContext(UserContext)
  return (
    <div className="fixed bottom-0 right-0 left-0 flex items-start">
      <span>Player</span>
      <span>Money: {money}</span>
    </div>
  )
}
