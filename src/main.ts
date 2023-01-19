import "./style.css";
import Validator from "./controllers/validator";
import { UI } from "./components/UI";

const validator = new Validator();
const ui = new UI();
ui.root();

console.log(validator);
