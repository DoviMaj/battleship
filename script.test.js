import { Ship, Gameboard } from "./script";

it("hasSunk works", () => {
  const a = Ship(2);
  expect(a.hasSunk()).toBe(false);
});

it("hitFunc works", () => {
  const a = Ship(2);
  a.hitFunc(1);
  a.hitFunc(2);
  expect(a.hasSunk()).toBe(true);
});

it("Gameboard places ships at specific cordinates", () => {
  const a = Ship(2);
  expect(Gameboard(2, 3)).toBe({});
});

// Gameboards should be able to place ships at specific coordinates by calling the ship factory function
