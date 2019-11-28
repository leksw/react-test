import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import DOMPurify from "dompurify";
import { fetchArticles } from "../redux/actions";
import CommentsList from "./CommentsList";

function Artilce() {
  const dispatch = useDispatch();
  const { error, loading, article } = useSelector(state => state.article);

  useEffect(() => {
    dispatch(fetchArticles());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <strong>
        <Moment format="DD-MM-YYYY HH:mm">{article.date}</Moment>
      </strong>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.text) }}
      />
      <CommentsList />
    </div>
  );
}

export default Artilce;
