import axios from 'axios';
import {createContext} from 'react';
import {useReducer} from 'react';

let user = null

export const AuthContext = createContext();

const INITIAL_STATE = {
  isAuth: user ? true : false,
  username: user ? user.username : null,
  id: user ? user._id : null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      axios.get('http://localhost:8000/user/auth',)
      .then(res => {
        user = res.data;
      })
      return {state}
    case 'LOGOUT':
      return{state}
    default: 
      return state;
  }
};

export const AuthProvider=(props)=>{
    const [state,dispatch] =useReducer(authReducer,INITIAL_STATE);
    return(
        <AuthContext.Provider value={{state,dispatch}}>{props.children}</AuthContext.Provider>
    )
}