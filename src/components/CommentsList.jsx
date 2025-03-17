import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return comments.map((comment, idx) => (
    <div>
      <Comment key={idx} data={comment} />
      {comment.replies && (
        <div className="ml-5 border border-l-black pl-5 ">
          <CommentsList key={idx} comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

export default CommentsList;
