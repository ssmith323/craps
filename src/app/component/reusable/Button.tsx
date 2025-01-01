import { ComponentPropsWithoutRef, FC } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="bg-gray-200 text-gray-800 disabled:text-gray-200 border border-white rounded-sm p-1 disabled:bg-gray-800"
      {...props}
    >
      {children}
    </button>
  );
};
