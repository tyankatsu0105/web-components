import { configure } from '@storybook/html';

const loader = require('../loader/index.cjs.js');

function loadStories() {
  loader.defineCustomElements(window);
}

configure(loadStories, module);
