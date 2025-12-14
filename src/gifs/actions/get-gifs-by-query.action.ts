import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "../api/giphy.api";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  try {
    const { data } = await giphyApi.get<GiphyResponse>("/search", {
      params: {
        q: query,
        limit: 25,
      },
    });

    return data.data.map((gif) => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.original.url,
      width: gif.images.original.width,
      height: gif.images.original.height,
    }));
  } catch (error) {
    console.error("Error fetching GIFs by query:", error);
    throw error;
  }
};
