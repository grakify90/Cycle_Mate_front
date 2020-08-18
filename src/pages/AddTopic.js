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
import { storage } from "../firebase";

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

  async function submitForm(event) {
    event.preventDefault();
    try {
      const uploadTask = storage
        .ref(`images/${topic.imageUrl.name}`)
        .put(topic.imageUrl);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(topic.imageUrl.name)
            .getDownloadURL()
            .then((url) => {
              dispatch(addTopic({ ...topic, imageUrl: url }));
              setMessage(<MessageBox message="Successfully posted topic!" />);
              setTopic({ title: "", content: "", imageUrl: "" });
            });
        }
      );
    } catch (error) {
      console.log(error.message);
    }
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
            <TitleBlock>Image</TitleBlock>
            <input
              type="file"
              onChange={(event) =>
                event.target.files[0] &&
                setTopic({ ...topic, imageUrl: event.target.files[0] })
              }
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
