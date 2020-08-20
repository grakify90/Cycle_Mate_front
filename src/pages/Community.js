import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TopicCard from "../components/TopicCard";
import { fetchTopics } from "../store/topics/actions";
import { selectTopics, selectTopicsLoading } from "../store/topics/selectors";
import { selectToken } from "../store/user/selectors";

import { Container } from "../styles/Container";
import { Button } from "../styles/Button";

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
    <Container>
      {token && (
        <Link to="/addtopic">
          <Button primary>Add a topic</Button>
        </Link>
      )}

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
    </Container>
  );
}
