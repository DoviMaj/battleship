const Ship = (length) => {
  const ship = [];
  for (let i = 0; i < length; i++) {
    ship.push("");
  }
  function hitFunc(n) {
    ship[n] = "hit";
  }
  function hasSunk() {
    let sunk = false;
    ship.map((i) => (i === "hit" ? (sunk = true) : (sunk = false)));
    return sunk;
  }
  return {
    hasSunk,
    hitFunc,
  };
};

const Gameboard = (a, b, length) => {
  const newShip = Ship(length);
  const gameboard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  return {
    gameboard,
  };
};

export { Gameboard, Ship };
