import React, { useEffect, useState } from "react";
import "./CommunityDetail.scss";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneTopic, addReply } from "../store/oneTopic/actions";
import { selectTopicData } from "../store/oneTopic/selectors";
import Reply from "../components/Reply";

export default function CommunityDetail() {
  const { topicId } = useParams();
  const id = parseInt(topicId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneTopic(id));
  }, [dispatch, id]);

  //Make this work
  const createReply = () => {
    dispatch(addReply(id));
  };

  const topicData = useSelector(selectTopicData);

  if (!topicData) {
    return <h1></h1>;
  }

  return (
    <div>
      {" "}
      <h1>{topicData.item.title}</h1>{" "}
      <div className="topicContainer">
        <div className="topicDetailContainer">
          <p>
            <span className="topicBar">Topic starter</span>
            <br /> {topicData.topicstarter.firstName}{" "}
            {topicData.topicstarter.lastName}
          </p>
          <p>
            <span className="topicBar">Created at</span>
            <br />{" "}
            {moment(topicData.item.createdAt).format("D MMM YYYY, HH:mm")}{" "}
          </p>
          <div className="topicContent">
            <p>{topicData.item.content}</p>
            <img src={topicData.item.imageUrl} />
          </div>
          <div className="replybutton">
            <button onClick={createReply}>Reply</button>
          </div>
        </div>
        {topicData.replies.map((reply, index) => {
          return (
            <Reply
              key={index}
              replierFirstName={reply.user.firstName}
              replierLastName={reply.user.lastName}
              time={reply.updatedAt}
              content={reply.content}
              imageUrl={reply.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
}
