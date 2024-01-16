import { Hardway } from "./Hardway";

export const Hardways = () => {
  return (
    <div className="border border-white p-1 m-2 flex flex-col">
      <h3>Hardways</h3>
      <div className="flex space-x-1">
        <Hardway hardway={4} />
        <Hardway hardway={10} />
      </div>
      <div className="flex space-x-1">
        <Hardway hardway={6} />
        <Hardway hardway={8} />
      </div>
    </div>
  );
};
