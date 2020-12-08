import { gameflow } from "../index.js";

const domManipulation = () => {
  const createBoards = () => {
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

        const handleClick = (e) => {
          gameflow.PCGameboard.receiveAttack(
            Number(block.dataset.position[0]),
            Number(block.dataset.position[2])
          );
          e.target.removeEventListener("click", handleClick, true);
          updatePcBlock(
            e.target,
            Number(block.dataset.position[0]),
            Number(block.dataset.position[2])
          );
        };

        block.addEventListener("click", handleClick, true);
        line.append(block);
      });
      PCboard.append(line);
    });
    app.append(humanBoard, PCboard);
  };

  const updatePcBlock = (target, a, b) => {
    const position = gameflow.PCGameboard.getGameboard()[a][b];
    if (position === "attacked") {
      target.style.backgroundColor = "red";
    } else {
      target.style.backgroundColor = "blue";
    }
  };
  const updateHumanBlock = (a, b) => {
    const target = document.getElementById(`${a},${b}`);
    const position = gameflow.HumanGameboard.getGameboard()[a][b];
    if (position === "ship") {
      target.style.backgroundColor = "red";
    } else {
      target.style.backgroundColor = "blue";
    }
  };
  return {
    updateHumanBlock,
    createBoards,
  };
};

export { domManipulation };
