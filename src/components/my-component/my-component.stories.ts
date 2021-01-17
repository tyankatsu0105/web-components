import { Components } from '~components-type';
import { embedArgs } from '~storybook-utils';
import notes from './readme.md';

// =========================================
// setup
// =========================================

export default {
  title: 'my-component',
  parameters: {
    notes,
  },
};

const Template = (args) => `<my-component ${embedArgs(args)} ></my-component>`

// =========================================
// stories
// =========================================

export const Primary = Template.bind({});
Primary.args = {
  first: 'first',
  last: 'last',
  middle: 'middle',
} as Components.MyComponent;
