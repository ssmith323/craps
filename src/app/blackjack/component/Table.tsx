'use client'
import { Button } from '@/app/common/Button'
import { useBlackjackContext } from '../context/BlackjackContext'
import { Hand } from './hand'
import { useToast } from '@/app/common/ToastContext'
import { DndContext } from '@dnd-kit/core'
import { ChipTray } from '@/app/common/ChipTray'
import { Droppable } from '@/app/common/DragAndDrop/Droppable'
import { Chip } from '@/app/common/Chip'
import { useUserContext } from '@/app/craps/context/UserContext'

export const Table = () => {
  const {
    bet,
    setBet,
    stand,
    deal,
    hit,
    playerScore,
    dealerScore,
    dealerHand,
    playerHand,
    deck,
    gameState,
  } = useBlackjackContext()
  const toast = useToast()
  const { money, setMoney } = useUserContext()

  const removeBet = () => {
    setBet(null)
    setMoney((money) => money + (bet ?? 0))
  }

  const handleDrag = (evt: any) => {
    const num = parseInt(evt.active.id ?? '0')
    if (money >= num) {
      try {
        setBet((b) => (b ?? 0) + num)
        setMoney((money) => money - num)
        toast.success('Nice bet!')
      } catch (error) {
        toast.error('Not valid bet')
      }
    } else {
      toast.error('Not enough money to place the bet')
    }
  }

  return (
    <DndContext onDragEnd={handleDrag}>
      <div className="bg-green-900 border-2 p-4 rounded-xl relative flex flex-col items-center gap-4">
        <Hand cards={dealerHand} gameState={gameState} isDealer />
        <Hand cards={playerHand} gameState={gameState} />
        <Droppable id="bet">
          <div className="relative border border-white h-4 w-full">
            <Chip bet={bet ?? 0} removeBet={removeBet} />
          </div>
        </Droppable>
        {playerScore > 0 && <div>Player score {playerScore}</div>}
        {dealerScore > 0 && <div>Dealer score {dealerScore}</div>}
        {gameState === 'init' && <Button onClick={deal}>Deal</Button>}
        {gameState === 'gameover' && <Button onClick={deal}>Play again</Button>}

        {gameState === 'player-playing' && <Button onClick={hit}>Hit</Button>}
        {gameState === 'player-playing' && (
          <Button onClick={stand}>Stand</Button>
        )}
        {(gameState === 'init' || gameState === 'gameover') && <ChipTray />}
        <div className="text-white">Deck left: {deck.cards.length}</div>
      </div>
    </DndContext>
  )
}
