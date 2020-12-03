const Ship = (id, length, p, vertical) => {
  let ship = Array(length);
  let position = p;
  function hitFunc(n) {
    ship[n] = "hit";
  }
  function hasSunk() {
    return ship.every((i) => (i === "hit"));
  }
  const getLength = () => length;
  const getShipId = () => id;
  const getVertical = () => vertical;
  const getPosition = () => position;
  return {
    getVertical,
    getLength,
    getShipId,
    getPosition,
    hasSunk,
    hitFunc,
  };
};

const Gameboard = () => {
  const ships = [];
  const gameboard = {
    0: ["", "", "", "", "", "", "", "", "", ""],
    1: ["", "", "", "", "", "", "", "", "", ""],
    2: ["", "", "", "", "", "", "", "", "", ""],
    3: ["", "", "", "", "", "", "", "", "", ""],
    4: ["", "", "", "", "", "", "", "", "", ""],
    5: ["", "", "", "", "", "", "", "", "", ""],
    6: ["", "", "", "", "", "", "", "", "", ""],
    7: ["", "", "", "", "", "", "", "", "", ""],
    8: ["", "", "", "", "", "", "", "", "", ""],
    9: ["", "", "", "", "", "", "", "", "", ""],
  };
  const addShip = (id, length, position, vertical) => {
    // store position of each part of ship in ship
    let allPositions = [];
    for (let i = 0; i < length; i++) {
      if (vertical) {
        allPositions.push([position[0] + i, position[1]]);
      } else {
        allPositions.push([position[0], position[1] + i]);
      }
    }
    // create and store ship
    ships.push(Ship(id, length, allPositions, vertical));
    updateGameboard()
  };
  const updateGameboard = () => {
    ships.forEach((ship) => {
      let p = ship.getPosition();
      for (let i = 0; i < ship.getLength(); i++) {
        if (ship.getVertical()) {
          gameboard[p[i][0]][p[i][1]] = ship.getShipId();
        } else {
          gameboard[p[i][0]][p[i][1]] = ship.getShipId();
        }
      }
    });
  } 
  const receiveAttack = (a, b) => {
    let position = gameboard[a][b];
    if (position === "") {
      gameboard[a][b] = "missed";
      return false
    } else {
      ships.map((ship) => {
        if (ship.getShipId() === gameboard[a][b]) {
          gameboard[a][b] = "atacked";
          ship.hitFunc(a, b);
          return true
        }
      });
    }
  };

  const getGameboard = () => gameboard;
  return {
    addShip,
    getGameboard,
    receiveAttack,
  };
};

export { Gameboard, Ship };
