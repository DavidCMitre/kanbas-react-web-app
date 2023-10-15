import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import {FaCircleCheck, FaEllipsisVertical, FaPlus} from 'react-icons/fa6';
import '../../../index.css';

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
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
        <input className="form-control" type="text" value={assignment.title}/>
        <br/> 



        <hr/>
        <div className="float-start form-check pt-2">
            <input className="form-check-input" type="checkbox" value="Text"
                id="chkbox-text" checked/>
            <label className="form-label" for="chkbox-text">Notify users that this content has changed</label>
        </div>

        <Link className="float-end ps-1"><button onClick={handleSave} className="btn btn-danger" type="button">Save</button> </Link>

        <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="float-end"><button className="btn btn-light" type="button">Cancel</button> </Link>

        </form>


      
    </div>
  );
}


export default AssignmentEditor;