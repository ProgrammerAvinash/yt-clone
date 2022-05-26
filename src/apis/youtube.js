import axios from "axios";
const KEY = "AIzaSyBNhSW8MZHEuqvG-Xpa6zlXJ-KrmK0Cg2M";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
