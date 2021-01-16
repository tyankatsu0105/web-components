import { Component, Prop, h, Watch } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  private _arrayData: {name: string}[];

  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * List data of user
   */
  @Prop() users: {name: string}[] | string;

  @Watch('users')
  arrayDataWatcher(newValue: {name: string}[] | string) {
    if (typeof newValue === 'string') {
       this._arrayData = JSON.parse(newValue);
    }
    else {
      this._arrayData = newValue;
    }
  }

  componentWillLoad() {
    this.arrayDataWatcher(this.users);
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }


  render() {
    return <div>
      <div>Hello, World! I'm {this.getText()}</div>
      {this._arrayData.map(user => <div>{user.name}</div>)}
    </div>
  }
}
