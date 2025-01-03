import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { GameContext } from '../../context/GameContext';
import { Chip } from '../Chip';
import { Button } from '../reusable/Button';
import { Droppable } from './DragAndDrop/Droppable';

export const PassLine = () => {
  const [bet, setBet] = useState<string | null>();
  const [oddsBet, setOddsBets] = useState<string | null>();
  const {
    bets: { pass, setPass, odds, setOdds },
    setMoney,
    money,
  } = useContext(UserContext);
  const { point } = useContext(GameContext);

  // const placeBet = () => {
  //   const num = parseInt(bet ?? "0");
  //   if (money > num) {
  //     setPass((pass) => (pass ?? 0) + num);
  //     setMoney((money) => money - num);
  //     setBet("");
  //   } else {
  //     console.error("Not enough money to place the bet");
  //   }
  // };

  // const addOdds = () => {
  //   const num = parseInt(oddsBet ?? "0");
  //   if (money > num) {
  //     setOdds((odds) => (odds ?? 0) + num);
  //     setMoney((money) => money - num);
  //     setOddsBets("");
  //   } else {
  //     console.error("Not enough money to place the bet");
  //   }
  // };

  return (
    <Droppable id={!point ? 'setPass' : 'setOdds'}>
      <div className="relative flex flex-col items-center border border-white h-12">
        <h3 className="text-bold">Pass Line</h3>

        <Chip bet={pass} />
        <div className="relative h-1">
          <Chip bet={odds} />
        </div>
      </div>
    </Droppable>
  );
};
