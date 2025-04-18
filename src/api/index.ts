/* eslint-disable no-console */
import axios from "axios";

import { MemeType } from "@/types";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const api = {
  getMemes: async () => {
    try {
      return axiosInstance<{ data: Array<MemeType> }>("/memes", {
        params: { sort: { id: "desc" } },
      });
    } catch (error) {
      console.error(error);
    }
  },

  updateMeme: async (id: string, meme: unknown) => {
    try {
      return axiosInstance.put(`/memes/${id}`, { data: meme });
    } catch (error) {
      console.error(error);
    }
  },
};
