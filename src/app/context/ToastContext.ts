'use client';
import { createContext, useContext } from 'react';

export const ToastContext = createContext<any>({} as any);

export const useToast = () => {
  const { addToast } = useContext(ToastContext);

  return {
    success: (message: string) => addToast(message, 'success'),
    error: (message: string) => addToast(message, 'error'),
  };
};
