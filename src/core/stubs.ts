import type { CardCombo } from "./combo-validators.ts";

export const comboStubs = {
  FLUSH_SPADE_K: [
    { value: "K", suit: "SPADE" },
    { value: "J", suit: "SPADE" },
    { value: "3", suit: "SPADE" },
    { value: "4", suit: "SPADE" },
    { value: "8", suit: "SPADE" },
  ],
  FLUSH_SPADE_2: [
    { value: "2", suit: "SPADE" },
    { value: "K", suit: "SPADE" },
    { value: "3", suit: "SPADE" },
    { value: "4", suit: "SPADE" },
    { value: "8", suit: "SPADE" },
  ],
  FLUSH_HEART_2: [
    { value: "2", suit: "HEART" },
    { value: "A", suit: "HEART" },
    { value: "K", suit: "HEART" },
    { value: "10", suit: "HEART" },
    { value: "7", suit: "HEART" },
  ],
  FLUSH_DIAMOND_Q: [
    { value: "Q", suit: "DIAMOND" },
    { value: "J", suit: "DIAMOND" },
    { value: "9", suit: "DIAMOND" },
    { value: "6", suit: "DIAMOND" },
    { value: "4", suit: "DIAMOND" },
  ],
  FLUSH_CLUB_K: [
    { value: "K", suit: "CLUB" },
    { value: "Q", suit: "CLUB" },
    { value: "8", suit: "CLUB" },
    { value: "5", suit: "CLUB" },
    { value: "3", suit: "CLUB" },
  ],
  STRAIGHT_3_7: [
    { value: "3", suit: "HEART" },
    { value: "4", suit: "CLUB" },
    { value: "5", suit: "DIAMOND" },
    { value: "6", suit: "SPADE" },
    { value: "7", suit: "SPADE" },
  ],
  STRAIGHT_10_A: [
    { value: "10", suit: "HEART" },
    { value: "J", suit: "CLUB" },
    { value: "Q", suit: "DIAMOND" },
    { value: "K", suit: "SPADE" },
    { value: "A", suit: "SPADE" },
  ],
  STRAIGHT_5_9: [
    { value: "5", suit: "CLUB" },
    { value: "6", suit: "HEART" },
    { value: "7", suit: "DIAMOND" },
    { value: "8", suit: "CLUB" },
    { value: "9", suit: "SPADE" },
  ],
  STRAIGHT_7_J: [
    { value: "7", suit: "DIAMOND" },
    { value: "8", suit: "SPADE" },
    { value: "9", suit: "HEART" },
    { value: "10", suit: "CLUB" },
    { value: "J", suit: "DIAMOND" },
  ],
  FULL_HOUSE_J_8: [
    { value: "J", suit: "HEART" },
    { value: "J", suit: "SPADE" },
    { value: "J", suit: "DIAMOND" },
    { value: "8", suit: "DIAMOND" },
    { value: "8", suit: "SPADE" },
  ],
  FULL_HOUSE_K_Q: [
    { value: "K", suit: "HEART" },
    { value: "K", suit: "SPADE" },
    { value: "K", suit: "DIAMOND" },
    { value: "Q", suit: "CLUB" },
    { value: "Q", suit: "SPADE" },
  ],
  FULL_HOUSE_A_2: [
    { value: "A", suit: "HEART" },
    { value: "A", suit: "SPADE" },
    { value: "A", suit: "DIAMOND" },
    { value: "2", suit: "CLUB" },
    { value: "2", suit: "SPADE" },
  ],
  FULL_HOUSE_10_4: [
    { value: "10", suit: "HEART" },
    { value: "10", suit: "SPADE" },
    { value: "10", suit: "DIAMOND" },
    { value: "4", suit: "CLUB" },
    { value: "4", suit: "SPADE" },
  ],
  FOUR_OF_A_KIND_J: [
    { value: "J", suit: "HEART" },
    { value: "J", suit: "SPADE" },
    { value: "J", suit: "DIAMOND" },
    { value: "J", suit: "CLUB" },
    { value: "8", suit: "SPADE" },
  ],
  FOUR_OF_A_KIND_K: [
    { value: "K", suit: "HEART" },
    { value: "K", suit: "SPADE" },
    { value: "K", suit: "DIAMOND" },
    { value: "K", suit: "CLUB" },
    { value: "2", suit: "SPADE" },
  ],
  FOUR_OF_A_KIND_Q: [
    { value: "Q", suit: "HEART" },
    { value: "Q", suit: "SPADE" },
    { value: "Q", suit: "DIAMOND" },
    { value: "Q", suit: "CLUB" },
    { value: "5", suit: "SPADE" },
  ],
  FOUR_OF_A_KIND_A: [
    { value: "A", suit: "HEART" },
    { value: "A", suit: "SPADE" },
    { value: "A", suit: "DIAMOND" },
    { value: "A", suit: "CLUB" },
    { value: "3", suit: "SPADE" },
  ],
  STRAIGHT_FLUSH_SPADE_3_7: [
    { value: "3", suit: "SPADE" },
    { value: "4", suit: "SPADE" },
    { value: "5", suit: "SPADE" },
    { value: "6", suit: "SPADE" },
    { value: "7", suit: "SPADE" },
  ],
  STRAIGHT_FLUSH_HEART_6_10: [
    { value: "6", suit: "HEART" },
    { value: "7", suit: "HEART" },
    { value: "8", suit: "HEART" },
    { value: "9", suit: "HEART" },
    { value: "10", suit: "HEART" },
  ],
  STRAIGHT_FLUSH_DIAMOND_9_K: [
    { value: "9", suit: "DIAMOND" },
    { value: "10", suit: "DIAMOND" },
    { value: "J", suit: "DIAMOND" },
    { value: "Q", suit: "DIAMOND" },
    { value: "K", suit: "DIAMOND" },
  ],
  STRAIGHT_FLUSH_CLUB_4_8: [
    { value: "4", suit: "CLUB" },
    { value: "5", suit: "CLUB" },
    { value: "6", suit: "CLUB" },
    { value: "7", suit: "CLUB" },
    { value: "8", suit: "CLUB" },
  ],
} satisfies Record<string, CardCombo>;
