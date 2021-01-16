import {Components} from "~components-type";
import notes from './readme.md';

export default {
  title: 'my-component',
  parameters: {
    notes
  },
};

const embedArgs = (args: {[key: string]: any}) => Object.entries(args).map(([key, value]) => `${key}=${JSON.stringify(value)}`).join(' ')


export const Template = () => {
  const args: Components.MyComponent = {
    first: 'first-value',
    last: 'last',
    middle: 'middle',
    users: [
      {
        name: 'john'
      }
    ]
  }

  return `<my-component ${embedArgs(args)} ></my-component>`
};
