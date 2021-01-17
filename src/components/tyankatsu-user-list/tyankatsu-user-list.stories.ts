import { Components } from '~components-type';
import { embedArgs } from '~storybook-utils';
import notes from './readme.md';

// =========================================
// setup
// =========================================

export default {
  title: 'tyankatsu-user-list',
  parameters: {
    notes,
  },
};

const Template = (args) => `<tyankatsu-user-list ${embedArgs(args)} ></tyankatsu-user-list>`

// =========================================
// stories
// =========================================

export const Primary = Template.bind({});
Primary.args = {
  users: [
    {
      name: 'John',
      age: 100,
      blood: 'AB',
    },
  ],
} as Components.TyankatsuUserList;

export const Secondary = Template.bind({});
Secondary.args = {
  users: [
    {
      name: 'John',
      age: 100,
      blood: 'AB',
    },
    {
      name: 'Mary',
      age: 10,
      blood: 'B',
    },
  ],
} as Components.TyankatsuUserList;
