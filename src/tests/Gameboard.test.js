import { Gameboard } from "../modules/Gameboard.js";

it("Gameboard only adds ship if position is available ", () => {
  const a = Gameboard();
  a.addShip("w", 2, [0, 0], true);
  a.addShip("b", 2, [1, 0], true);
  const g = a.getGameboard();
  // expect(g).toBe();
  expect(g[3][0]).toBe("");
});

it("Gameboard adds ships verticaly", () => {
  const a = Gameboard();
  a.addShip("w", 3, [0, 0], true);
  a.addShip("b", 3, [0, 1], true);
  const g = a.getGameboard();
  // expect(g).toBe();
  expect(g[0][1] && g[1][1] && g[2][1]).toBe("ship");
});

it("Gameboard adds ships horizontaly", () => {
  const a = Gameboard();
  a.addShip("w", 2, [0, 0], false);
  const g = a.getGameboard();
  // expect(g).toBe();
  expect(g[0][0] && g[0][1]).toBe("ship");
});

it("Gameboard sucessful attack", () => {
  const a = Gameboard();
  a.addShip("w", 2, [0, 0], false);
  a.receiveAttack(0, 0);
  const g = a.getGameboard();
  // expect(g).toBe();
  expect(g[0][0]).toBe("attacked");
});

it("Gameboard missed attack", () => {
  const a = Gameboard();
  a.addShip("w", 2, [0, 0], false);
  a.receiveAttack(1, 0);
  const g = a.getGameboard();
  // expect(g).toBe();
  expect(g[1][0]).toBe("missed");
});

it("Gameboard reports if all of their ships have sunk", () => {
  const a = Gameboard();
  a.addShip("w", 2, [0, 0], true);
  a.addShip("w", 2, [0, 1], true);
  a.receiveAttack(0, 0);
  a.receiveAttack(1, 0);
  a.receiveAttack(0, 1);
  a.receiveAttack(1, 1);
  expect(a.haveAllSunk()).toBeTruthy();
});
