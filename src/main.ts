import "./style.css";
import Validator from "./controllers/validator";
import { UI } from "./components/UI";

const validator = new Validator();
const ui = new UI();
ui.card();
console.log(validator.isValid("1234567890"));
console.log(validator.maskify("1234567890"));
