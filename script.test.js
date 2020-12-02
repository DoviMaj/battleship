import { Ship, Gameboard } from "./script";

it("hasSunk works", () => {
  expect(Ship(2).hasSunk()).toBe(false);
});

it("hitFunc works", () => {
  const a = Ship(1);
  a.hitFunc(1);
  expect(a.hasSunk()).toBe(true);
});

it("setPosition works from within Gameboard", () => {});

it("gameboard adds ships verticaly", () => {
  const a = Gameboard();
  a.addShip("whatever", 2, [0, 0], true);
  const g = a.getGameboard();
  expect(g[0][0] && g[1][0]).toBe("whatever");
});

it("gameboard adds ships horizontaly", () => {
  const a = Gameboard();
  a.addShip("whatever", 2, [0, 0], false);
  const g = a.getGameboard();
  expect(g[0][0] && g[0][1]).toBe("whatever");
});

it("attack works at boat", () => {
  const a = Gameboard();
  a.addShip("whatever", 2, [0, 0], false);
  a.receiveAttack(0, 0);
  const g = a.getGameboard();
  expect(g[0][0]).toBe("atacked");
});

it("attack fails", () => {
  const a = Gameboard();
  a.addShip("whatever", 2, [0, 0], false);
  a.receiveAttack(1, 0);
  const g = a.getGameboard();
  expect(g[1][0]).toBe("missed");
});
