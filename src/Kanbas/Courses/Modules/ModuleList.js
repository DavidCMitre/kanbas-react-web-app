import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {FaGripVertical} from 'react-icons/fa6';
import {FaCircleCheck, FaEllipsisVertical, FaPlus} from 'react-icons/fa6';
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div>

            <div class="card list-group mb-5 me-3 ps-2 pe-2 pt-2 pb-2">
              <span>
                <input className="form-control float-start w-75 me-1 mb-1" value={module.name}
                  onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                />
                <button onClick={() => dispatch(addModule({ ...module, course: courseId }))} className="float-start btn btn-success w-10 mb-1">Add</button>
                <button onClick={() => dispatch(updateModule(module))} className="float-start btn btn-primary w-10 mb-1 ms-1">
                      Update
                </button>
              </span>
              

              <textarea className="form-control float-start w-75" value={module.description}
                onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
              }
              />
              


            </div> 


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
                           
                           <button className="float-end mt-1 me-2 btn btn-danger btn-sm pt-0 pb-0"
                              onClick={() => dispatch(deleteModule(module._id))}>
                              Delete
                          </button>
                          <button className="float-end mt-1 me-2 btn btn-success btn-sm pt-0 pb-0"
                            onClick={() => dispatch(setModule(module))}>
                            Edit
                          </button>


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