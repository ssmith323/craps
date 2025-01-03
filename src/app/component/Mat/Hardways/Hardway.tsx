import { UserContext } from '@/app/context/UserContext';
import { FC, useContext, useState } from 'react';
import { Chip } from '../../Chip';
import { Button } from '../../reusable/Button';
import { Droppable } from '../DragAndDrop/Droppable';

interface HardwayProps {
  hardway: number;
}

export const Hardway: FC<HardwayProps> = ({ hardway }) => {
  const { setMoney, bets } = useContext(UserContext);

  const removeBet = () => {
    (bets as any)[`setHard${hardway}`](null);
    setMoney((money) => money + ((bets as any)[`hard${hardway}`] ?? 0));
    // setBet("");
  };

  return (
    <Droppable id={`setHard${hardway}`}>
      <div className="relative flex flex-col m-2 p-1 border border-white space-y-1 grow items-center">
        <div className="text-lg p-4">{hardway}</div>
        <Chip bet={(bets as any)[`hard${hardway}`]} removeBet={removeBet} />
      </div>
    </Droppable>
  );
};
