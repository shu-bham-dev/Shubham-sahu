import React, { useState } from "react";
import { HeartIcon } from "@heroicons/react/outline";

const MultimediaContainer = ({ mediaList }) => {
  const [favorites, setFavorites] = useState([]);

  const handleFavorite = (media) => {
    if (favorites.includes(media)) {
      setFavorites(favorites.filter((fav) => fav !== media));
    } else {
      setFavorites([...favorites, media]);
    }
  };

  return (
    <div className="flex flex-wrap w-4/5">
      {mediaList.map((media, index) => (
        <div key={index} className="w-64 h-64 md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <div className="w-full h-full bg-gray-100 p-1 rounded-lg shadow-lg relative overflow-hidden">
            {media.type === "image" ? (
              <img
                src={media.src}
                alt="Image"
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={media.src}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
              />
            )}
            <div className="absolute top-2 left-2">
              {favorites.includes(media) ? (
                <HeartIcon
                  className="h-6 w-6 text-red-500 cursor-pointer bg-red-700"
                  onClick={() => handleFavorite(media)}
                />
              ) : (
                <HeartIcon
                  className="h-6 w-6 text-gray-500 cursor-pointer"
                  onClick={() => handleFavorite(media)}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultimediaContainer;
