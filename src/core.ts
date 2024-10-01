const suits = ["DIAMOND", "CLUB", "HEART", "SPADE"] as const;
const value = [
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
  "2",
] as const;

export type Card = {
  suit: (typeof suits)[number];
  value: (typeof value)[number];
};

export function createDeck(): Card[] {
  return suits.flatMap((suit) => value.map((value) => ({ suit, value })));
}

/**
 * Returns the rank of a specific card, 1 being the lowest (3 of Diamond) and
 * 52 being the highest (2 of Spades).
 */
export function getCardRank(card: Card): number {
  const suitIndex = suits.indexOf(card.suit) + 1;
  const valueStep = value.indexOf(card.value) * 4;
  return valueStep + suitIndex;
}

/**
 * Compares the rank and suit of two cards and returns a numeric value representing their relative order.
 *
 * The returned value is:
 * - Positive if `baseCard` is greater than `comparisonCard`
 * - Negative if `baseCard` is less than `comparisonCard`
 * - Zero if the cards have the same rank and suit
 *
 * The comparison first looks at the value of the cards, and if the values are the same, it compares the suits.
 *
 * @param baseCard The card to compare against.
 * @param comparisonCard The card to compare to the `baseCard`.
 * @returns A number representing the relative order of the two cards.
 */
export function getComparisonCardValue(
  baseCard: Card,
  comparisonCard: Card
): number {
  return getCardRank(baseCard) - getCardRank(comparisonCard);
}
