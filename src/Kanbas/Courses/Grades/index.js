import db from "../../Database";
import { useParams } from "react-router-dom";
import {FaGear, FaFileExport, FaFileImport, FaMagnifyingGlass, FaFilter} from 'react-icons/fa6';
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>

        <div>
            <button className="float-end ms-2 me-2 btn btn-light" style={{"border-color":  "black"}}><FaGear /></button>
            
            <div className="float-end ms-2 dropdown">
                <button className="btn btn-light dropdown-toggle"  style={{"border-color":  "black"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FaFileExport /> Export
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item">Export</a></li>
                    <li><a className="dropdown-item">Other</a></li>
                </ul>
            </div>
            
            <button className="float-end btn btn-light" style={{"border-color":  "black"}}><FaFileImport /> Import</button>
            <div style={{"clear": "both"}}></div>
        </div>


        <div className="container">

            <div className="row me-2">
                <label className="col no-padding form-label me-3" style={{"font-weight":"bold"}}>Student Names</label>
                
                <label className="col no-padding form-label" style={{"font-weight":"bold"}}>Assignment Names</label>

            </div>

            <div className="row me-2">

                <div className="input-group me-3 col no-padding">
                    <button className="btn btn-outline-secondary" type="button"><FaMagnifyingGlass/></button>
                    <select className="form-select col">
                        <option selected>Search Students</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                
                <div className="input-group col no-padding">
                    <button className="btn btn-outline-secondary" type="button"><FaMagnifyingGlass/></button>
                    <select className="form-select col">
                        <option selected>Search Assignments</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>
        </div> 


        <button type="button" className="btn btn-light mt-3" style={{"border-color":  "black"}}><FaFilter/> Apply Filters</button>
                        
      <div className="table-responsive">
        <table className="table table-responsive mt-3" border="1" style={{"text-align": "center"}}>
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>

          <tbody>
            {enrollments.map((enrollment, index) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr className={index%2===0 ? "table-secondary" : ""}>
                   <td>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
            </tbody>
        </table>
      </div>
    </div>);
}
export default Grades;
