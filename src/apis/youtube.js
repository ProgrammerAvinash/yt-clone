import axios from "axios";
const KEY = "AIzaSyCFAkM1zkw1MGKKGyusi7LdDBo7jMNvlIQ";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
