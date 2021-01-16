import { Component, h, Prop, State, Watch,  } from '@stencil/core';

type Blood =  'A' | 'B' | 'O' | 'AB';

export type User = {
  name: string
  age: number
  blood: Blood
}

export type ArrayProp<T> = T | string

@Component({
  tag: 'tyankatsu-user-list',
  styleUrl: 'tyankatsu-user-list.css',
  shadow: true,
})
export class TyankatsuUserList {
  @Prop() users: ArrayProp<User[]>
  @State() _users: User[]

  @Watch('users')
  parseUsers(newValue: ArrayProp<User[]>) {
    if (typeof newValue === 'string') {
      this._users = JSON.parse(newValue);
   }
   else {
     this._users = newValue;
   }
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

