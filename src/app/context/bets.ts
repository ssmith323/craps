export type PLACE_BETS_TYPE = 4 | 5 | 6 | 8 | 9 | 10
export const PLACE_NUMBERS: PLACE_BETS_TYPE[] = [4, 5, 6, 8, 9, 10]
export const FIELD_BETS = [2, 3, 4, 9, 10, 11, 12]

export type HARDWAYS_NUMBERS_TYPE = 4 | 6 | 8 | 10
export const HARDWAYS_NUMBERS = [4, 6, 8, 10]
export const HARDWAYS_BETS = new Map<HARDWAYS_NUMBERS_TYPE, string>([
  [4, 'four'],
  [6, 'six'],
  [8, 'eight'],
  [10, 'ten'],
])
