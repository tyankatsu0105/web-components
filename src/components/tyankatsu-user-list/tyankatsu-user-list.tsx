import { Component, h, Prop, State, Watch,  } from '@stencil/core';
import {Types, Parse} from "../../utils";

type Blood =  'A' | 'B' | 'O' | 'AB';

export type User = {
  name: string
  age: number
  blood: Blood
}

@Component({
  tag: 'tyankatsu-user-list',
  styleUrl: 'tyankatsu-user-list.css',
  shadow: true,
})
export class TyankatsuUserList {
  /**
   * List data of user
   */
  @Prop() users: Types.WithString<User[]>
  @State() _users: User[]

  @Watch('users')
  parseUsers(newValue: Types.WithString<User[]>) {
    const value = Parse.parseValue(newValue)
    this._users = value
  }

  componentWillLoad() {
    this.parseUsers(this.users)
  }

  render() {
    return (
      <ul>
        {this._users.map(user => <li>
          <div>Name: {user.name}</div>
          <div>Age: {user.age}</div>
          <div>Blood: {user.blood}</div>
        </li>)}
      </ul>
    );
  }
}

