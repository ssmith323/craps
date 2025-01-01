import React from "react";
import { useDroppable } from "@dnd-kit/core";

export const Droppable = ({ id, children }: { id: string; children: any }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });
  const style = {
    opacity: isOver ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} className="w-full" style={style}>
      {children}
    </div>
  );
};
