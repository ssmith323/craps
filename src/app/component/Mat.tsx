import { Number } from "./Number";

const NUMBERS = ["4", "5", "6", "8", "9", "10"];

export const Mat = () => {
  return (
    <div className="bg-green-900 border-2 p-4">
      <div className="flex">
        {NUMBERS.map((num) => (
          <Number key={num} number={num} />
        ))}
      </div>
      <div>Pass line</div>
    </div>
  );
};
