import React from "react";
import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import {FaCircleCheck, FaEllipsisVertical, FaPlus} from 'react-icons/fa6';
import '../../../index.css';
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
} from "../assignmentsReducer";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  

  const tempAssign = {...assignments.find((a) => a._id === assignmentId)};
  useEffect(() => {
    dispatch(selectAssignment(tempAssign));
  }, []);

  console.log(assignment);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    if (assignmentId === 'Create') {
      console.log('created');
      dispatch(addAssignment({ ...assignment, course: courseId }));
      
    }
    else {
      console.log('updated');
      dispatch(updateAssignment(assignment));
    }
    console.log(assignment);
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    
    
  };
  return (
    <div className="me-5">

        <div>
            <button className="float-end btn btn-light mt-1 me-1" type="button"><FaEllipsisVertical /></button>
            <h6 className="float-end mt-3 me-2" style={{"color": "green"}}>Published</h6>
            <FaCircleCheck className="float-end fa fa-check-circle mt-3 me-2" aria-hidden="true" style={{"color": "green"}}/>
            <div style={{"clear": "both"}}></div>
        </div>
        
        <hr/>


        <label className="form-label">Assignment Name</label>
        <form>
        <input className="form-control" type="text" value={assignment.title}
          onChange={(e) => dispatch(selectAssignment({ ...assignment, title: e.target.value }))}/>
        <br/> 
        <textarea className="form-control float-start w-75" value={assignment.description}
                onChange={(e) => dispatch(selectAssignment({ ...assignment, description: e.target.value }))}/>

        <br/>
        <br/>
        <br/>
        <label className="form-label">Points</label>
        <input className="form-control w-75" type="text" value={assignment.points}
        onChange={(e) => dispatch(selectAssignment({ ...assignment, points: e.target.value }))}/>
        <br/>
        <label className="form-label">Due</label>
        <input className="form-control w-75" type="date" value={assignment.due}
        onChange={(e) => dispatch(selectAssignment({ ...assignment, due: e.target.value }))}/>
        <br/>
        <label className="form-label">From</label>
        <input className="form-control w-75" type="date" value={assignment.from}
        onChange={(e) => dispatch(selectAssignment({ ...assignment, from: e.target.value }))}/>
        <br/>
        <label className="form-label">Until</label>
        <input className="form-control w-75" type="date" value={assignment.until}
        onChange={(e) => dispatch(selectAssignment({ ...assignment, until: e.target.value }))}/>


        
        <hr/>
        <div className="float-start form-check pt-2">
            <input className="form-check-input" type="checkbox" value="Text"
                id="chkbox-text" checked/>
            <label className="form-label" for="chkbox-text">Notify users that this content has changed</label>
        </div>

        <Link className="float-end ps-1"><button onClick={handleSave} className="btn btn-danger" type="button">Save</button> </Link>

        <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="float-end"><button className="btn btn-light" onClick={() => dispatch(selectAssignment({title: 'New Assignment'}))} type="button">Cancel</button> </Link>

        </form>


      
    </div>
  );
}


export default AssignmentEditor;