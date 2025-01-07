import { ComponentPropsWithoutRef, FC, useId } from 'react'

interface InputProps extends ComponentPropsWithoutRef<'input'> {}

export const Input: FC<InputProps> = ({ children, ...props }) => {
  const id = useId()
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={id} className="text-gray-300">
        {children}
      </label>
      <input id={id} className="text-black rounded-xl p-1" {...props} />
    </div>
  )
}
