import { domManipulation } from "./DomManipulation.js";
import { Gameboard } from "./Gameboard.js";
import { Player } from "./Player.js";

export const gameflow = (() => {
  const HumanGameboard = Gameboard();
  const PCGameboard = Gameboard();
  const Human = Player("Human");
  const PC = Player("PC");
  let turn = false;
  const changeTurn = () => {
    turn = !turn;
    if (turn) {
      PC.attack(HumanGameboard);
      HumanGameboard.haveAllSunk() ? handleEndOfGame("PC") : null;
    } else {
      PCGameboard.haveAllSunk() ? handleEndOfGame("Human") : null;
    }
  };
  const handleHumanAttack = (a, b, removeListener) => {
    if (!turn) {
      Human.attack(a, b, PCGameboard);
      changeTurn();
      domManipulation().updatePcBlock(a, b);
      removeListener();
    }
  };
  const handleEndOfGame = (winner) => {
    domManipulation().displayNotification(winner);
  };
  const populateBoards = () => {
    HumanGameboard.addShipsRandomly();
    PCGameboard.addShipsRandomly();
    console.table(HumanGameboard.getGameboard());
    console.table(PCGameboard.getGameboard());
  };
  const resetBoards = () => {
    HumanGameboard.resetBoard();
    PCGameboard.resetBoard();
  };
  return {
    handleHumanAttack,
    resetBoards,
    populateBoards,
    changeTurn,
    Human,
    PC,
    PCGameboard,
    HumanGameboard,
  };
})();
