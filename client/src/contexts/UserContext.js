import { useState, createContext } from "react";

export const UserIdContext = createContext();

export default function UserIdProvider({ children }) {
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  return (
    <UserIdContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserIdContext.Provider>
  );
}
