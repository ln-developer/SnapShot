import React from "react";
import { useData } from '../hooks/useData';

export const userContext = React.createContext({});

export const UserContextProvider = ({children}) => {
  const [data] = useData()

  return (
    <userContext.Provider value={data}>
      {children}
    </userContext.Provider>
  )
}