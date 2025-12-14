export const SearchBar = () => {
  return (
    <div className="flex items-center justify-center gap-2.5 mt-2.5">
      <input
        className="w-full max-w-xs p-2.5 border border-solid border-[#ccc] rounded-md text-lg text-[#333] bg-white"
        type="text"
        placeholder="Buscar gifs"
      />
      <button className="p-2.5 border border-solid border-[#ccc] rounded-md text-lg text-white bg-black cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#333]">
        Buscar
      </button>
    </div>
  );
};
