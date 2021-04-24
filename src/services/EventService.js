import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents(perPage, pageNumber) {
    let method = `/events?_limit=${perPage}&_page=${pageNumber}`;

    return apiClient.get(method);
  },
  getEvent(id) {
    return apiClient.get("/events/" + id);
  },
};
