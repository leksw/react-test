import React from "react";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import Liker from "./Liker";
import ReplayItems from "./ReplayItems";

function Comment({ comment, subComment}) {
  // let replElement = subComment === undefined ? <ReplayItems replies={replies}/> : null;

  return (
    <div>
      <div>{comment.name}:</div>
      <span
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(comment.commentText)
        }}
      />
      <div>
        <Liker count={comment.likes} />
      </div>
      { subComment === undefined ? <ReplayItems replies={comment.replies}/> : null }
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  subComment: PropTypes.bool
};

export default Comment;
