import { Link } from "react-router-dom";
import db from "../Database";
import '../index.css';
import {FaEllipsisVertical, FaFilePen} from 'react-icons/fa6';
function Dashboard() {
  const courses = db.courses;
  return (
    <div style={{'padding-left': '20px'}}>
      <div style={{"font-family": "Verdana, Geneva, Tahoma, sans-serif", "color": "darkgray", "font-size": "30px"}}>Dashboard</div>
                <hr/>
                <br/>

        <div style={{"margin-left": "25px"}}>
            <b style={{"font-family": "Verdana, Geneva, Tahoma, sans-serif", "font-size": "26px"}}>Published Courses</b> 
            <hr/>          


            <div className="d-flex flex-row flex-wrap">



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
                                style={{"color": "gray"}}>{course.startDate} Semester Full Term</div>
                            </Link>
                            <a>
                                <FaFilePen 
                                style={{"color": "gray"}}/>
                            </a>
                        </div>
                    </div>         
                ))}





            </div>
        </div>
    </div>
  );
}
export default Dashboard;