import { useEffect } from "react";

export function useUserFetch(id, setData) {
  useEffect(() => {
    const fetchInfo = async () => {
      const res = await fetch(`http://localhost:3001/api/users/${id}`);
      const data = await res.json();
      setData(data);
    };
    fetchInfo();
  }, [id, setData]);
}

export function userAuth(url, data, setUserData) {
  const userInfo = async () => {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    setUserData(result);
  };
  userInfo();
}
