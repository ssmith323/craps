import { FC } from "react";
interface NumberProps {
  number: number; //"4" | "5" | "6" | "8" | "9" | "10";
  isPoint: boolean;
}
export const PlaceBet: FC<NumberProps> = ({ number, isPoint }) => {
  return (
    <div className="relative flex flex-col border border-white text-white justify-between items-center p-3">
      <div>{number}</div>
      <button>bet</button>
      {isPoint && (
        <div className="absolute top-0 right-0 bg-white border rounded-full text-gray-800">
          On
        </div>
      )}
    </div>
  );
};
