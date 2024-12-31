import { FieldBets } from "./FieldBets";
import { PassLine } from "./PassLine";
import { Place } from "./PlaceArea";
import { Hardways } from "./Hardways";
import { Dices } from "../Dice";
import { ChipTray } from "./ChipTray";
import { DndContext } from "@dnd-kit/core";
import { useContext } from "react";
import { UserContext } from "@/app/context/UserContext";

export const Mat = () => {
  const { money, setMoney, bets } = useContext(UserContext);

  const handleDrag = (evt: any) => {
    const num = parseInt(evt.active.id ?? "0");
    if (money >= num) {
      try {
        (bets as any)[evt.collisions[0].id](
          (field: number) => (field ?? 0) + num
        );
        setMoney((money) => money - num);
      } catch (error) {
        console.error("Not a valid bet");
      }
    } else {
      console.error("Not enough money to place the bet");
    }
  };

  return (
    <DndContext onDragEnd={handleDrag}>
      <div className="bg-green-900 border-2 p-4 rounded-xl relative">
        <div className="grid grid-cols-3 grid-rows-3 gap-1">
          <div className="col-span-2">
            <Place />
          </div>
          <div className="col-span-2 col-start-1 row-start-2">
            <FieldBets />
          </div>
          <div className="row-span-2 col-start-3 row-start-1">
            <Hardways />
          </div>
          <div className="col-span-3 row-start-3">
            <PassLine />
          </div>
        </div>

        <ChipTray />
        <Dices />
      </div>
    </DndContext>
  );
};
