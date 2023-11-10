import { useEffect } from "react";

export function useApiFetch(url, setData) {
  useEffect(() => {
    const fetchInfo = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    };
    fetchInfo();
  }, [url, setData]);
}

function imageCreate(data) {
  if (data.file) {
    const imgData = new FormData();
    const filename = data.image;
    imgData.append("name", filename);
    imgData.append("file", data.file);
    const res = fetch("http://localhost:3001/api/upload", {
      method: "POST",
      body: imgData,
    });
    console.log(res);
  }
}

export function apiCreate(e, url, data, setStatus) {
  const addInfo = async (e) => {
    e.preventDefault();
    imageCreate(data);

    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    setStatus(result);
  };
  addInfo(e);
}

export function apiDelete(e, url, id, setStatus) {
  const deleteInfo = async (e) => {
    e.preventDefault();
    const res = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    console.log(result);
    setStatus(result);
  };
  deleteInfo(e);
}

export function apiEdit(e, url, data, id, setStatus) {
  const editInfo = async (e) => {
    e.preventDefault();
    imageCreate(data);
    const res = await fetch(`${url}/${id}`, {
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
  editInfo(e);
}
