import React from "react";
import Button from "./Button";

const btnList = [
  "all",
  "Trending",
  "Songs",
  "Gaming",
  "Cricket",
  "News",
  "Cooking",
  "Valentine",
  "Tech",
  "Amazing",
  "Data",
  "DSA ",
  "React",
  "Python",
];

const ButtonList = () => {
  return (
    <div className="flex overflow-hidden">
      {btnList.map((btn, btnIdx) => (
        <Button key={btnIdx} name={btn} />
      ))}
    </div>
  );
};

export default ButtonList;
