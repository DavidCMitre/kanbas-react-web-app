import { Link, useParams, useLocation } from "react-router-dom";
import '../../index.css';


function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages",
"Files", "Rubrics","Outcomes","Collaborations","Syllabus","Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div>


                <ul class="navigation-dimension no-dots no-padding">

                {links.map((link, index) => (
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
  );
}


export default CourseNavigation;