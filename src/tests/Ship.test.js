import { Ship } from "../modules/Ship.js";

it("Ship hasSunk() and hit() works", () => {
  const a = Ship(
    "w",
    1,
    [
      [0, 0],
      [1, 0],
    ],
    true
  );
  a.hit([0, 0]);
  a.hit([1, 0]);
  expect(a.hasSunk()).toBeTruthy();
});

it("get vertical returns true or false", () => {
  const a = Ship(
    "w",
    1,
    [
      [0, 0],
      [1, 0],
    ],
    true
  );
  expect(a.getVertical()).toBe(true);
});

it("get length to be 2", () => {
  const a = Ship(
    "w",
    2,
    [
      [0, 0],
      [1, 0],
    ],
    true
  );
  expect(a.getLength()).toBe(2);
});

it("getAllPositions to be array of arrays ", () => {
  const a = Ship(
    "w",
    1,
    [
      [0, 0],
      [1, 0],
    ],
    true
  );
  const isArrayOfArrays =
    Array.isArray(a.getAllPosition()) && Array.isArray(a.getAllPosition()[0]);
  expect(isArrayOfArrays).toBe(true);
});
