import { domManipulation } from "./DomManipulation.js";
import { Gameboard } from "./Gameboard.js";
import { Player } from "./Player.js";

export const gameflow = (() => {
  let turn = false;
  const changeTurn = () => {
    turn = !turn;
    if (turn) {
      PC.attack();
      HumanGameboard.haveAllSunk() ? handleEndOfGame("PC") : null;
    } else {
      PCGameboard.haveAllSunk() ? handleEndOfGame("Human") : null;
    }
  };
  const handleEndOfGame = (winner) => {
    domManipulation.displayNotification(winner);
  };
  const HumanGameboard = Gameboard();
  const PCGameboard = Gameboard();
  const Human = Player("Human");
  const PC = Player("PC");
  const populateBoards = () => {
    PCGameboard.addShipsRandomly();
    HumanGameboard.addShipsRandomly();
  };
  return {
    populateBoards,
    changeTurn,
    Human,
    PC,
    HumanGameboard,
    PCGameboard,
  };
})();
