import { FC, ReactElement, useEffect, useState } from 'react';
import { ToastContext } from './ToastContext';
import { Toast } from '../component/reusable/Toast';

interface ToastProviderProps {
  children: ReactElement<any>;
}

interface IToast {
  message: string;
  type: 'success' | 'error';
}

export const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
  const [toast, setToast] = useState<IToast[]>([]);

  useEffect(() => {
    if (toast.length > 0) {
      setTimeout(() => {
        setToast((toast) => toast.slice(1));
      }, 3000);
    }
  }, [toast, setToast]);

  const addToast = (message: string, type: 'success' | 'error') => {
    setToast((toast) => [...toast, { message, type }]);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {toast.map((t, i) => (
        <Toast key={i} message={t.message} type={t.type} index={i} />
      ))}
      {children}
    </ToastContext.Provider>
  );
};
