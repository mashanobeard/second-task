
import { handleActions } from 'redux-actions';
import { updateEmail, updatePassword } from '../actions';

const initialState = {
  email: '',
  password: '',
}

 const FormReducer = handleActions(
{
  [updateEmail] : ( state,action) =>({
    ...state,
     email: action.payload
   }),
   [updatePassword] : ( state, action) => ({
     ...state,
      password: action.payload,
})
},
 initialState
 )

export default FormReducer;

