const Ship = (id, length, p, vertical) => {
  // array of objects
  let ship = [];
  p.forEach((position) =>
    ship.push({
      id,
      position,
      hit: false,
    })
  );
  function hit(n) {
    ship.forEach((i) => {
      if (i.position[0] === n[0] && i.position[1] === n[1]) {
        i.hit = true;
      }
    });
  }
  function hasSunk() {
    return ship.every((i) => i.hit === true);
  }
  const getLength = () => length;
  const getShipId = () => id;
  const getVertical = () => vertical;
  const getAllPosition = () => p;
  return {
    p,
    ship,
    getVertical,
    getLength,
    getShipId,
    getAllPosition,
    hasSunk,
    hit,
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
  const checkIfPositionsAvailable = (p) => {
    let canBeAdded = false;
    p.forEach((position) => {
      gameboard[position[0]][position[1]] === ""
        ? (canBeAdded = true)
        : (canBeAdded = false);
    });
    return canBeAdded;
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
    if (checkIfPositionsAvailable(allPositions)) {
      // create and store ship
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

// player can attack other player gameboard (x)
// player can add ships to gameboard (x)
// player knows if its his turn(x)
// AI can make random moves (x)
// AI cant attack same cordinate twice ()

let turn = false;
const changeTurn = () => {
  turn = !turn;
};

const Player = (type) => {
  const attack = (a, b) => {
    if (type === "Human") {
      PCGameboard.receiveAttack(a, b);
    } else {
      // AI cant attack same cordinate twice ()
      const random = () => Math.floor(Math.random() * (10 - 0)) + 0;
      HumanGameboard.receiveAttack(random(), random());
    }
    changeTurn();
  };
  const addShip = (id, length, position, vertical) => {
    if (type === "Human") {
      PCGameboard.addShip(id, length, position, vertical);
    } else {
      HumanGameboard.addShip(id, length, position, vertical);
    }
  };
  return {
    addShip,
    attack,
    changeTurn,
  };
};

// gameflow
const HumanGameboard = Gameboard();
const PCGameboard = Gameboard();
const Human = Player("Human");
const PC = Player("PC");

export { Gameboard, Ship, Human, PC, HumanGameboard, PCGameboard };
