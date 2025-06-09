'use client'
import { Dispatch, SetStateAction, createContext, useContext } from 'react'

interface IUser {
  money: number
  setMoney: Dispatch<SetStateAction<number>>
}

export const UserContext = createContext<IUser>({} as IUser)

export const useUserContext = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider')
  }
  return context
}
