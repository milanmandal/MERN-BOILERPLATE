import {createContext} from 'react';
import {useReducer} from 'react';

export const AuthContext = createContext();

const INITIAL_STATE = {
  isAuth: false,
  token:null
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return (
        state.isAuth= true,
        state.token= action.payload.token
      )
    case 'LOGOUT':
      return{state}
    default: 
      return state;
  }
};

export const AuthProvider=(props)=>{
    const [state,dispatch] = useReducer(authReducer,INITIAL_STATE);
    return(
      <AuthContext.Provider value={{state,dispatch}}>{props.children}</AuthContext.Provider>
    )
}