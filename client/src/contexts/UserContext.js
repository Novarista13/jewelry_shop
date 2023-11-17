import { useState, createContext } from "react";

export const UserIdContext = createContext();

export default function UserIdProvider({ children }) {
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [reload, setReload] = useState(0);
  return (
    <UserIdContext.Provider value={{ userId, setUserId, reload, setReload }}>
      {children}
    </UserIdContext.Provider>
  );
}
