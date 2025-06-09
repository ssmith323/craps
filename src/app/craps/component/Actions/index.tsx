import { FC } from 'react'
import { AllHardwaysButton } from './AllHardwaysButton'
import { RollButton } from './RollButton'
import { AllPlaceBetsButton } from './AllPlaceBetsButton'
import { History } from '../History'

export const Actions: FC = () => {
  return (
    <div className="flex flex-col space-y-1 p-4">
      <div className="flex flex-col space-y-1">
        <h3>Bulk bets</h3>
        <div className="flex space-x-2">
          <AllHardwaysButton />
          <AllPlaceBetsButton />
        </div>
      </div>
      <RollButton />
      <History />
    </div>
  )
}
