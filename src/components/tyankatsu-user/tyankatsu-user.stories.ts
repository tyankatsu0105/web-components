import { Components } from '~components-type';
import { embedArgs } from '~storybook-utils';
import notes from './readme.md';

// =========================================
// setup
// =========================================

export default {
  title: 'tyankatsu-user',
  parameters: {
    notes,
  },
};

const Template = (args) => `<tyankatsu-user ${embedArgs(args)} ></tyankatsu-user>`

// =========================================
// stories
// =========================================

export const Primary = Template.bind({});
Primary.args = {
  user: {
    name: 'John',
    age: 100,
    blood: 'AB',
  }
} as Components.TyankatsuUser;
