import { FC, useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { Chip } from "../../Chip";
import { Droppable } from "../DragAndDrop/Droppable";
interface NumberProps {
  number: 4 | 5 | 6 | 8 | 9 | 10;
  isPoint: boolean;
}
export const PlaceBet: FC<NumberProps> = ({ number, isPoint }) => {
  const { bets, setMoney } = useContext(UserContext);

  const removeBet = () => {
    (bets as any)[`setPlace${number}`](null);
    setMoney((money) => money + ((bets as any)[`place${number}`] ?? 0));
  };

  return (
    <Droppable id={`setPlace${number}`}>
      <div className="relative flex flex-col border border-white text-white justify-between items-center h-full">
        <div className="text-lg py-4">{number}</div>

        {isPoint && (
          <div className="absolute top-0 left-0 bg-white border rounded-full text-gray-800">
            On
          </div>
        )}
        <Chip bet={(bets as any)[`place${number}`]} removeBet={removeBet} />
      </div>
    </Droppable>
  );
};
