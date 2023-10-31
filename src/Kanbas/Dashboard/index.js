import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import '../index.css';
import {FaEllipsisVertical, FaFilePen} from 'react-icons/fa6';
function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
  ) {
  


  return (
    <div style={{'padding-left': '20px'}}>
      <div style={{"font-family": "Verdana, Geneva, Tahoma, sans-serif", "color": "darkgray", "font-size": "30px"}}>Dashboard</div>
                <hr/>
                <br/>

        <div style={{"margin-left": "25px"}}>
            <b style={{"font-family": "Verdana, Geneva, Tahoma, sans-serif", "font-size": "26px"}}>Published Courses</b> 
            <hr/>          


            <div className="d-flex flex-row flex-wrap">
                <div className="card" 
                    style={{"width": "250px", "margin-bottom": "30px", "margin-right": "30px", "padding": "10px"}}>
                    <span>
                        <h5 className="card-title text-truncate no-margins">Course - editing:{course._id}</h5>
                        <input value={course.name} className="form-control mt-1"
                                onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
                        <input value={course.number} className="form-control mt-1"
                                onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
                        <input value={course.startDate} className="form-control mt-1" type="date"
                                onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
                        <input value={course.endDate} className="form-control mt-1" type="date"
                                onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
                        <button className="btn btn-secondary mt-1" onClick={addNewCourse} >
                            Add Course
                        </button>
                        <button className="btn btn-secondary ms-2 mt-1" onClick={updateCourse} >
                            Update
                        </button>

                    </span>
                </div>
            
           




                {courses.map((course) => (

                    <div className="card" 
                    style={{"width": "250px", "margin-bottom": "30px", "margin-right": "30px"}}>
                        <div>
                            <a>
                                <FaEllipsisVertical style={{"color": "white", "position": "absolute", "top": "8px", "right": "8px"}}/>
                                </a> 
                            <a>
                                <img 
                                className="card-img-top" 
                                src="../images/296x180grey.svg"/>
                                </a>
                        </div>
                        

                        <div class="card-body">
                            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}
                            style={{ textDecoration: 'none' }}>
                                <h6 className="card-title text-truncate no-margins"> {course.number} {course.name}</h6>
        
                                <div className="card-text text-truncate" 
                                style={{"color": "gray"}}>{course.number} {course.name}</div>
                                <div className="card-small-text text-truncate" 
                                style={{"color": "gray"}}>{course.startDate} - {course.endDate}</div>
                            </Link>
                            <div>
                                <a>
                                    <FaFilePen 
                                    style={{"color": "gray"}}/>
                                </a>
                                <button className="btn btn-secondary btn-sm ms-2"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        deleteCourse(course._id);
                                    }}>
                                    Delete
                                </button>
                                <button className="btn btn-secondary btn-sm ms-2"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setCourse(course);
                                    }}>
                                    Edit
                                </button>


                            </div>
                        </div>
                    </div>         
                ))}





            </div>
        </div>
    </div>
  );
}
export default Dashboard;