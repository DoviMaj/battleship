import { Gameboard } from "../modules/Gameboard.js";
import { Player } from "../modules/Player.js";

describe("Player module", () => {
  it("Human Player attacks oponent gameboard", () => {
    const p = Player("Human");
    const c = Gameboard();
    p.attack(1, 2, c);
    expect(c.getGameboard()[1][2]).toBe("missed");
  });
  it("PC Player attacks oponent gameboard", () => {
    const p = Player("PC");
    const c = Gameboard();
    expect(Array.isArray(p.attack(1, 2, c))).toBeTruthy;
  });
});
