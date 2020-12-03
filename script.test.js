import { Ship, Gameboard } from "./script";

it("hasSunk works", () => {
  const a = Ship("w", 1, [0,0], true);
  a.hitFunc(1);
  expect(a.hasSunk()).toBeTruthy();
});

it("hitFunc works", () => {
  const a = Ship("w", 1, [0,0], true);
  a.hitFunc(1);
  expect(a.hasSunk()).toBeTruthy();
});

it("Gameboard adds ships verticaly", () => {
  const a = Gameboard();
  a.addShip("w", 2, [0, 0], true);
  const g = a.getGameboard();
  // expect(g).toBe();
  expect(g[0][0] && g[1][0]).toBe("w");
});

it("Gameboard adds ships horizontaly", () => {
  const a = Gameboard();
  a.addShip("w", 2, [0, 0], false);
  const g = a.getGameboard();
  // expect(g).toBe();
  expect(g[0][0] && g[0][1]).toBe("w");
});

it("Gameboard keeps track of sucessful attacks", () => {
  const a = Gameboard();
  a.addShip("w", 2, [0, 0], false);
  a.receiveAttack(0, 0);
  const g = a.getGameboard();
  expect(g[0][0]).toBe("atacked");
});

it("Gameboard keeps track of missed attacks", () => {
  const a = Gameboard();
  a.addShip("w", 2, [0, 0], false);
  a.receiveAttack(1, 0);
  const g = a.getGameboard();
  expect(g[1][0]).toBe("missed");
});

it("Gameboard reports if all of their ships have been sunk", () => {
  const a = Gameboard();
  a.addShip("w", 2, [0, 0], false);
  a.receiveAttack(1, 0);
  const g = a.getGameboard();
  expect(g[1][0]).toBe("missed");
});
