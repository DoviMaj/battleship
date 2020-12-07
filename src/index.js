import css from "./style.css";

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

// player can attack other player gameboard (x)
// player can add ships to gameboard (x)
// player knows if its his turn(x)
// AI can make random moves (x)
// AI cant attack same cordinate twice (x)

const Player = (type) => {
  const attack = (a, b) => {
    if (type === "Human") {
      PCGameboard.receiveAttack(a, b);
    } else {
      const random = () => Math.floor(Math.random() * (10 - 0)) + 0;
      const g = HumanGameboard.getGameboard();
      const randomC = () => [random(), random()];
      // call recursivelly until value is available
      let newArr = randomC();
      while (
        g[newArr[0]][newArr[1]] === "attacked" ||
        g[newArr[0]][newArr[1]] === "missed"
      ) {
        newArr = randomC();
      }
      HumanGameboard.receiveAttack(newArr[0], newArr[1]);
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
  };
};

// gameflow module cant have any methods of its own
const gameflow = (() => {
  let turn = false;
  const changeTurn = () => {
    turn = !turn;
  };
  const HumanGameboard = Gameboard();
  HumanGameboard.addShip("Carrier", 5, [0, 0], true);
  HumanGameboard.addShip("Battleship", 4, [3, 3], false);
  HumanGameboard.addShip("Cruiser", 3, [7, 0], true);
  HumanGameboard.addShip("Submarine", 3, [0, 4], false);
  HumanGameboard.addShip("Destroyer", 2, [0, 8], true);
  const PCGameboard = Gameboard();
  PCGameboard.addShip("Carrier", 5, [0, 0], true);
  PCGameboard.addShip("Battleship", 4, [2, 0], false);
  PCGameboard.addShip("Cruiser", 3, [7, 0], true);
  PCGameboard.addShip("Submarine", 3, [0, 4], false);
  PCGameboard.addShip("Destroyer", 2, [0, 8], true);
  const Human = Player("Human");
  const PC = Player("PC");
  return {
    HumanGameboard,
    PCGameboard,
  };
})();

const DOM = () => {
  //Human Board
  const div = document.querySelector(".app");
  const humanBoard = document.createElement("div");
  humanBoard.classList.add("game-board", "human");
  const hB = gameflow.HumanGameboard.getGameboard();
  hB.forEach((i, index) => {
    const line = document.createElement("div");
    line.classList.add("line");
    i.forEach((item, ix) => {
      const block = document.createElement("div");
      block.className = "block";
      block.dataset.position = `${[index, ix]}`;
      if (item !== "") {
        block.style.backgroundColor = "gray";
      }
      block.id = `${[index, ix]}`;
      line.append(block);
    });
    humanBoard.append(line);
  });
  //PC Board
  const PCboard = document.createElement("div");
  PCboard.classList.add("game-board", "PC");
  const pB = gameflow.PCGameboard.getGameboard();
  pB.forEach((i, index) => {
    const line = document.createElement("div");
    line.classList.add("line");
    i.forEach((item, ix) => {
      const block = document.createElement("div");
      block.className = "block";
      block.dataset.position = `${[index, ix]}`;
      if (item === "attacked") {
        block.style.backgroundColor = "red";
      }
      if (item === "missed") {
        block.style.backgroundColor = "pink";
      }
      block.addEventListener("click", () => {
        gameflow.PCGameboard.receiveAttack(
          Number(block.dataset.position[0]),
          Number(block.dataset.position[1])
        );
        updateBlock(block.dataset.position, "pc");
      });
      line.append(block);
    });
    PCboard.append(line);
  });
  div.append(humanBoard, PCboard);
  const updateBlock = (id, board) => {
    const nodes = document.querySelectorAll(`[data-position*="${id}"]`);
    if (board === "pc") {
      const last = nodes[nodes.length - 1];
      last.style.backgroundColor = "red";
    } else {
    }
  };
};

DOM();
export { Gameboard, Ship };
