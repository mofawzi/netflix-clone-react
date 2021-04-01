import axios from "axios";

// * Adding base URL

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
