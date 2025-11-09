import {participantTemplate, submitFunction} from "./Templates.js";

let count = 1;
const form = document.getElementById("form");

const insertButton = document.getElementById("add");
insertButton.addEventListener("click", function () {
  count++;
  participantTemplate(insertButton,count);
});

form.addEventListener("submit", (event) => submitFunction(event, form, count));
