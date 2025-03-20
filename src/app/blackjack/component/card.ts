export enum SuitIcon {
  'Hearts' = '♥',
  'Diamonds' = '♦',
  'Clubs' = '♣',
  'Spades' = '♠',
}

export enum CardNumberValue {
  'Two' = 2,
  'Three' = 3,
  'Four' = 4,
  'Five' = 5,
  'Six' = 6,
  'Seven' = 7,
  'Eight' = 8,
  'Nine' = 9,
  'Ten' = 10,
  'Jack' = 10,
  'Queen' = 10,
  'King' = 10,
  'Ace' = 11,
}

export enum Suit {
  'Hearts' = 'Hearts',
  'Diamonds' = 'Diamonds',
  'Clubs' = 'Clubs',
  'Spades' = 'Spades',
}

export enum CardNumber {
  'Two' = 'Two',
  'Three' = 'Three',
  'Four' = 'Four',
  'Five' = 'Five',
  'Six' = 'Six',
  'Seven' = 'Seven',
  'Eight' = 'Eight',
  'Nine' = 'Nine',
  'Ten' = 'Ten',
  'Jack' = 'Jack',
  'Queen' = 'Queen',
  'King' = 'King',
  'Ace' = 'Ace',
}
export type Card = { suit: Suit; value: CardNumber }
