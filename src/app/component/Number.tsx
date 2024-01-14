import { FC } from "react";
interface NumberProps {
  number: string; //"4" | "5" | "6" | "8" | "9" | "10";
}
export const Number: FC<NumberProps> = ({ number }) => {
  return (
    <div className="flex flex-col border border-white text-white justify-between items-center p-3">
      <div>{number}</div>
      <button>bet</button>
    </div>
  );
};
