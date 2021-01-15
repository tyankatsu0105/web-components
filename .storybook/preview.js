import { configure } from '@storybook/html';

const loader = require('../loader/index.cjs.js');

function loadWebComponents() {
  loader.defineCustomElements(window);
}

configure(loadWebComponents, module);
