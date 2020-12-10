import { domManipulation } from "./DomManipulation.js";
import { gameflow } from "./Gameflow.js";

export function Player(type) {
  const attack = (a, b) => {
    if (type === "Human") {
      gameflow.PCGameboard.receiveAttack(a, b);
      domManipulation().updatePcBlock(a, b);
    } else {
      handlePcAttack();
      gameflow.changeTurn();
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
