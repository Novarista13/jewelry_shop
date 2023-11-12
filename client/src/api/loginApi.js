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

export function userEdit(data) {
  const editInfo = async () => {
    const res = await fetch(`http://localhost:3001/api/users/${data._id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    return result;
  };
  return editInfo();
}

export function userDelete(id) {
  const deleteInfo = async () => {
    const res = await fetch(`http://localhost:3001/api/users/${id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    return result;
  };
  return deleteInfo();
}

export function userAuth(url, data) {
  // let userData;
  const userInfo = async () => {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    return result;
  };
  return userInfo();
}
