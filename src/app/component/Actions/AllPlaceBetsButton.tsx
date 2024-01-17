import { FC, useContext, useState } from "react";
import { Button } from "../Button";
import { UserContext } from "@/app/context/UserContext";
import { GameContext } from "@/app/context/GameContext";

const PLACE_NUMBERS = [4, 5, 6, 8, 9, 10];

export const AllPlaceBetsButton: FC = () => {
  const { money, setMoney, bets } = useContext(UserContext);
  const { point } = useContext(GameContext);
  const [bet, setBet] = useState<string | null>();

  const placeBet = () => {
    const num = parseInt(bet ?? "0");
    if (num > 0 && money >= PLACE_NUMBERS.length * num) {
      PLACE_NUMBERS.forEach((place) => {
        if (place !== point) {
          let num2 = num;
          if (place === 6 || place === 8) {
            const reminder = num % 6;
            num2 += 6 - reminder;
          }
          (bets as any)[`setPlace${place}`](
            (field: number) => (field ?? 0) + num2
          );
        }
      });
      setMoney((money) => money - PLACE_NUMBERS.length * num);
      setBet("");
    } else {
      console.error("Not enough money to place the bet");
    }
  };
  return (
    <div className="flex flex-col space-y-1">
      <input
        className="text-black"
        onChange={(event) => setBet(event.currentTarget.value)}
        type="number"
        value={bet ?? ""}
      />
      <Button onClick={placeBet}>All place bets</Button>
    </div>
  );
};
