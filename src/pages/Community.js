import React, { useEffect } from "react";
import "./Community.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopics } from "../store/topics/actions";
import { selectTopics, selectTopicsLoading } from "../store/topics/selectors";
import { selectToken } from "../store/user/selectors";
import TopicCard from "../components/TopicCard";

export default function Community() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopics());
  }, [dispatch]);

  const allTopics = useSelector(selectTopics);
  const isLoading = useSelector(selectTopicsLoading);
  const token = useSelector(selectToken);

  if (isLoading) {
    return null;
  }

  return (
    <div className="topicsContainer">
      {token && <button>Add a topic</button>}

      {allTopics.map((topic, index) => {
        return (
          <TopicCard
            key={index}
            id={topic.id}
            title={topic.title}
            content={topic.content}
            lengthReplies={topic.replies.length}
          />
        );
      })}
    </div>
  );
}
