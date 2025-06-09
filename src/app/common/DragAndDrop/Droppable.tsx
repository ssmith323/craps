import React, { FC, PropsWithChildren } from 'react'
import { useDroppable } from '@dnd-kit/core'

interface DroppableProps {
  id: string
}

export const Droppable: FC<PropsWithChildren<DroppableProps>> = ({
  id,
  children,
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  })
  const style = {
    opacity: isOver ? 0.5 : 1,
  }

  return (
    <div ref={setNodeRef} className="w-full" style={style}>
      {children}
    </div>
  )
}
