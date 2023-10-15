import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "../../index.css";
import {FaCircleCheck, FaEllipsisVertical, FaPlus} from 'react-icons/fa6';
import {FaGripVertical, FaFilePen} from 'react-icons/fa6';


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>


        <div>
            <input className="float-start form-control w-25" placeholder="Search for Assignment"/>
            
            
            <button className="float-end btn btn-light me-1" type="button"><FaEllipsisVertical /></button>
            <button className="float-end btn btn-danger me-1" type="button"><FaPlus /> Assignment</button>
            <button className="float-end btn btn-light me-1" type="button"><FaPlus/>Group</button>
            
            
            <div style={{"clear": "both"}}></div>
        </div>
        
        <hr/>

        <div className="list-group me-4">
                    <a className="list-group-item list-group-item-secondary" aria-current="true">
                       <div>
                          <FaGripVertical className="float-start mt-1 pe-1" style={{"color": "darkslategray"}}/>
                          <h5 className="float-start mb-1">Assignments</h5>
                          <FaEllipsisVertical className="float-end fa mt-1" aria-hidden="true" style={{"color": "black", "margin-left":"15px"}}/>
                          <FaPlus className="float-end mt-1" aria-hidden="true" style={{"color":"black"}}/>
                          <span className="float-end badge bg-light rounded-pill border border-dark me-2" style={{"font-weight": "normal", "color": "black"}}>40% of Total</span>
                          <div style={{"clear": "both"}}></div>
                       </div> 
                    </a>
        

                    {courseAssignments.map((assignment) => (
                         <div class="greenbar list-group-item list-group-item-action">
                            <div>
                                
                            <FaGripVertical className="float-start mt-1 pe-1" style={{"line-height":"50px", "color": "darkslategray"}}/>
                            <FaFilePen className="float-start mt-1 pe-2 ps-2" style={{"color": "green", "line-height":"50px"}}/>
                                
                            <div className="float-start mb-1 ms-2">
                                <Link 
                                key={assignment._id}
                                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                >
                                    <h6 className="no-margins" style={{"color": "black"}}>{assignment.title}</h6>
                                </Link>

                                <div className="card-text" style={{"color": "grey"}}><b>Due</b> Sep. 18 2022, 11:59pm | 100pts</div>
                            </div>
        

                            <FaEllipsisVertical className="float-end fa" aria-hidden="true" style={{"line-height":"50px", "color": "black", "margin-left":"15px"}}/>
                            <FaCircleCheck className="float-end fa" aria-hidden="true" style={{'line-height':'50px', 'color': 'green'}}/>

                            <div style={{"clear": "both"}}></div>
                            </div>
                         </div>
                        
                    ))}

                   
        
        </div>            

      
    </div>
  );
}
export default Assignments;