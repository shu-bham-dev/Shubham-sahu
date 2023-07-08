import React from "react";

const Title = ({ text }) => {
  return (
    <div className="flex items-center justify-center w-1/2 h-auto bg-gray-200 p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl text-gray-800">{text}</h2>
    </div>
  );
};

export default Title;
