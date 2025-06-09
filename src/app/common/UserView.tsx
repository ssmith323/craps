import { useUserContext } from '../craps/context/UserContext'

export const UserView = () => {
  const { money } = useUserContext()
  return (
    <div className="fixed bottom-0 right-0 left-0 flex items-start">
      <span>Player</span>
      <span>Money: {money}</span>
    </div>
  )
}
