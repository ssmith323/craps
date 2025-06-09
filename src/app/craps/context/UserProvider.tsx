'use client'
import { FC, PropsWithChildren, useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
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
