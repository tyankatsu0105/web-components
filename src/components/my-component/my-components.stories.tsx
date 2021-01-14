import {Components} from "~components-type";
import notes from './readme.md';

export default {
  title: 'my-components',
  notes
};

export const Template = () => {
  const args: Components.MyComponent = {
    first: 'first',
    last: 'last',
    middle: 'middle'
  }
  return `<my-component first="${args.first}" middle="${args.middle}" last="${args.last}" ></my-component>`
};
