import { domManipulation } from "./DOM.js";
import { gameflow } from "../index.js";
// player can attack other player gameboard (x)
// AI can make random moves (x)
// AI cant attack same cordinate twice (x)
// only allow play when turn is his ()

const Player = (type) => {
  const attack = (a, b) => {
    if (type === "Human") {
      gameflow.PCGameboard.receiveAttack(a, b);
    } else {
      const random = () => Math.floor(Math.random() * (10 - 0)) + 0;
      const g = gameflow.HumanGameboard.getGameboard();
      const randomC = () => [random(), random()];
      let newArr = [];
      // call recursivelly until value is available
      const newRandomArray = () => {
        const board = gameflow.HumanGameboard.getGameboard();
        console.log(newArr[0], newArr[1]);
        newArr = randomC();
        if (
          board[newArr[0]][newArr[1]] === "attacked" ||
          board[newArr[0]][newArr[1]] === "missed"
        ) {
          newRandomArray();
          console.log(newArr, g);
        } else {
          gameflow.Human.attack(newArr[0], newArr[1]);
          domManipulation().updateHumanBlock(newArr[0], newArr[1]);
          gameflow.changeTurn();
        }
      };
      newRandomArray();
    }
  };
  return {
    attack,
  };
};

export { Player };
