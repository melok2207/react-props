import React from "react";

const Card = ({ title, description, image }) => {
  const handleClick = () => {
    alert(title);
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md text-center">
      <img src={image} alt={title} className="w-full max-h-52 object-cover rounded-lg" />
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <button
        onClick={handleClick}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Дізнатися більше
      </button>
    </div>
  );
};

export default Card;
