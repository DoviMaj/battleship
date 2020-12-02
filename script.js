const Ship = (id, length, p, vertical) => {
  let ship = Array(length);
  let position = p;
  function hitFunc(n) {
    ship[n] = "hit";
  }
  function hasSunk() {
    let sunk = false;
    ship.map((i) => (i === "hit" ? (sunk = true) : (sunk = false)));
    return sunk;
  }
  const getLength = () => length;
  const getShipId = () => id;
  const getVertical = () => vertical;
  return {
    getVertical,
    getLength,
    getShipId,
    position,
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
    ships.push(Ship(id, length, position, vertical));
    ships.forEach((ship) => {
      if (ship.getVertical()) {
        for (let i = 0; i < ship.getLength(); i++) {
          gameboard[ship.position[0] + i][ship.position[1]] = ship.getShipId();
        }
      } else {
        for (let i = 0; i < ship.getLength(); i++) {
          gameboard[ship.position[0]][ship.position[1] + i] = ship.getShipId();
        }
      }
    });
  };
  const receiveAttack = (a, b) => {
    let position = gameboard[a][b];
    if (position === "") {
      gameboard[a][b] = "missed";
    } else {
      ships.map((ship) => {
        if (ship.getShipId() === gameboard[a][b]) {
          gameboard[a][b] = "atacked";
          // fix hitFunc to target specific index from ship
          ship.hitFunc(a, b);
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
