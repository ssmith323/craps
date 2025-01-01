import { FC, useContext, useState } from "react";
import { Button } from "../reusable/Button";
import { UserContext } from "@/app/context/UserContext";

const HARDWAYS = [4, 6, 8, 10];

export const AllHardwaysButton: FC = () => {
  const { money, setMoney, bets } = useContext(UserContext);
  const [bet, setBet] = useState<string | null>();

  const placeBet = () => {
    const num = parseInt(bet ?? "0");
    if (money >= HARDWAYS.length * num) {
      HARDWAYS.forEach((hardway) =>
        (bets as any)[`setHard${hardway}`](
          (field: number) => (field ?? 0) + num
        )
      );
      setMoney((money) => money - HARDWAYS.length * num);
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
      <Button onClick={placeBet}>All hardways</Button>
    </div>
  );
};
