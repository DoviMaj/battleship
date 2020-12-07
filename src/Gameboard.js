import { Ship } from "./Ship.js";
export const Gameboard = () => {
  const ships = [];
  const gameboard = [
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ];

  const addShip = (id, length, position, vertical) => {
    const positionsAvailable = (p) => {
      const g = getGameboard();
      let canBeAdded;
      p.every((pos) => {
        g[pos[0]][pos[1]] === "" ? (canBeAdded = true) : (canBeAdded = false);
      });
      return canBeAdded;
    };

    // store position of each part of ship
    let allPositions = [];
    for (let i = 0; i < length; i++) {
      if (vertical) {
        allPositions.push([position[0] + i, position[1]]);
      } else {
        allPositions.push([position[0], position[1] + i]);
      }
    }
    if (positionsAvailable(allPositions)) {
      ships.push(Ship(id, length, allPositions, vertical));
      updateGameboard();
    }
  };
  const updateGameboard = () => {
    ships.forEach((ship) => {
      let p = ship.getAllPosition();
      for (let i = 0; i < ship.getLength(); i++) {
        if (ship.getVertical()) {
          gameboard[p[i][0]][p[i][1]] = ship.getShipId();
        } else {
          gameboard[p[i][0]][p[i][1]] = ship.getShipId();
        }
      }
    });
  };
  const receiveAttack = (a, b) => {
    let p = gameboard[a][b];
    if (p === "") {
      gameboard[a][b] = "missed";
      return true;
    } else if (p !== "" && p !== "missed") {
      gameboard[a][b] = "attacked";
      ships.map((ship) => {
        if (ship.getShipId() === p) {
          ship.hit([a, b]);
          return true;
        }
      });
    } else {
      return false;
    }
  };

  const haveAllSunk = () => ships.every((ship) => ship.hasSunk());

  const getGameboard = () => gameboard;
  return {
    haveAllSunk,
    addShip,
    getGameboard,
    receiveAttack,
  };
};
