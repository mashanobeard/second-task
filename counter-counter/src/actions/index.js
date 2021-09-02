import { Types } from '../actions/actionTypes';

export const ActionCreators = {

  updateEmail: (email) => ({ type: Types.UPDATE_EMAIL, payload: { email } }),

  updatePassword: (password) => ({ type: Types.UPDATE_PASSWORD, payload: { password } }),
}