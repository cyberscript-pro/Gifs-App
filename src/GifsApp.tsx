import { CustomHeader } from "./common/components/CustomHeader";
import { SearchBar } from "./common/components/SearchBar";
import PreviousSearches from "./gifs/components/PreviousSearches";

const GifsApp = () => {
  return (
    <div className="p-1 min-h-screen bg-[#242424] text-white">
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el gif perfecto"
      />

      <SearchBar />

      <PreviousSearches
        data={[
          { title: "Goku" },
          { title: "Saitama" },
          { title: "Elden Ring" },
        ]}
      />
    </div>
  );
};

export default GifsApp;
