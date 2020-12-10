import { Player } from "../modules/Player.js";
import { gameflow } from "../modules/Gameflow.js";

it("Human attack works", () => {
  const a = Player("Human");
  a.attack(1, 2);
  expect(gameflow.PCGameboard.getGameboard()).toBe();
});
