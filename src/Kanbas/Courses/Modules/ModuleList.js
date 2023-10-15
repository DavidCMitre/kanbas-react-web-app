import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {FaGripVertical} from 'react-icons/fa6';
import {FaCircleCheck, FaEllipsisVertical, FaPlus} from 'react-icons/fa6';


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;




  return (
    <div>
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (

            <div class="list-group mb-5 me-3">
                     <a key={index} className="list-group-item list-group-item-secondary" aria-current="true">
                        <div>
                           <FaGripVertical className="float-start mt-1 pe-1" style={{"color": "darkslategray"}}/>
                           <h6 className="float-start mb-1">{module.name} - {module.description}</h6>
                           <FaEllipsisVertical className="float-end fa mt-1" aria-hidden="true" style={{"color": "black", "margin-left":"15px"}}/>
                           <FaPlus className="float-end mt-1" aria-hidden="true" style={{"color":"black"}}/>
                           <FaCircleCheck className="float-end fa mt-1 me-2" aria-hidden="true" style={{"color": "green"}}/>
                           <div style={{"clear": "both"}}></div>
                        </div> 
                     </a>
            </div>        
        
      ))
      }
    </div>
  );
}
export default ModuleList;