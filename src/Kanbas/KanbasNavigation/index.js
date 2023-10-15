import { Link, useLocation } from "react-router-dom";
import '../index.css';
import {FaUser, FaBook, FaCalendar, FaInbox, FaClock, FaRobot} from 'react-icons/fa';
import {FaGauge, FaArrowRightFromBracket, FaCircleQuestion} from 'react-icons/fa6'
function KanbasNavigation() {

  const { pathname } = useLocation();
  const redText = { color: "red" };
  const whiteText = {color:"white"};  
  const blackText = {color:"black"};
  const links = ["Account", "Dashboard", "Courses", "Calendar","Inbox","History","Studio","Commons","Help"];
  const iconStrings = [
    <FaUser
    className={`margin-5`}
    style={pathname.includes(links[0]) ? blackText : whiteText}
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

    <div 
    className={`sidebar-dimension bg-black`}>
        <ul className="list-group bg-black sidebar-dimension">

            {links.map((link, index) => (
                <Link 
                key={index}
                to={`/Kanbas/${link}${link === "Courses" ? "/CS4500" : ""}`}
                className={`padding-5 verdana-font list-group-item list-group-item-action ${pathname.includes(link) ? "bg-white" : "bg-black"}`}
                >
                    
                   {iconStrings[index]}
                    
                    <br/>
                    <div 
                    style={pathname.includes(link) ? redText : whiteText}>
                        {link}
                    </div>
                </Link>
            ))}
                        
        </ul>
    </div>

  );
}
export default KanbasNavigation;