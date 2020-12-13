import { gameflow } from "./Gameflow.js";

export function domManipulation() {
  const addButtonsEventListeners = () => {
    // play again button
    const rematch = document.querySelector(".rematch");
    const rematchGame = () => {
      document.querySelector(".buttons-wrapper").classList.remove("hide");
      const notification = document.querySelector(".notification-wrapper");
      notification.classList.add("hide");
      document.querySelector(".app").innerHTML = "";
      gameflow.resetBoards();
      gameflow.populateBoards();
      domManipulation().createBoards();
    };
    rematch.addEventListener("click", rematchGame);

    // start game button
    const startGameButton = document.querySelector(".start-game-button");
    const startGame = () => {
      addBoardEventListeners();
      document.querySelector(".buttons-wrapper").classList.add("hide");
    };
    startGameButton.addEventListener("click", startGame);

    // randomize button
    const randomizeButton = document.querySelector(".randomize");
    const randomize = () => {
      document.querySelector(".app").innerHTML = "";
      gameflow.resetBoards();
      gameflow.populateBoards();
      domManipulation().createBoards();
    };
    randomizeButton.addEventListener("click", randomize);
  };

  const addBoardEventListeners = () => {
    const handleClick = (e) => {
      gameflow.handleHumanAttack(
        Number(e.target.dataset.position[0]),
        Number(e.target.dataset.position[2]),
        () => e.target.removeEventListener("click", handleClick, true)
      );
    };
    const allPcBlocks = document.querySelectorAll(".PC .block");
    allPcBlocks.forEach((block) => {
      block.addEventListener("click", handleClick, true);
    });
  };
  const createBoards = () => {
    //Human Board
    const app = document.querySelector(".app");
    const humanBoard = document.createElement("div");
    humanBoard.classList.add("game-board", "human");
    const player = document.createElement("div");
    player.className = "player";
    player.innerHTML = "You";
    humanBoard.append(player);
    const hB = gameflow.HumanGameboard.getGameboard();
    hB.forEach((i, index) => {
      const line = document.createElement("div");
      line.classList.add("line");
      i.forEach((item, ix) => {
        const block = document.createElement("div");
        block.className = "block";
        block.dataset.position = `${[index, ix]}`;
        if (item !== "") {
          block.style.backgroundColor = "whitesmoke";
        }
        line.append(block);
      });
      humanBoard.append(line);
    });

    //PC Board
    const PCboard = document.createElement("div");
    PCboard.classList.add("game-board", "PC");
    const pc = document.createElement("div");
    pc.className = "player";
    pc.innerHTML = "PC";
    PCboard.append(pc);
    const pB = gameflow.PCGameboard.getGameboard();

    pB.forEach((i, index) => {
      const line = document.createElement("div");
      line.classList.add("line");

      i.forEach((item, ix) => {
        const block = document.createElement("div");
        block.className = "block";
        block.dataset.position = `${[index, ix]}`;
        line.append(block);
      });
      PCboard.append(line);
    });
    app.append(humanBoard, PCboard);
  };

  const updatePcBlock = (a, b) => {
    const position = gameflow.PCGameboard.getGameboard()[a][b];
    const node = document.querySelectorAll(`[data-position*="${a},${b}"]`);
    const target = node[node.length - 1];
    if (target === undefined) {
      return;
    }
    if (position === "attacked") {
      target.classList.add("attacked");
    } else {
      target.classList.add("missed");
    }
  };
  const updateHumanBlock = (a, b) => {
    const target = document.querySelector(`[data-position*="${a},${b}"]`);
    const position = gameflow.HumanGameboard.getGameboard()[a][b];
    if (target === null) {
      return;
    }
    if (position === "attacked") {
      target.classList.add("attacked");
      target.style.backgroundColor = "initial";
    } else {
      target.classList.add("missed");
    }
  };

  const displayNotification = (winner) => {
    debugger;
    const notification = document.querySelector(".notification-wrapper");
    notification.classList.remove("hide");
    if (winner === "Human") {
      document.querySelector("#winner").innerHTML = `Congratulations! You won!`;
    } else {
      document.querySelector("#winner").innerHTML = `You Lost! PC winns ;)`;
    }
  };
  return {
    addButtonsEventListeners,
    displayNotification,
    updatePcBlock,
    updateHumanBlock,
    createBoards,
  };
}
