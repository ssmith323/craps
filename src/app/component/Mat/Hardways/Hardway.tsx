import { UserContext } from "@/app/context/UserContext";
import { FC, useContext, useState } from "react";
import { Chip } from "../../Chip";
import { Button } from "../../Button";

interface HardwayProps {
  hardway: number;
}

export const Hardway: FC<HardwayProps> = ({ hardway }) => {
  const { money, setMoney, bets } = useContext(UserContext);
  const [bet, setBet] = useState<string | null>();

  const placeBet = () => {
    const num = parseInt(bet ?? "0");
    if (money >= num) {
      (bets as any)[`setHard${hardway}`]((field: number) => (field ?? 0) + num);
      setMoney((money) => money - num);
      setBet("");
    } else {
      console.error("Not enough money to place the bet");
    }
  };

  const removeBet = () => {
    (bets as any)[`setHard${hardway}`](null);
    setMoney((money) => money + ((bets as any)[`hard${hardway}`] ?? 0));
    setBet("");
  };

  return (
    <div className="relative flex flex-col m-2 p-1 border border-white space-y-1 grow items-center">
      <div>{hardway}</div>
      <input
        className="text-black w-10"
        onChange={(event) => setBet(event.currentTarget.value)}
        type="number"
        value={bet ?? ""}
      />
      <Button onClick={placeBet}>Bet</Button>
      <Chip bet={(bets as any)[`hard${hardway}`]} removeBet={removeBet} />
    </div>
  );
};
