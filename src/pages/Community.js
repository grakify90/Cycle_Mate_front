import React, { useEffect } from "react";
import "./Community.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopics } from "../store/topics/actions";
import { selectTopics, selectTopicsLoading } from "../store/topics/selectors";
import TopicCard from "../components/TopicCard";

export default function Community() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopics());
  }, [dispatch]);

  const allTopics = useSelector(selectTopics);
  const isLoading = useSelector(selectTopicsLoading);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="topicsContainer">
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
