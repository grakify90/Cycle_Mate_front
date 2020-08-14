import React, { useState, useEffect } from "react";
import { addTopic } from "../store/topics/actions";
import { selectToken } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function AddTopic() {
  const [topic, setTopic] = useState({ title: "", content: "", imageUrl: "" });
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

    setTopic({ title: "", content: "", imageUrl: "" });
  }

  return (
    <div>
      <form>
        <h1>Add a topic</h1>
        <div className="formContainer">
          <div className="formItemContainer">
            <label className="logtripBar">Title</label>
            <input
              value={topic.title}
              onChange={(event) =>
                setTopic({ ...topic, title: event.target.value })
              }
              type="text"
              placeholder="Title"
              required
            />
          </div>
          <div className="formItemContainer">
            <label className="logtripBar">Content</label>
            <textarea
              value={topic.content}
              onChange={(event) =>
                setTopic({ ...topic, content: event.target.value })
              }
              placeholder="What's up?"
              required
            />
          </div>{" "}
          <div className="formItemContainer">
            <label className="logtripBar">Image URL</label>
            <input
              value={topic.imageUrl}
              onChange={(event) =>
                setTopic({ ...topic, imageUrl: event.target.value })
              }
              type="text"
              placeholder="(optional)"
              required
            />
          </div>
        </div>

        <div>
          <button onClick={submitForm}>Submit</button>
        </div>
      </form>
    </div>
  );
}
