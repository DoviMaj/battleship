import { Gameboard } from "../modules/Gameboard.js";

describe("Gameboard factory", () => {
  it("Gameboard adds ships to gameboard", () => {
    const a = Gameboard();
    a.addShip(
      "si",
      2,
      [
        [1, 2],
        [1, 3],
      ],
      true
    );
    const g = a.getGameboard();
    expect(g[1][2] && g[1][3]).toBe("ship");
  });

  it("Gameboard attack succesfully", () => {
    const a = Gameboard();
    a.addShip(
      "w",
      2,
      [
        [0, 0],
        [0, 1],
      ],
      false
    );
    a.receiveAttack(0, 0);
    expect(a.getGameboard()[0][0]).toBe("attacked");
  });

  it("Gameboard missed attack", () => {
    const a = Gameboard();
    a.addShip(
      "w",
      2,
      [
        [0, 0],
        [0, 1],
      ],
      false
    );
    a.receiveAttack(1, 0);
    expect(a.getGameboard()[1][0]).toBe("missed");
  });

  it("Gameboard reports if all of their ships have sunk", () => {
    const a = Gameboard();
    a.addShip(
      "w",
      2,
      [
        [0, 0],
        [0, 1],
      ],
      false
    );
    a.addShip(
      "w",
      2,
      [
        [1, 2],
        [1, 3],
      ],
      false
    );
    a.receiveAttack(1, 2);
    a.receiveAttack(1, 3);
    a.receiveAttack(0, 0);
    a.receiveAttack(0, 1);
    expect(a.haveAllSunk()).toBeTruthy();
  });

  it("Gameboard addShipsRandomly() defines ship position as array of arrays", () => {
    const a = Gameboard();
    a.addShipsRandomly();
    expect(Array.isArray(a.getShips()[0].p)).toBeTruthy();
  });
});
