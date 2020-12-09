import css from "./style.css";
import { domManipulation } from "./modules/DOM.js";
import { gameflow } from "./modules/Gameflow.js";

gameflow.setUpBoards();
domManipulation().createBoards();
