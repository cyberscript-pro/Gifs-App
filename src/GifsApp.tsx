import { CustomHeader } from "./common/components/CustomHeader";
import { SearchBar } from "./common/components/SearchBar";
import PreviousSearches from "./gifs/components/PreviousSearches";
import GifsList from "./gifs/components/GifsList";
import useGifs from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { gifs, previousTerms, handleTermClicked, handleSearch } = useGifs();

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
