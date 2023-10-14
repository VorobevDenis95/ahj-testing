import './css/style.css';

import ValidateContainer from './components/ValidateContainer';

const container = document.querySelector('.container');
const form = new ValidateContainer(container);

form.bindToDom();
