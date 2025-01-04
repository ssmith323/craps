import { FC } from 'react'
import { AllHardwaysButton } from './AllHardwaysButton'
import { RollButton } from './RollButton'
import { AllPlaceBetsButton } from './AllPlaceBetsButton'

export const Actions: FC = () => {
  return (
    <div className="flex flex-col space-y-1">
      <div className="flex flex-col space-y-1">
        <h3>Bulk bets</h3>
        <div className="flex space-x-2">
          <AllHardwaysButton />
          <AllPlaceBetsButton />
        </div>
      </div>
      <RollButton />
    </div>
  )
}
