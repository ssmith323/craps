import { Card, Suit, CardNumber } from './card'

class Deck {
  cards: Card[]
  constructor() {
    this.cards = this.createDeck()
    this.shuffle()
  }

  createDeck(): Card[] {
    const suits = Object.values(Suit)
    const values = Object.values(CardNumber)
    const deck = []

    for (const suit of suits) {
      for (const value of values) {
        deck.push({ suit, value })
      }
    }
    return deck
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
    }
  }

  drawCard(): Card {
    if (this.cards.length > 0) {
      return this.cards.pop()!
    }
    throw new Error('No cards left in the deck')
  }
}

export default Deck
