import css from "./style.css";
import { domManipulation } from "./components/DOM.js";
import { Player } from "./components/Player.js";
import { Gameboard } from "./components/Gameboard.js";

// gameflow module cant have any methods of its own
const gameflow = (() => {
  let turn = false;
  const changeTurn = () => {
    turn = !turn;
    if (turn) {
      PC.attack();
    }
  };
  const HumanGameboard = Gameboard();
  HumanGameboard.addShip("Carrier", 5, [0, 0], true);
  HumanGameboard.addShip("Battleship", 4, [3, 3], false);
  HumanGameboard.addShip("Cruiser", 3, [7, 0], true);
  HumanGameboard.addShip("Submarine", 3, [0, 4], false);
  HumanGameboard.addShip("Destroyer", 2, [0, 8], true);
  const PCGameboard = Gameboard();
  PCGameboard.addShip("Carrier", 5, [0, 0], true);
  PCGameboard.addShip("Battleship", 4, [3, 4], false);
  PCGameboard.addShip("Cruiser", 3, [7, 0], true);
  PCGameboard.addShip("Submarine", 3, [0, 4], false);
  PCGameboard.addShip("Destroyer", 2, [0, 8], true);
  const Human = Player("Human");
  const PC = Player("PC");
  return {
    changeTurn,
    Human,
    HumanGameboard,
    PCGameboard,
  };
})();

domManipulation().createBoards();
export { gameflow };
