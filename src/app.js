import MainController from "./controllers/MainController.js";
import './main.css'

document.addEventListener("DOMContentLoaded", () => {
  new MainController();
});

console.log(process.env.NODE_ENV);
console.log(TWO_NUMBER);
console.log(TWO_STRING);
console.log(api.domain);
