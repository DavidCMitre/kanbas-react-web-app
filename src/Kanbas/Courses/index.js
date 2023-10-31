import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import '../index.css';
import {FaBars} from 'react-icons/fa6';
import {FaGlasses} from 'react-icons/fa';
import {FaUser, FaBook, FaCalendar, FaInbox, FaClock, FaRobot} from 'react-icons/fa';
import {FaGauge, FaArrowRightFromBracket, FaCircleQuestion} from 'react-icons/fa6';
import { Link } from "react-router-dom";
import {FaChevronDown} from 'react-icons/fa6';
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";



function Courses({courses}) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  const redText = { color: "red" };
  const links = ["Account", "Dashboard", "Courses", "Calendar","Inbox","History","Studio","Commons","Help"];
  const courseLinks = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages",
  "Files", "Rubrics","Outcomes","Collaborations","Syllabus","Settings"];
  const iconStrings = [
    <FaUser
    className={`margin-5`}
    style={redText}
    />,
    <FaGauge
    className={`margin-5`}
    style={redText}
    />,
    <FaBook
    className={`margin-5`}
    style={redText}
    />,
    <FaCalendar
    className={`margin-5`}
    style={redText}
    />,
    <FaInbox
    className={`margin-5`}
    style={redText}
    />,
    <FaClock
    className={`margin-5`}
    style={redText}
    />,
    <FaRobot
    className={`margin-5`}
    style={redText}
    />,
    <FaArrowRightFromBracket
    className={`margin-5`}
    style={redText}
    />,
    <FaCircleQuestion
    className={`margin-5`}
    style={redText}
    />];
  
  return (
    <div>
      

        <nav className="d-none d-lg-block" style={{"--bs-breadcrumb-divider": "'>'"}} aria-label="breadcrumb">
            <div className="row no-margins">
               <a className="col-1 mt-1 text-center"><FaBars className="text-center" style={{"color": "red", "display": "inline"}}/></a>
               
            
               <ol className="breadcrumb col no-margins mt-1">
                 <li className="breadcrumb-item"><a style={{"color": "red"}}>{course.number}.{course.startDate}</a></li>
                 <li className="breadcrumb-item active" aria-current="page" style={{"color": "black"}}>
                  {courseLinks.map((link, index) => (
                          pathname.includes(link.replace(" ", "%20")) ? link : ""
                      ))}

                 </li>
               </ol>

               <button type="button" className="btn btn-secondary col-1 mt-1 me-2" 
               style={{"height": "24px", "color": "black", "background-color": "lightgrey", "--bs-btn-padding-y": "0px", "--bs-btn-padding-x": "0px"}}>
                  <span>
                    <FaGlasses style={{"color": "black"}}/> 
                    <span className="d-none d-xl-table-cell" style={{"font-size": "10px"}}> Student View</span></span></button>

            </div>
            
        </nav>


         
        <nav className="d-lg-none" style={{"--bs-breadcrumb-divider": "'>'", "background-color": "black"}} aria-label="breadcrumb">
            <div className="row no-margins pb-3 pt-3">

               <div className="dropdown col-1 me-3">
                  <a className="btn text-center"
                  role="button" data-bs-toggle="dropdown">
                     <FaBars className="text-center fa-2x" style={{"color": "white", "display": "inline"}}/></a>

                     
                    <ul className="mt-3 dropdown-menu full-dropdown-menu navigation-dimension no-dots no-padding">
                        

                        {links.map((link, index) => (

                            <li className="li-account-navi mb-4">
                                <Link 
                                key={index}
                                to={`/Kanbas/${link}`}
                                className={`navigation-sidebar-text`}
                                >
                                    
                                {iconStrings[index]} {link}
                                
                                </Link>
                            </li>
                        ))}
                        
                    </ul>
               </div>


               <div className="col no-margins mt-1 text-center" style={{"color": "white"}}>
                  <div style={{"font-size": "14px"}}>{course.number}.{course.startDate}</div>
                  <div style={{"font-size": "14px"}}>

                    {courseLinks.map((link, index) => (
                            pathname.includes(link.replace(" ", "%20")) ? link : ""
                        ))}

                  </div>
               </div>
               

               <a className="col-1 mt-2 no-padding text-center"> <FaGlasses style={{"color": "white"}}/></a>



               <div className="dropdown col-1 me-3">
                  <a className="btn text-center"
                  role="button" data-bs-toggle="dropdown">
                     <FaChevronDown className="text-center" style={{"color": "white", "display": "inline"}}/></a>
                  
                    
                     <ul className="mt-3 dropdown-menu full-dropdown-menu navigation-dimension no-dots no-padding">

                        
                     {courseLinks.map((link, index) => (
                          <li className={`li-account-navi ${pathname.includes(link.replace(" ", "%20")) ? "selected" : ""}`}>
                              <Link
                              key={index}
                              to={`/Kanbas/Courses/${courseId}/${link}`}
                              style={{textDecoration: 'none'}}
                              className={`navigation-sidebar-text ${pathname.includes(link.replace(" ", "%20")) ? "selected-text" : ""}`}>
                              {link}
                              </Link>
                          </li>
                      ))}



                     </ul>
               </div>
            </div>
            
        </nav>
        <hr/>



    
        <table width="100%">
            <tbody>
            <tr>

            <td valign="top" className="d-none d-lg-table-cell navigation-dimension" style={{"padding-left": "20px"}}>
                <CourseNavigation/>
            </td>              

            <td valign="top" style={{"padding-left": "20px"}}>
                <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home/>} />
                <Route path="Modules" element={<Modules/>} />
                <Route path="Assignments" element={<Assignments/>} />
                <Route
                    path="Assignments/:assignmentId"
                    element={<AssignmentEditor/>}/>
                
                <Route path="Grades" element={<Grades />} />
                </Routes>                
            </td>                

            </tr>
            </tbody>
            </table>
        

    </div>
    
  );
}

export default Courses;