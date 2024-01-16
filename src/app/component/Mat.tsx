import { FieldBets } from "./FieldBets";
import { PassLine } from "./PassLine";
import { Place } from "./Place";
import { Hardways } from "./Hardways";

export const Mat = () => {
  return (
    <div className="bg-green-900 border-2 p-4">
      <Place />
      <div className="flex">
        <FieldBets />
        <Hardways />
      </div>
      <PassLine />
    </div>
  );
};
