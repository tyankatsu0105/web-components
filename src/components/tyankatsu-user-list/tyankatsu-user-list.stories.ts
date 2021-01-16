import { Components } from '~components-type';
import { embedArgs } from '~storybook-utils';
import notes from './readme.md';

export default {
  title: 'tyankatsu-user-list',
  parameters: {
    notes,
  },
};

export const Template = () => {
  const args: Components.TyankatsuUserList = {
    users: [
      {
        name: 'John',
        age: 100,
        blood: 'AB',
      },
    ],
  };

  return `<tyankatsu-user-list ${embedArgs(args)} ></tyankatsu-user-list>`;
};
