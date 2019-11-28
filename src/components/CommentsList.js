import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { denormalize } from "normalizr";
import { commentsList } from "../redux/schemas";
import { fetchComments } from "../redux/actions";
import Comment from "./Comment";

function CommentsList() {
  const dispatch = useDispatch();
  const { error, loading, comments } = useSelector(state => state.comments);
  let denormalizeComments;

  useEffect(() => {
    dispatch(fetchComments());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (comments) {
    denormalizeComments = denormalize(
      comments.result,
      commentsList,
      comments.entities
    );
  }

  return denormalizeComments ? (
    <div>
      <h3>Comments:</h3>
      <ul className="comments">
        {denormalizeComments.map(comment => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <strong>Not yet comments</strong>
  );
}

export default CommentsList;
