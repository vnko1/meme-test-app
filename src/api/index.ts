import axios from "axios";

import { MemeType } from "@/types";

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const api = {
  getMemes: async () => {
    try {
      const response = await apiInstance<{ data: Array<MemeType> }>(
        "/memes",
        { params: { populate: { image: { fields: ["url"] } } } }
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
