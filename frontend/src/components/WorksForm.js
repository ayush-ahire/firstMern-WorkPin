import "./index.css";
import { useState } from "react";
import { useWorksContext } from "../hooks/useWorksHooks";

const WorksForm = () => {
  const { dispatch } = useWorksContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    const works = { title, description };
    const response = await fetch("api/work", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(works),
    });
    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
    }
    if (response.ok) {
      console.log("new workout is added");
      setDescription("");
      setTitle("");
      setError(null);
      dispatch({ type: "CREATE_WORKPIN", payload: data });
    }
  };
  return (
    <div className="inputForm" onSubmit={handleSubmit}>
      <form>
        <input
          placeholder="Enter your title..."
          className="input"
          name="text"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          placeholder="Enter your work description ..."
          className="input"
          name="text"
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button className="btn">Add Work</button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default WorksForm;
