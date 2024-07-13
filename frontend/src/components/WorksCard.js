import "./index.css";
import { useWorksContext } from "../hooks/useWorksHooks";

const WorksCard = ({ works }) => {
  const { dispatch } = useWorksContext();

  const handleUpdate = async () => {
    const updatedWorks = {
      title: "Updated Title",
      description: "Updated Description",
    };
    const response = await fetch("/api/work/" + works._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedWorks),
    });
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: "UPDATE_WORKPIN", payload: data });
    } else {
      alert("Failed to update work");
    }
  };

  const handleDelete = async () => {
    const response = await fetch("/api/work/" + works._id, {
      method: "DELETE",
    });
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKPIN", payload: data });
    } else {
      alert("Failed to delete work");
    }
  };
  return (
    <div className="card">
      <div className="notification">
        <div className="notiglow"></div>
        <div className="notiborderglow"></div>
        <div className="notititle">{works.title}</div>
        <button className="delete" onClick={handleDelete}>
          delete
        </button>
        <button className="delete" onClick={handleUpdate}>
          update
        </button>
        <div className="notibody">{works.description}</div>
      </div>
    </div>
  );
};

export default WorksCard;
