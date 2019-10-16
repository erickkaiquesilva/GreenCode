import axios from "axios";
import { Redirect } from "react-router-dom";

const api = axios.create({
  baseURL: "http://3.211.16.250"
});

export default api;
