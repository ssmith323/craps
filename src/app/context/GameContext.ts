/* eslint-disable no-unused-vars */
'use client'
import { Dispatch, SetStateAction, createContext } from 'react'

export enum GameState {
  INIT,
  ROLLING,
  PAYOUT,
}

interface Game {
  die1: number
  die2: number
  setDie1: Dispatch<SetStateAction<number>>
  setDie2: Dispatch<SetStateAction<number>>
  state: GameState
  setState: any
  point: number | null
  setPoint: Dispatch<SetStateAction<number | null>>
}

export const GameContext = createContext<Game>({} as Game)
