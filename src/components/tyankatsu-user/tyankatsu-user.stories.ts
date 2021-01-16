import { Components } from '~components-type';
import { embedArgs } from '~storybook-utils';
import notes from './readme.md';

export default {
  title: 'tyankatsu-user',
  parameters: {
    notes,
  },
};

export const Template = () => {
  const args: Components.TyankatsuUser = {
    user: {
      name: 'John',
      age: 100,
      blood: 'AB',
    },
  };

  return `<tyankatsu-user ${embedArgs(args)} ></tyankatsu-user>`;
};
