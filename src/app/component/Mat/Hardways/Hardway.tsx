import { UserContext } from "@/app/context/UserContext";
import { FC, useContext, useState } from "react";
import { Chip } from "../../Chip";
import { Button } from "../../Button";
import { Droppable } from "../DragAndDrop/Droppable";

interface HardwayProps {
  hardway: number;
}

export const Hardway: FC<HardwayProps> = ({ hardway }) => {
  const { money, setMoney, bets } = useContext(UserContext);
  // const [bet, setBet] = useState<string | null>();

  // const placeBet = () => {
  //   const num = parseInt(bet ?? "0");
  //   if (money >= num) {
  //     (bets as any)[`setHard${hardway}`]((field: number) => (field ?? 0) + num);
  //     setMoney((money) => money - num);
  //     setBet("");
  //   } else {
  //     console.error("Not enough money to place the bet");
  //   }
  // };

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
