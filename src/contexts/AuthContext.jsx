import { createContext, useState } from "react";

//first is create the context
const AuthContext = createContext();

//the second thing is to create a Wrapper
const AuthWrapper = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({ name: "Ragnar", age: 3 });
  return (
    <AuthContext.Provider
      value={{ currentUser: currentUser, setCurrentUser: setCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthWrapper };
