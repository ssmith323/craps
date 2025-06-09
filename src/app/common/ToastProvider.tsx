'use client'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { ToastContext } from './ToastContext'
import { Toast } from './Toast'

export type AlertLevel = 'success' | 'error' | 'info'

interface IToast {
  message: string
  type: AlertLevel
}

export const ToastProvider: FC<PropsWithChildren> = ({ children }) => {
  const [toast, setToast] = useState<IToast[]>([])

  useEffect(() => {
    if (toast.length > 0) {
      setTimeout(() => {
        setToast((toast) => toast.slice(1))
      }, 3000)
    }
  }, [toast, setToast])

  const addToast = (message: string, type: AlertLevel) => {
    setToast((toast) => [...toast, { message, type }])
  }

  return (
    <ToastContext.Provider value={{ addToast }}>
      {toast.map((t, i) => (
        <Toast key={i} message={t.message} type={t.type} index={i} />
      ))}
      {children}
    </ToastContext.Provider>
  )
}
