import clsx from 'clsx';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  index: number;
}

export const Toast = ({ message, type, index }: ToastProps) => {
  return (
    <div
      className={clsx(
        'fixed right-2 p-4 rounded-xl',
        type === 'success'
          ? 'bg-green-300 text-green-800'
          : 'bg-red-300 text-red-800',
      )}
      style={{ bottom: `${10 + 75 * index}px` }}
    >
      {message}
    </div>
  );
};
