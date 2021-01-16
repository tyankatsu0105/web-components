import { Component, h, Prop, State, Watch,  } from '@stencil/core';
import {Types, Parse} from "../../utils";

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
  parseUser(newValue: Types.WithString<User>) {
    const value = Parse.parseValue(newValue)
    this._user = value
  }

  componentWillLoad() {
    this.parseUser(this.user)
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

