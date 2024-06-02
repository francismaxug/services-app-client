import { createContext, useContext, useReducer } from 'react';
import userDetailsReducer from '../utils/reducers';
// Create a new context
const UserDetails = createContext();


export default function UserDetailContext({ children }) {

  const [state, dispatch] = useReducer(userDetailsReducer, null);

  return (
    <UserDetails.Provider value={{ ...state, dispatch }}>
      {children}
    </UserDetails.Provider>
  );
}

export function useUserDetails() {
  return useContext(UserDetails);
}