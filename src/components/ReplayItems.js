import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";

function renderCommentReplies(replies) {
  const commentReplies = replies.map(replay => {
    let subReplies;
    if (replay.replies && replay.replies.length > 0) {
      subReplies = renderCommentReplies(replay.replies)
    }
    return (
      <li key={ replay.id }>
        <Comment {...{comment: replay, subComment: false}} />
        { subReplies }
      </li>
    );
  });

  return (
    <ul>
      { commentReplies }
    </ul>
  )
}

function ReplayItems({ replies }) {
  return (
    <ul className="replies">{renderCommentReplies(replies)}</ul>
  );
}

ReplayItems.propTypes = {
  replies: PropTypes.array.isRequired,
};

export default ReplayItems;
