'use client'
import { FC, ReactNode, useState } from 'react'
import { UserContext } from './UserContext'

interface UserProviderProps {
  children: ReactNode
}

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [money, setMoney] = useState(-1)

  return (
    <UserContext.Provider
      value={{
        money,
        setMoney,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
