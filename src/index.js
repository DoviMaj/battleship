import css from "./style.css";
import { domManipulation } from "./modules/DomManipulation.js";
import { gameflow } from "./modules/Gameflow.js";

const gameSetUp = () => {
  gameflow.populateBoards();
  domManipulation().createBoards();
};

const startGame = () => {
  domManipulation().addEventListeners();
};

const restartGame = () => {};

gameSetUp();
startGame();
