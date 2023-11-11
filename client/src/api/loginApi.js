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

export function userEdit(data, id, setStatus) {
  const editInfo = async () => {
    const res = await fetch(`http://localhost:3001/api/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    console.log(result);
    setStatus(result);
  };
  editInfo();
}

export function userDelete(id, setStatus) {
  const deleteInfo = async () => {
    const res = await fetch(`http://localhost:3001/api/users/${id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    console.log(result);
    setStatus(result);
  };
  deleteInfo();
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
