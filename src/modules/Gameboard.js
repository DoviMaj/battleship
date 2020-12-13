import { Ship } from "./Ship.js";

export function Gameboard() {
  let ships = [];
  let gameboard = [
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

  const positionsAvailable = (p) => {
    const g = getGameboard();
    const condition = (pos) => {
      if (pos[0] > 9 || pos[1] > 9) return false;
      else if (g[pos[0]][pos[1]] === "ship") return false;
      else {
        return true;
      }
    };
    let canBeAdded = p.every((pos) => {
      if (!condition(pos)) {
        return false;
      } else {
        return true;
      }
    });
    return canBeAdded;
  };

  const generateAllPositions = (position, length, vertical) => {
    let allPositions = [];
    for (let i = 0; i < length; i++) {
      if (vertical) {
        allPositions.push([position[0] + i, position[1]]);
      } else {
        allPositions.push([position[0], position[1] + i]);
      }
    }
    return allPositions;
  };

  const addShip = (id, length, allPositions, vertical) => {
    ships.push(Ship(id, length, allPositions, vertical));
    updateGameboard();
  };

  const updateGameboard = () => {
    ships.forEach((ship) => {
      let p = ship.getAllPosition();
      for (let i = 0; i < ship.getLength(); i++) {
        if (ship.getVertical()) {
          gameboard[p[i][0]][p[i][1]] = "ship";
        } else {
          gameboard[p[i][0]][p[i][1]] = "ship";
        }
      }
    });
  };

  const receiveAttack = (a, b) => {
    let p = gameboard[a][b];
    if (p === "") {
      gameboard[a][b] = "missed";
      return "missed";
    } else if (p !== "missed") {
      gameboard[a][b] = "attacked";
      ships.map((ship) => {
        if (ship.p.filter((i) => i === [a, b])) {
          ship.hit([a, b]);
          return "missed";
        }
      });
    }
  };

  const randomTrueOrFalse = () => (random0to9() > 5 ? true : false);
  const random0to9 = () => Math.floor(Math.random() * (10 - 0)) + 0;
  const randomPosition = () => [random0to9(), random0to9()];
  const addShipsRandomly = () => {
    const shipsData = [
      {
        id: "Carrier",
        length: 5,
        position: randomPosition(),
        vertical: randomTrueOrFalse(),
      },
      {
        id: "Battleship",
        length: 4,
        position: randomPosition(),
        vertical: randomTrueOrFalse(),
      },
      {
        id: "Cruiser",
        length: 3,
        position: randomPosition(),
        vertical: randomTrueOrFalse(),
      },
      {
        id: "Submarine",
        length: 3,
        position: randomPosition(),
        vertical: randomTrueOrFalse(),
      },
      {
        id: "Destroyer",
        length: 2,
        position: randomPosition(),
        vertical: randomTrueOrFalse(),
      },
    ];

    shipsData.forEach((ship) => {
      const checkIfCanBeAddedToGameboard = () => {
        let allPositions = generateAllPositions(
          ship.position,
          ship.length,
          ship.vertical
        );
        if (positionsAvailable(allPositions)) {
          addShip(ship.id, ship.length, allPositions, ship.vertical);
        } else {
          ship.position = randomPosition();
          ship.vertical = randomTrueOrFalse();
          checkIfCanBeAddedToGameboard();
        }
      };
      checkIfCanBeAddedToGameboard();
    });
  };

  const haveAllSunk = () => ships.every((ship) => ship.hasSunk());
  const getGameboard = () => gameboard;
  const resetBoard = () => {
    gameboard = [
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
    ships = [];
  };
  const getShips = () => ships;
  return {
    addShip,
    getShips,
    resetBoard,
    addShipsRandomly,
    haveAllSunk,
    getGameboard,
    receiveAttack,
  };
}
