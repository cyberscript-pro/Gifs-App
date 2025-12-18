import { useEffect, useState, type FC } from "react";

interface SearchBarProps {
  placeholder?: string;
  onQuery: (query: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({
  placeholder = "Buscar",
  onQuery,
}) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-center gap-2.5 mt-2.5">
      <input
        className="w-full max-w-xs p-2.5 border border-solid border-[#ccc] rounded-md text-lg text-[#333] bg-white"
        type="text"
        value={query}
        placeholder={placeholder}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleSearch}
        className="p-2.5 border border-solid border-[#ccc] rounded-md text-lg text-white bg-black cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#333]"
      >
        Buscar
      </button>
    </div>
  );
};
