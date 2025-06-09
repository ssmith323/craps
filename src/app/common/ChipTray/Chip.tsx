import { Draggable } from '../DragAndDrop/Draggable'

export interface IChip {
  color: string
  textColor?: string
  value: number
}

interface ChipProps {
  chip: IChip
}

export const Chip = ({ chip }: ChipProps) => {
  return (
    <Draggable id={chip.value.toString()}>
      <div
        className="rounded-full w-8 h-8 border border-gray-800 text-center"
        style={{
          backgroundColor: chip.color,
          color: chip.textColor ?? 'white',
        }}
      >
        {chip.value}
      </div>
    </Draggable>
  )
}
