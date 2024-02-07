import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const value = { user, setUser };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
