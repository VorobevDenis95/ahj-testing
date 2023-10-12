import ValidateContainer from './components/ValidateContainer';
import validator from './js/validator';

const container = document.querySelector('.container');
const form = new ValidateContainer(container);

form.bindToDom();

console.log(validator('371449635398431'));
