import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  url: "https://youtube-v31.p.rapidapi.com/search",
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "c750ce9540msh03f87daa89c19e2p178538jsn27729",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
