import type { FC } from "react";
import type { Gif } from "../interfaces/gif.interface";

interface GifsListProps {
  gifs: Gif[];
}

const GifsList: FC<GifsListProps> = ({ gifs }) => {
  return (
    <div
      className="grid grid-cols-2 gap-2.5 w-full max-w-300 mx-auto
    md:grid-cols-3 md:gap-5
    lg:grid-cols-4 lg:gap-7.5
    xl:grid-cols-5 xl:gap-10"
    >
      {gifs.map((gif) => (
        <div
          key={gif.id}
          className="flex flex-col items-center justify-center mb-12.5"
        >
          <img
            src={gif.url}
            alt={gif.title}
            className="w-full h-full object-cover rounded-[10px]"
          />
          <h3>{gif.title}</h3>
          <p>
            {gif.width} x {gif.height} (1.5mb)
          </p>
        </div>
      ))}
    </div>
  );
};

export default GifsList;
