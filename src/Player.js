// player can attack other player gameboard (x)
// player can add ships to gameboard (x)
// player knows if its his turn(x)
// AI can make random moves (x)
// AI cant attack same cordinate twice (x)
// only alow player when turn is his ()

const Player = (type) => {
  const attack = (a, b) => {
    if (type === "Human") {
      gameflow.PCGameboard.receiveAttack(a, b);
    } else {
      const random = () => Math.floor(Math.random() * (10 - 0)) + 0;
      const g = gameflow.HumanGameboard.getGameboard();
      const randomC = () => [random(), random()];
      // call recursivelly until value is available
      let newArr = randomC();
      while (
        g[newArr[0]][newArr[1]] === "attacked" ||
        g[newArr[0]][newArr[1]] === "missed"
      ) {
        newArr = randomC();
      }
      gameflow.HumanGameboard.receiveAttack(newArr[0], newArr[1]);
    }
    gameflow.changeTurn();
  };
  const addShip = (id, length, position, vertical) => {
    if (type === "Human") {
      gameflow.PCGameboard.addShip(id, length, position, vertical);
    } else {
      gameflow.HumanGameboard.addShip(id, length, position, vertical);
    }
  };
  return {
    addShip,
    attack,
  };
};

export { Player };
