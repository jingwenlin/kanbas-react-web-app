import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import database from "../../../Database"; // Assuming this import gives you an object with courses, modules, and assignments

function AssignmentEditor() {
  const navigate = useNavigate();
  const { courseId, assignmentId } = useParams();

  // Access the assignments array within the imported database object
  const assignment = database.assignments.find((assn) => assn._id === assignmentId);

  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div>
      <h2>Assignment Editor</h2>
      <input 
        value={assignment.title}
        onChange={(e) => {/* handle change */}} // You should handle the change to update the title
        className="form-control mb-2" 
      />
      <button onClick={handleSave} className="btn btn-success ms-2 float-end">
        Save
      </button>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger float-end">
        Cancel
      </Link>
    </div>
  );
}

export default AssignmentEditor;
