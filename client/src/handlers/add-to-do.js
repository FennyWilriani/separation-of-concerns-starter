import {INPUT_ID, CONTAINER_ID} from '../../data/constants.js';

export const addHandler = () => {
    //read user input
    const inputField = document.getElementById(INPUT_ID);
    const toDoContainer = document.getElementById(CONTAINER_ID);
    //new paragraph-input
    const paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
};