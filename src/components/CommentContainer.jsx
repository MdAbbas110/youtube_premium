import { comment } from "postcss";
import React, { useState } from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";

const commentData = [
  {
    id: 1,
    userName: "John",
    comment: "This is a great post",
    like: 10,
    replies: [
      {
        id: 1.1,
        userName: "Jane",
        comment: "I agree with you",
        like: 5,
        replies: [
          {
            id: 1.1,
            userName: "Jane",
            comment: "I agree with you",
            like: 5,
            replies: [
              {
                id: 1.1,
                userName: "Jane",
                comment: "I agree with you",
                like: 5,
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    userName: "John",
    comment: "This is a great post",
    like: 10,
    replies: [],
  },
  {
    id: 4,
    userName: "John",
    comment: "This is a great post",
    like: 10,
    replies: [
      {
        id: 4.1,
        userName: "Jane",
        comment: "I agree with you",
        like: 5,
        replies: [],
      },
    ],
  },
];

const CommentContainer = () => {
  const [commentsData, setCommentsData] = useState([]);
  const [addedComment, setAddedComment] = useState("");

  const addComment = (e) => {
    e.preventDefault();
    setAddedComment("");

    commentsData.unshift({
      userName: "Jon doe",
      comment: addedComment,
      replies: [],
    });
  };

  return (
    <div className="m-5 p-2 ">
      <h1 className="text-2xl font-bold">{commentsData.length} Comment</h1>
      <form onSubmit={(e) => addComment(e)}>
        <input
          value={addedComment}
          onChange={(e) => setAddedComment(e.target.value)}
          type="text"
          className="w-full p-2 my-4 border-b border-gray-200 outline-none focus:border-b-black"
          placeholder="Add a comment"
        />
        <div className="w-full flex justify-end mb-4">
          <button className="p-3 bg-gray-200 cursor-pointer font-semibold rounded-lg">
            Cancel
          </button>
          <button
            onClick={addComment}
            className="p-3 bg-gray-200 cursor-pointer font-semibold rounded-lg ml-4"
          >
            Comment
          </button>
        </div>
      </form>
      <CommentsList comments={commentsData} commentsArray={setCommentsData} />
    </div>
  );
};

export default CommentContainer;
