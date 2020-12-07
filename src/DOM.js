import { gameflow } from "./index.js";

const domManipulation = () => {
  //Human Board
  const app = document.querySelector(".app");
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
        block.style.backgroundColor = "gray";
      }
      if (item === "missed") {
        block.style.backgroundColor = "red";
      }
      block.addEventListener("click", (e) => {
        gameflow.PCGameboard.receiveAttack(
          Number(block.dataset.position[0]),
          Number(block.dataset.position[2])
        );
        // document.querySelector(".app").innerHTML = "";
        // domManipulation();
        updateBlock(
          e.target,
          Number(block.dataset.position[0]),
          Number(block.dataset.position[2])
        );
      });
      line.append(block);
    });
    PCboard.append(line);
  });
  app.append(humanBoard, PCboard);

  const updateBlock = (target, a, b) => {
    if (gameflow.PCGameboard.getGameboard()[a][b] === "attacked") {
      target.style.backgroundColor = "gray";
    } else {
      target.style.backgroundColor = "red";
    }
  };
};

export { domManipulation };
