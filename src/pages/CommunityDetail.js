import React, { useEffect, useState } from "react";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Reply from "../components/Reply";
import { storage } from "../firebase";
import { fetchOneTopic, addReply } from "../store/oneTopic/actions";
import { selectTopicData } from "../store/oneTopic/selectors";
import { selectToken } from "../store/user/selectors";

import { DetailContainer } from "../styles/DetailContainer";
import { InnerDetailContainer } from "../styles/InnerDetailContainer";
import { TitleBlock } from "../styles/TitleBlock";
import { Button } from "../styles/Button";
import { TopicContent, ReplyContainer } from "./CommunityDetail.Styles";

export default function CommunityDetail() {
  const { topicId } = useParams();
  const id = parseInt(topicId);
  const dispatch = useDispatch();

  const [reply, setReply] = useState({ content: "", imageUrl: null });

  // progress holds the state of uploading and receiving back the URL (in percentage)
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    dispatch(fetchOneTopic(id));
  }, [dispatch, id]);

  const createReply = async () => {
    if (reply.imageUrl) {
      try {
        //Uploading local file to Firebase and enpoint and receiving URL back
        const uploadTask = storage
          .ref(`images/${reply.imageUrl.name}`)
          .put(reply.imageUrl);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          (error) => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(reply.imageUrl.name)
              .getDownloadURL()
              .then((url) => {
                dispatch(addReply(id, { ...reply, imageUrl: url }));
              })
              .then(() => {
                setReply({ content: "", imageUrl: "" });
              });
          }
        );
      } catch (error) {
        console.log(error.message);
      }
    } else {
      dispatch(addReply(id, { ...reply, imageUrl: "" }));
      setReply({ content: "", imageUrl: "" });
    }
  };

  const topicData = useSelector(selectTopicData);
  const token = useSelector(selectToken);

  if (!topicData) {
    return null;
  }

  //newest replies will show up on the top
  const compare = (a, b) => {
    if (a.createdAt > b.createdAt) {
      return -1;
    }
    if (a.createdAt < b.createdAt) {
      return 1;
    }
    return 0;
  };

  const sortedReplies = topicData.replies.sort(compare);

  return (
    <div>
      {" "}
      <DetailContainer>
        <InnerDetailContainer primary>
          <h1>{topicData.item.title}</h1>{" "}
          <p>
            <TitleBlock primary>Topic starter</TitleBlock>
            <br /> {topicData.topicstarter.firstName}{" "}
            {topicData.topicstarter.lastName}
          </p>
          <p>
            <TitleBlock primary>Created at</TitleBlock>
            <br />{" "}
            {moment(topicData.item.createdAt).format("D MMM YYYY, HH:mm")}{" "}
          </p>
          <TopicContent>
            <p>{topicData.item.content}</p>
            <img src={topicData.item.imageUrl} alt="" />
          </TopicContent>
        </InnerDetailContainer>
        {token === null ? (
          <div></div>
        ) : (
          <ReplyContainer>
            <input
              type="textarea"
              value={reply.content}
              placeholder="Your reply..."
              onChange={(event) =>
                setReply({ ...reply, content: event.target.value })
              }
            />
            <progress value={progress} max="100" />
            <input
              type="file"
              onChange={(event) =>
                event.target.files[0] &&
                setReply({ ...reply, imageUrl: event.target.files[0] })
              }
            />
            <Button primary onClick={createReply}>
              Submit
            </Button>
          </ReplyContainer>
        )}
        {sortedReplies.map((reply, index) => {
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
      </DetailContainer>
    </div>
  );
}
