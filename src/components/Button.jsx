import React from "react";

const Button = ({ name }) => {
  return (
    <button className="px-5 m-2 rounded-lg py-2 bg-gray-200">{name}</button>
  );
};

export default Button;
