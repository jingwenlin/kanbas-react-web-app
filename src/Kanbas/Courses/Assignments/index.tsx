import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import assignments from "../../Database/assignments.json";

import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentsReducer";
import { KanbasState } from "../../store";

function Assignments() {
  // const { courseId } = useParams();
  // const assignmentList = assignments.filter(
  //   (assignment) => assignment.course === courseId);

  const { cid } = useParams();
  // const assignmentList = assignments.filter((assignments) => assignments.course === cid);
  const assignmentList = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignments);
  const assignment = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  return (
    <>
      {/* {<!-- Add buttons and other fields here -->} */}
      <ul className="list-group wd-modules">
        <li className="list-group-item">
        <button
                onClick={() => dispatch(addAssignment({ ...assignment, course: cid }))}>
                Add
            </button>
            <button
                onClick={() => dispatch(updateAssignment(assignment))}>
                Update
            </button>
            <input value={assignment.name}
            onChange={(e) =>
                dispatch(setAssignment({ ...assignment, name: e.target.value }))}
            />
            <textarea value={assignment.description}
            onChange={(e) =>
                dispatch(setAssignment({ ...assignment, description: e.target.value }))}    
            />

          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          
          
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">

                <button
                  onClick={() => dispatch(setAssignment(assignment))}>
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteAssignment(assignment._id))}>
                  Delete
                </button>

                <FaEllipsisV className="me-2" />
                {assignment.name}
                <br/>
                {assignment.description}
                <br/>
                {assignment._id}
                <Link
                   to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;




