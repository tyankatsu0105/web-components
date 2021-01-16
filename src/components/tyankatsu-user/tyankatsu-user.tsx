import { Component, h, Prop, State, Watch,  } from '@stencil/core';
import {Types} from "../../utils";

type Blood =  'A' | 'B' | 'O' | 'AB';

export type User = {
  name: string
  age: number
  blood: Blood
}

@Component({
  tag: 'tyankatsu-user',
  styleUrl: 'tyankatsu-user.css',
  shadow: true,
})
export class TyankatsuUserList {
  /**
   * Data of user
   */
  @Prop() user: Types.WithString<User>
  @State() _user: User

  @Watch('user')
  parseUsers(newValue: Types.WithString<User>) {
    if (typeof newValue === 'string') {
      this._user = JSON.parse(newValue);
   }
   else {
     this._user = newValue;
   }
  }

  componentWillLoad() {
    this.parseUsers(this.user)
  }

  render() {
    return (
      <ul>
        <li>
          <div>Name: {this._user.name}</div>
          <div>Age: {this._user.age}</div>
          <div>Blood: {this._user.blood}</div>
        </li>
      </ul>
    );
  }
}

