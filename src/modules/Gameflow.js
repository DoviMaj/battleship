import { Gameboard } from "./Gameboard.js";
import { Player } from "./Player.js";

export const gameflow = (() => {
  let turn = false;
  const changeTurn = () => {
    turn = !turn;
    if (turn) {
      PC.attack();
      domManipulation().updateHumanBlock(newArr[0], newArr[1]);
    }
  };
  const HumanGameboard = Gameboard();
  const PCGameboard = Gameboard();
  const Human = Player("Human");
  const PC = Player("PC");
  const setUpBoards = () => {
    HumanGameboard.addShip("Carrier", 5, [0, 0], true);
    HumanGameboard.addShip("Battleship", 4, [3, 3], false);
    HumanGameboard.addShip("Cruiser", 3, [7, 0], true);
    HumanGameboard.addShip("Submarine", 3, [0, 4], false);
    HumanGameboard.addShip("Destroyer", 2, [0, 8], true);
    PCGameboard.addShip("Carrier", 5, [0, 0], true);
    PCGameboard.addShip("Battleship", 4, [3, 4], false);
    PCGameboard.addShip("Cruiser", 3, [7, 0], true);
    PCGameboard.addShip("Submarine", 3, [0, 4], false);
    PCGameboard.addShip("Destroyer", 2, [0, 8], true);
  };
  return {
    setUpBoards,
    changeTurn,
    Human,
    PC,
    HumanGameboard,
    PCGameboard,
  };
})();
