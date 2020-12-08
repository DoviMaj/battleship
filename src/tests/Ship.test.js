import { Ship } from "../components/Ship.js";

it("Ship hasSunk and hit works", () => {
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
  // expect(a.ship).toBe();
  expect(a.hasSunk()).toBeTruthy();
});
