import { FC, useContext } from 'react';
import { GameContext } from '../context/GameContext';
import { OneDie } from './die/OneDice';
import { TwoDie } from './die/TwoDice';
import { ThreeDie } from './die/ThreeDice';
import { FourDie } from './die/FourDice';
import { FiveDie } from './die/FiveDice';
import { SixDie } from './die/SixDice';

interface DiceProps {
  num: number;
}

const Dice: FC<DiceProps> = ({ num }) => {
  switch (num) {
    case 1:
      return <OneDie />;
    case 2:
      return <TwoDie />;
    case 3:
      return <ThreeDie />;
    case 4:
      return <FourDie />;
    case 5:
      return <FiveDie />;
    case 6:
      return <SixDie />;
    default:
      return <div className="w-[98px] h-[98px] bg-gray-50 animate-pulse"></div>;
  }
};

export const Dices = () => {
  const { die1, die2 } = useContext(GameContext);

  return (
    <div className="absolute right-2 bottom-2 flex justify-around">
      <Dice num={die1} /> <Dice num={die2} />
    </div>
  );
};
