import axios from "axios";

export const api = axios.create({
  baseURL: "https://6825caf30f0188d7e72e7b5b.mockapi.io/api/v1/",
});