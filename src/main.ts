import './style.css';
import Validator from './controllers/validator';

const validator = new Validator();
console.log(validator.isValid('1234567890'));
console.log(validator.maskify('1234567890'));