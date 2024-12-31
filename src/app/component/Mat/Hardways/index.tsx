import { Hardway } from "./Hardway";

export const Hardways = () => {
  return (
    <div className="border border-white items-center p-1 h-full">
      <h3 className="text-center">Hardways</h3>
      <div className="grid grid-cols-2">
        <Hardway hardway={4} />
        <Hardway hardway={10} />
        <Hardway hardway={6} />
        <Hardway hardway={8} />
      </div>
    </div>
  );
};
