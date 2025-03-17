import { ThumbsDown, ThumbsUp, UserIcon } from "lucide-react";
import React, { useState } from "react";

const Comment = ({ data }) => {
  const { userName, comment, reply } = data;
  const [isReplying, setIsReplying] = useState(false);
  const showInput = () => {
    setIsReplying(!isReplying);
  };
  return (
    <div>
      <div className="flex shadow-sm bg-gray-100 p-2 rounded-md my-2">
        <UserIcon className="bg-white rounded-lg my-2" />
        <div className="px-3">
          <p className="font-semibold">{userName}</p>
          <p>{comment}</p>
        </div>
      </div>
      <div className="flex w-52 py-3 px-6 items-center">
        <ThumbsUp />
        <ThumbsDown className="ml-2" />
        <button
          onClick={showInput}
          className=" bg-gray-200 p-2 cursor-pointer font-semibold rounded-lg ml-6"
        >
          Reply
        </button>
      </div>
      {isReplying && (
        <>
          <input
            // value={addedComment}
            // onChange={(e) => handleComment(e)}
            type="text"
            className="w-full p-2 my-4 border-b border-gray-200 outline-none focus:border-b-black"
            placeholder="Add a comment"
          />
          <div className="w-full flex justify-end mb-4">
            <button
              onClick={showInput}
              className="p-3 bg-gray-200 cursor-pointer font-semibold rounded-lg"
            >
              Cancel
            </button>
            <button
              //   onClick={updateList}
              className="p-3 bg-gray-200 cursor-pointer font-semibold rounded-lg ml-4"
            >
              Reply
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Comment;
