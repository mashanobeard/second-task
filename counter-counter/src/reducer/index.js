import { Types } from '../constants/actionTypes';


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.UPDATE_EMAIL:
    console.log('email', action.payload.email)
      return {
        ...state,
        profile: action.payload.email,
        formSubmitted: false // after update user formsubmition reset
      }
    case Types.UPDATE_PASSWORD:
      return {
        ...state,
        profile: action.payload.password,
        formSubmitted: false // after update user formsubmition reset
      }
  
    default:
      return state;
  }
}

export default reducer;


