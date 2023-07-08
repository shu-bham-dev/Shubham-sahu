import React from "react";
import MultimediaContainer from "./MultimediaContainer";
import { mediaList } from "../data/mediaURL";
import Title from "./Title";

const Home = () => {
  return (
    <div>
      <div className="flex">
        <MultimediaContainer mediaList={mediaList} />
        <Title text={"Multimedia Container"} />
      </div>
    </div>
  );
};

export default Home;
