interface PreviousSearchesProps {
  data: string[];
  onSearchClicked: (item: string) => void;
}

const PreviousSearches = ({ data, onSearchClicked }: PreviousSearchesProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2.5 mt-2.5">
      <h2 className="text-2xl font-bold m-0 text-center">Búsquedas Previas</h2>
      <ul className="flex items-center justify-center gap-2.5 list-none pt-4 m-0 flex-wrap max-w-96">
        {data.map((item) => (
          <li
            key={item}
            onClick={() => onSearchClicked(item)}
            className="py-1.5 px-2.5 border border-solid border-[#ccc] rounded-md cursor-pointer text-[14px] font-normal text-white bg-black mb-5 transition-colors duration-300 ease-in-out hover:bg-[#333]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PreviousSearches;
