import { createAction } from "redux-actions";

export const ActionTypes = {
  UPDATE_EMAIL: 'UPDATE_EMAIL',
  UPDATE_PASSWORD: 'UPDATE_PASSWORD',
}

export const profileActions = {
  updateEmail: (payload) => ({ type: ActionTypes.UPDATE_EMAIL, payload }),
  updatePassword: (payload) => ({ type: ActionTypes.UPDATE_PASSWORD, payload }),




}
