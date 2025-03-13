const BASE_URL = import.meta.env.VITE_server;

export const apiService = {
  // Generic CRUD operations
  async get(endpoint) {
    const res = await fetch(`${BASE_URL}/${endpoint}`);
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
    const res = await fetch(`${BASE_URL}/${endpoint}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  },

  async delete(endpoint, id) {
    const res = await fetch(`${BASE_URL}/${endpoint}/${id}`, {
      method: "DELETE",
    });
    return await res.json();
  },
};
