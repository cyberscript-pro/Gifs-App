import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

const useGifs = () => {
  const [previousTerms, setPreviosTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);
  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    const data = await getGifsByQuery(term);
    setGifs(data);
    gifsCache.current[term] = data;
  };

  const handleSearch = async (query: string) => {
    if (query.length === 0) return;

    const queryConv = query.trim().toLowerCase();

    if (previousTerms.includes(query)) return;

    if (previousTerms.length >= 8) {
      previousTerms.pop();
    }

    setPreviosTerms([queryConv, ...previousTerms]);

    const data = await getGifsByQuery(queryConv);
    setGifs(data);

    gifsCache.current[queryConv] = data;
  };

  return {
    //Values
    gifs,
    previousTerms,

    //Methods
    handleTermClicked,
    handleSearch,
  };
};

export default useGifs;
