export const TwoDie = () => {
  return (
    <svg width="100" height="100" className="bg-white">
      <rect
        x="1"
        y="1"
        width="100"
        height="100"
        stroke="black"
        fill="transparent"
        strokeWidth="2"
      />
      <circle
        cx="25"
        cy="25"
        r="10"
        stroke="black"
        fill="black"
        strokeWidth="2"
      />
      <circle
        cx="75"
        cy="75"
        r="10"
        stroke="black"
        fill="black"
        strokeWidth="2"
      />
    </svg>
  );
};
