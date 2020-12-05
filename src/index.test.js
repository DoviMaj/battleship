import { Ship, Gameboard, Player1, PC } from ".";

it("Ship hasSunk and hit works", () => {
  const a = Ship(
    "w",
    1,
    [
      [0, 0],
      [1, 0],
    ],
    true
  );
  a.hit([0, 0]);
  a.hit([1, 0]);
  // expect(a.ship).toBe();
  expect(a.hasSunk()).toBeTruthy();
});

it("Gameboard checks if ship can be added to positions", () => {
  const a = Gameboard();
  a.addShip("w", 2, [0, 0], true);
  a.addShip("b", 2, [0, 0], true);
  const g = a.getGameboard();
  // expect(g).toBe();
  expect(g[0][0] && g[1][0]).toBe("w");
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
  expect(g[0][0]).toBe("attacked");
});

it("Gameboard keeps track of missed attacks", () => {
  const a = Gameboard();
  a.addShip("w", 2, [0, 0], false);
  a.receiveAttack(1, 0);
  const g = a.getGameboard();
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

it("Player can take turns atacking the enemy", () => {
  expect(Player1).toBeTruthy();
});
