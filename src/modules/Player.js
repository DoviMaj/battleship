import { domManipulation } from "./DOM.js";
import { gameflow } from "./Gameflow.js";

// player can attack other player gameboard (x)
// AI can make random moves (x)
// AI cant attack same cordinate twice (x)
// only allow play when turn is his ()

export function Player(type) {
  const attack = (a, b) => {
    if (type === "Human") {
      gameflow.PCGameboard.receiveAttack(a, b);
      domManipulation().updatePcBlock(a, b);
      gameflow.changeTurn();
      // gameflow.changeTurn();
    } else {
      handlePcAttack();
    }
  };
  const usedPositions = [];
  const handlePcAttack = () => {
    const random = () => Math.floor(Math.random() * (10 - 0)) + 0;
    const randomArr = () => [random(), random()];
    const randomPositionNotUsedYet = () => {
      let newArr = randomArr();
      const checkIfArrayWasCalled = () =>
        usedPositions.some((i) => JSON.stringify(i) === JSON.stringify(newArr));

      console.log(checkIfArrayWasCalled());
      if (checkIfArrayWasCalled()) {
        randomPositionNotUsedYet();
      } else {
        usedPositions.push(newArr);
        gameflow.HumanGameboard.receiveAttack(newArr[0], newArr[1]);
        domManipulation().updateHumanBlock(newArr[0], newArr[1]);
      }
    };
    randomPositionNotUsedYet();
  };
  return {
    attack,
  };
}

// export { Player };
