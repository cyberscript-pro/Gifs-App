import { useState } from "react";
import { CustomHeader } from "./common/components/CustomHeader";
import { SearchBar } from "./common/components/SearchBar";
import PreviousSearches from "./gifs/components/PreviousSearches";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import GifsList from "./gifs/components/GifsList";
import type { Gif } from "./gifs/interfaces/gif.interface";

const GifsApp = () => {
  const [previousTerms, setPreviosTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleTermClicked = (term: string) => {
    console.log(term);
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
  };

  return (
    <div className="p-1 min-h-screen bg-[#242424] text-white">
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el gif perfecto"
      />

      <SearchBar placeholder="Buscar gifs" onQuery={handleSearch} />

      <PreviousSearches
        data={previousTerms}
        onSearchClicked={handleTermClicked}
      />
      <GifsList gifs={gifs} />
    </div>
  );
};

export default GifsApp;
