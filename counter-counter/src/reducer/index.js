import { ActionTypes } from '../actions/index'

const initialState = {
  email: '',
  password: '',
}


export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_EMAIL:
    console.log('email', action.payload.email)
      return {
        ...state,
        email: action.payload,
        formSubmitted: false // after update user formsubmition reset
      }
    case ActionTypes.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload,
        formSubmitted: false // after update user formsubmition reset
      }
  
    default:
      return state;
  }
}

export default profileReducer;

