import { gameflow } from "./Gameflow.js";

export function domManipulation() {
  const addButtonsEventListeners = () => {
    const startGameButton = document.querySelector(".start-game-button");
    const startGame = () => {
      addBoardEventListeners();
      document.querySelector(".buttons").classList.add("hide");
    };
    startGameButton.addEventListener("click", startGame);
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
      gameflow.Human.attack(
        Number(e.target.dataset.position[0]),
        Number(e.target.dataset.position[2])
      );
      e.target.removeEventListener("click", handleClick, true);
      gameflow.changeTurn();
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
      target.style.backgroundImage = `url(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAVFBMVEX/////AAD/ysr/zs7/lpb/r6//ra3/x8f/tLT/pqb/lJT/kpL/u7v/qqr/oaH/m5v/wcH/f3//ior/09P/4uL/dXX/29v/jo7/6+v/aWn/W1v/enqbYFwKAAACbElEQVRoge2a0WLCIAxFqVWr1mq1m7rt//9zi0gDBUsC4Wk9j2VyegmyAVNqYWGBQX+5fkj19Wgvx9Dzz+qPRsaxgr6+/Od9VYlZGt2Xn+WiG6o631G/urp4LfdXS36WxvR09ZoelZBldFSBadTLWNDRh5qPY/Mq3VGPnQSnsJ0l+BIUIjmAY66lieUAdnmWFcVhWxKqP4wf3s3/YMaIEXMAm1RLQ83hWqIvZLPiOBKzYD02tA8kZKl5OYCOa8Gx2lIdbEud4lBqz6kL1qPjOFhZEnMAe6oFHXuuw7bMTpgsh1InSpYhz0HKkpkDOMUs6DilOqIWEYdS5znLTcZhW7yFTyjHrAUd51zHW4uoQ6l1qC5Yj7WEw84yLk6DbA7gMLUM0jkAHLGumEOp1q4+1uMg6XBGTLzmyLhJQlppR8BSwKHU1XXcSzgmWQo5HEuRsXqCE1l+YgUc4l8Rw2R6FRmwtppQYMQCX0ZxC+YYcF8ptsxrMMfN3r2KZsHl8XmItCmRpXUdRSyHqcO2ZP85pMEcN3woXP21nwPYSmbx6lHA8iaHa0neNmiw5oPfKFT9mRxAJ5ElMHddBEYskgPALOzttWa2HgasC/OgQEPIAWRlidZDwHKmOmwL+RhKg2M1Uw8DzjHigZqGkQNIykKseZaFmQMgnykZWPUwMM/6EnIArCyYg3nBwbAk5nAtkXPLpHoYOpolIwdAyoKOxAsngiUzh2t585roSKiHbwne8uxiL0HjNGcRu8xEi3+Z2YrkcCz+tay5YM6oh8HUxb9g7oVyAK8sgWVf8tL/OYm+Qy2y/77ww/yFv7Dw3/kFTvMTLyVZwXAAAAAASUVORK5CYII="
      )`;
      target.style.backgroundSize = "contain";
    } else {
      target.style.backgroundImage = `url("https://e7.pngegg.com/pngimages/549/734/png-clipart-explosion-illustration-ship-explosion-explosion-war.png")`;
      target.style.backgroundSize = "contain";
    }
  };
  const updateHumanBlock = (a, b) => {
    const target = document.querySelector(`[data-position*="${a},${b}"]`);
    const position = gameflow.HumanGameboard.getGameboard()[a][b];
    if (target === null) {
      return;
    }
    if (position === "attacked") {
      target.style.backgroundImage = `url(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAVFBMVEX/////AAD/ysr/zs7/lpb/r6//ra3/x8f/tLT/pqb/lJT/kpL/u7v/qqr/oaH/m5v/wcH/f3//ior/09P/4uL/dXX/29v/jo7/6+v/aWn/W1v/enqbYFwKAAACbElEQVRoge2a0WLCIAxFqVWr1mq1m7rt//9zi0gDBUsC4Wk9j2VyegmyAVNqYWGBQX+5fkj19Wgvx9Dzz+qPRsaxgr6+/Od9VYlZGt2Xn+WiG6o631G/urp4LfdXS36WxvR09ZoelZBldFSBadTLWNDRh5qPY/Mq3VGPnQSnsJ0l+BIUIjmAY66lieUAdnmWFcVhWxKqP4wf3s3/YMaIEXMAm1RLQ83hWqIvZLPiOBKzYD02tA8kZKl5OYCOa8Gx2lIdbEud4lBqz6kL1qPjOFhZEnMAe6oFHXuuw7bMTpgsh1InSpYhz0HKkpkDOMUs6DilOqIWEYdS5znLTcZhW7yFTyjHrAUd51zHW4uoQ6l1qC5Yj7WEw84yLk6DbA7gMLUM0jkAHLGumEOp1q4+1uMg6XBGTLzmyLhJQlppR8BSwKHU1XXcSzgmWQo5HEuRsXqCE1l+YgUc4l8Rw2R6FRmwtppQYMQCX0ZxC+YYcF8ptsxrMMfN3r2KZsHl8XmItCmRpXUdRSyHqcO2ZP85pMEcN3woXP21nwPYSmbx6lHA8iaHa0neNmiw5oPfKFT9mRxAJ5ElMHddBEYskgPALOzttWa2HgasC/OgQEPIAWRlidZDwHKmOmwL+RhKg2M1Uw8DzjHigZqGkQNIykKseZaFmQMgnykZWPUwMM/6EnIArCyYg3nBwbAk5nAtkXPLpHoYOpolIwdAyoKOxAsngiUzh2t585roSKiHbwne8uxiL0HjNGcRu8xEi3+Z2YrkcCz+tay5YM6oh8HUxb9g7oVyAK8sgWVf8tL/OYm+Qy2y/77ww/yFv7Dw3/kFTvMTLyVZwXAAAAAASUVORK5CYII="
      )`;
      target.style.backgroundSize = "contain";
    } else {
      target.style.backgroundImage = `url("https://e7.pngegg.com/pngimages/549/734/png-clipart-explosion-illustration-ship-explosion-explosion-war.png")`;
      target.style.backgroundSize = "contain";
    }
  };

  const displayNotification = () => {};
  return {
    addButtonsEventListeners,
    displayNotification,
    updatePcBlock,
    updateHumanBlock,
    createBoards,
  };
}
