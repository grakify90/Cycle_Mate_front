import React, { useEffect, useState } from "react";
import "./CommunityDetail.scss";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneTopic, addReply } from "../store/oneTopic/actions";
import { selectTopicData } from "../store/oneTopic/selectors";
import { selectToken } from "../store/user/selectors";
import Reply from "../components/Reply";

export default function CommunityDetail() {
  const { topicId } = useParams();
  const id = parseInt(topicId);
  const dispatch = useDispatch();

  const [reply, setReply] = useState({ content: "", imageUrl: "" });

  useEffect(() => {
    dispatch(fetchOneTopic(id));
  }, [dispatch, id]);

  const createReply = () => {
    dispatch(addReply(id, reply));
    setReply({ content: "", imageUrl: "" });
  };

  const topicData = useSelector(selectTopicData);
  const token = useSelector(selectToken);

  if (!topicData) {
    return null;
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
            <img src={topicData.item.imageUrl} alt="" />
          </div>
        </div>
        {token === null ? (
          <div></div>
        ) : (
          <div className="replyInputContainer">
            <input
              type="textarea"
              value={reply.content}
              placeholder="Your reply..."
              onChange={(event) =>
                setReply({ ...reply, content: event.target.value })
              }
            />
            <input
              type="text"
              value={reply.imageUrl}
              placeholder="image URL (optional)"
              onChange={(event) =>
                setReply({ ...reply, imageUrl: event.target.value })
              }
            />
            <button onClick={createReply}>Submit</button>
          </div>
        )}
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
