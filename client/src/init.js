import { BUTTON_ID } from "../data/constants.js";
import { addWordListener } from "./listeners/add-to-do.js";

debugger;

// attach event listeners
addWordListener(document.getElementById(BUTTON_ID));
