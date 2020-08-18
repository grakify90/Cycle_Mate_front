import React, { useState, useEffect } from "react";
import MessageBox from "../components/MessageBox";
import { TitleBlock } from "../styles/TitleBlock";
import { Button } from "../styles/Button";
import { FormContainer } from "../styles/FormContainer";
import { InnerFormContainer } from "../styles/InnerFormContainer";
import { addTopic } from "../store/topics/actions";
import { selectToken } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function AddTopic() {
  const [topic, setTopic] = useState({ title: "", content: "", imageUrl: "" });
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token === null) {
      history.push("/");
    }
  }, [dispatch, token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(
      addTopic({
        title: topic.title,
        content: topic.content,
        imageUrl: topic.imageUrl,
      })
    );

    setMessage(<MessageBox message="Successfully posted topic!" />);

    setTopic({ title: "", content: "", imageUrl: "" });
  }

  return (
    <div>
      <form>
        <h1>Add a topic</h1>
        <FormContainer>
          <div>{message}</div>
          <InnerFormContainer>
            <TitleBlock>Title</TitleBlock>
            <input
              value={topic.title}
              onChange={(event) =>
                setTopic({ ...topic, title: event.target.value })
              }
              type="text"
              placeholder="Title"
              required
            />
          </InnerFormContainer>
          <InnerFormContainer>
            <TitleBlock>Content</TitleBlock>
            <textarea
              value={topic.content}
              onChange={(event) =>
                setTopic({ ...topic, content: event.target.value })
              }
              placeholder="What's up?"
              required
            />
          </InnerFormContainer>{" "}
          <InnerFormContainer>
            <TitleBlock>Image URL</TitleBlock>
            <input
              value={topic.imageUrl}
              onChange={(event) =>
                setTopic({ ...topic, imageUrl: event.target.value })
              }
              type="text"
              placeholder="(optional)"
              required
            />
          </InnerFormContainer>
        </FormContainer>

        <div>
          <Button onClick={submitForm}>Submit</Button>
        </div>
      </form>
    </div>
  );
}
