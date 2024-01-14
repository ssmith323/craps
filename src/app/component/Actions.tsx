import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const getDiceRoll = () => {
  return Math.ceil(Math.random() * 6);
};

export const Actions = () => {
  const { setDie1, setDie2 } = useContext(GameContext);

  const roll = () => {
    setDie1(7);
    setDie2(7);

    const time1 = Math.ceil(Math.random() * 1000);
    const time2 = Math.ceil(Math.random() * 1000);
    setTimeout(() => setDie1(getDiceRoll()), time1);
    setTimeout(() => setDie2(getDiceRoll()), time2);
    console.log("dfsf");
  };
  return (
    <div>
      <button onClick={roll}>Roll</button>
    </div>
  );
};
