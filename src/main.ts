import './style.css';
import Validator from './controllers/validator';

const validator = new Validator();
console.log(validator.isValid('123456789'));