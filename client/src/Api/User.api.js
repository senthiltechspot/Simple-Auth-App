import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export async function getUser() {
  return axios.get(`${BASE_URL}/api/v1/user/get`, {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  });
}

export async function updateUser(data) {
  return axios.put(`${BASE_URL}/api/v1/user/update`, data, {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  });
}
