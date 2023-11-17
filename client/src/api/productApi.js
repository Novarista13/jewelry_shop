
export function apiFetch(url, setData) {
  const fetchInfo = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  };
  fetchInfo();
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
  }
}

export function apiCreate(url, data) {
  const addInfo = async () => {
    imageCreate(data);

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
  return addInfo();
}

export function apiDelete(url, id) {
  const deleteInfo = async () => {
    const res = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    return result;
  };
  return deleteInfo();
}

export function apiEdit(url, data) {
  const editInfo = async () => {
    imageCreate(data);
    const res = await fetch(`${url}/${data._id}`, {
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
