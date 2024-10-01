import { describe, it } from "jsr:@std/testing/bdd";
import { assertEquals } from "jsr:@std/assert";
import {
  createDeck,
  getCardRank,
  getComparisonCardValue,
  type Card,
} from "./core.ts";

describe("createDeck", () => {
  const deck = createDeck();
  it("return 52 cards", () => {
    assertEquals(deck.length, 52);
  });
});

describe("getCardRank", () => {
  const tests: [Card, number][] = [
    [{ value: "3", suit: "DIAMOND" }, 1],
    [{ value: "3", suit: "CLUB" }, 2],
    [{ value: "3", suit: "HEART" }, 3],
    [{ value: "3", suit: "SPADE" }, 4],
    [{ value: "4", suit: "DIAMOND" }, 5],
    [{ value: "4", suit: "CLUB" }, 6],
    [{ value: "4", suit: "HEART" }, 7],
    [{ value: "2", suit: "SPADE" }, 52],
  ];

  tests.forEach(([card, expectedValue]) => {
    const result = getCardRank(card);
    assertEquals(result, expectedValue);
  });
});

describe("compareCards", () => {
  const tests: [Card, Card, number][] = [
    [{ value: "3", suit: "CLUB" }, { value: "3", suit: "DIAMOND" }, 1],
    [{ value: "3", suit: "HEART" }, { value: "3", suit: "DIAMOND" }, 2],
    [{ value: "3", suit: "SPADE" }, { value: "3", suit: "DIAMOND" }, 3],
    [{ value: "4", suit: "CLUB" }, { value: "3", suit: "DIAMOND" }, 5],
  ];

  it("Comparison cards are higher", () => {
    tests.forEach(([baseCard, comparisonCard, expectedValue]) => {
      const result = getComparisonCardValue(baseCard, comparisonCard);
      assertEquals(result, expectedValue);
    });
  });
});
