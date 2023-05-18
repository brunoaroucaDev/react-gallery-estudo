import axios from "axios";

const BASE = 'https://jsonplaceholder.typicode.com';

export const api = {
  getAllAlbums: async () => {
    let response = await axios.get(`${BASE}/albums`);
    return response.data;
  },
  getAlbum: async (id: string | undefined) => {
    let response = await axios.get(`${BASE}/albums/${id}/photos`);
    return response.data;
  }

}