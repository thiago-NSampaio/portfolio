import axios from "axios";
export const api = axios.create({
  baseURL: "https://portfolio-api-kappa-nine.vercel.app/",
});
