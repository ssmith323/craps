'use client'
import { Dispatch, SetStateAction, createContext } from 'react'

interface IUser {
  money: number
  setMoney: Dispatch<SetStateAction<number>>
}

export const UserContext = createContext<IUser>({} as IUser)
