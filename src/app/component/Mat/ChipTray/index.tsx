import { useContext } from 'react';
import { Chip, IChip } from './Chip';
import { UserContext } from '@/app/context/UserContext';

interface ChipTrayProps {}

const TRAY: IChip[] = [
  { color: 'white', value: 1, textColor: 'black' },
  { color: 'red', value: 5 },
  { color: 'green', value: 25 },
  { color: 'blue', value: 100 },
  { color: 'black', value: 500 },
];

export const ChipTray = ({}: ChipTrayProps) => {
  const { money } = useContext(UserContext);
  return (
    <div className="space-x-2">
      {TRAY.filter(({ value }) => value <= money).map((chip) => (
        <Chip key={chip.value} chip={chip} />
      ))}
    </div>
  );
};
