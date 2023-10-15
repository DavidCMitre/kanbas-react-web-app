import Modules from "../Modules";
import '../../index.css';
import {FaCircleCheck, FaBell, FaBan, FaChartSimple, FaBullhorn, FaBullseye, FaRightToBracket, FaFileImport, FaCalendar} from 'react-icons/fa6';

function Home() {
  return (
    <table width="100%">
      <tbody>
        <tr>

    

        <td valign="top">
            <Modules />
        </td>

        <td valign="top">
            <div className="ps-5 d-none d-xl-block">
                <h5>Course Status</h5>
                <button type="button" className="btn btn-light" style={{"border-color":  "black", "margin-right": "1px"}}><FaBan /> Unpublish</button>
                <button type="button" className="btn btn-success" style={{"border-color":  "black", "margin-right": "1px"}}><FaCircleCheck/> Published</button>

                <ul className="list-group w-75 mt-2">
                    <a className="list-group-item" ><FaFileImport/> Import Existing Content</a>
                    <a className="list-group-item" ><FaRightToBracket/> Import From Commons</a>
                    <a className="list-group-item" ><FaBullseye/> Choose Home Page</a>
                    <a className="list-group-item" ><FaChartSimple/> View Course Stream</a>
                    <a className="list-group-item" ><FaBullhorn/> New Announcement</a>
                    <a className="list-group-item" ><FaChartSimple /> New Analytics</a>
                    <a className="list-group-item" ><FaBell /> View Course Notifications</a>
                </ul>

                <br/>
                <span>
                    <h5 className="float-start">Coming Up</h5>
                    <a className="float-end pe-2" style={{"color": "red"}}>View Calendar</a>
                    <FaCalendar className="float-end pt-1 me-1" style={{"color": "grey"}}/>
                    <div style={{"clear": "both"}}></div>

                </span>
                
                <hr class="no-margins"/>
                
                <div>
                    <FaCalendar className="float-start pt-1 me-1" style={{"color": "grey"}}/>
                    <a className="float-start ps-2" style={{"color": "red"}}>Lecture</a>
                    <div style={{"clear": "both"}}></div>
                    <div className="ps-4" style={{"color": "grey", "font-size": "12px"}}>CS4550.12631.202410</div>
                    <div className="ps-4" style={{"color": "grey", "font-size": "12px"}}>Sep 7 at 11:45am</div>
                    
                </div>

                <div>
                    <FaCalendar className="float-start pt-1 me-1" style={{"color": "grey"}}/>
                    <a className="float-start ps-2" style={{"color": "red"}}>Lecture</a>
                    <div style={{"clear": "both"}}></div>
                    <div className="ps-4" style={{"color": "grey", "font-size": "12px"}}>CS4550.12631.202410</div>
                    <div className="ps-4" style={{"color": "grey", "font-size": "12px"}}>Sep 11 at 11:45am</div>
                    
                </div>

                <div>
                    <FaCalendar className="float-start pt-1 me-1" style={{"color": "grey"}}/>
                    <a className="float-start ps-2" style={{"color": "red"}}>Lecture</a>
                    <div style={{"clear": "both"}}></div>
                    <div className="ps-4" style={{"color": "grey", "font-size": "12px"}}>CS4550.12631.202410</div>
                    <div className="ps-4" style={{"color": "grey", "font-size": "12px"}}>Sep 11 at 6pm</div>
                    
                </div>

            

            </div>

        </td>

        </tr>
        </tbody>
    </table>
  );
}
export default Home;