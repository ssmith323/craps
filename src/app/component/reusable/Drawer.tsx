import clsx from 'clsx';
import { ReactElement } from 'react';

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children: ReactElement<any>;
}

export const Drawer = ({ open, onClose, children }: DrawerProps) => {
  return (
    <div
      className={clsx(
        'fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-50',
        {
          hidden: !open,
        },
      )}
      onClick={onClose}
    >
      <div
        className={clsx(
          'fixed top-0 left-0 w-96 h-full bg-white text-black shadow-lg',
          {
            'translate-x-0': open,
            '-translate-x-full': !open,
          },
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
