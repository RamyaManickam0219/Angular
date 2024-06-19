import { createReducer, on, Action } from '@ngrx/store';
import { User } from '../../models/user.model';
import * as UserActions from './user.actions';

export interface UserState {
  users: User[];
  loading: boolean;
  error: any;
}

export const initialState: UserState = {
  users: [],
  loading: false,
  error: null
};

const userReducer = createReducer(
  initialState,

  on(UserActions.updateUserSuccess, (state, { user }) => ({
    ...state,
    users: state.users.map(u => (u.id === user.id ? user : u)),
    error: null
  })),

  on(UserActions.updateUserFailure, (state, { error }) => ({
    ...state,
    error
  })),

);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
