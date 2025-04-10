const BASE_URL = import.meta.env.VITE_server;

export const apiService = {
  // Generic CRUD operations
  async get(endpoint, useToken = false) {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
      headers: useToken
        ? { authorization: `Bearer ${localStorage.getItem("accessToken")}` }
        : {},
    });
    return await res.json();
  },

  async post(endpoint, data) {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  },

  async put(endpoint, id, data) {
    const headers = { "Content-Type": "application/json" };

    const token = localStorage.getItem("accessToken");
    if (token) {
      headers.authorization = `Bearer ${token}`;
    }
    const res = await fetch(`${BASE_URL}/${endpoint}/${id}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(data),
    });
    return await res.json();
  },

  async delete(endpoint, id) {
    const headers = { "Content-Type": "application/json" };

    const token = localStorage.getItem("accessToken");
    if (token) {
      headers.authorization = `Bearer ${token}`;
    }

    const res = await fetch(`${BASE_URL}/${endpoint}/${id}`, {
      method: "DELETE",
      headers,
    });
    return await res.json();
  },
};
