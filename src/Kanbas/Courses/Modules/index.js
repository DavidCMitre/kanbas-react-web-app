import ModuleList from "./ModuleList";
import {FaCircleCheck, FaEllipsisVertical, FaPlus} from 'react-icons/fa6';
import '../../index.css';
function Modules() {
  return (
    <div>

        <div className="row float-end me-1">
                     
            <button type="button" className="btn-size col card-text btn btn-light">Collapse All</button>
            <button type="button" className="btn-size col card-text btn btn-light">View Progress</button>
            
            <div className="col dropdown no-padding">
            <a className="btn-size btn btn-light card-text dropdown-toggle" type="button" id="dropdownPublish" data-bs-toggle="dropdown" aria-expanded="false">
                <FaCircleCheck style={{"color": "green"}}/> Publish All
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownPublish">
                <li><a className="dropdown-item" >Publish All</a></li>
                <li><a className="dropdown-item" >Other</a></li>
                
            </ul>
            </div>
            
            <button type="button" className="col btn-size card-text btn btn-danger"><FaPlus style={{"color": "white"}}/> Module</button>
            <button type="button" className="col-1 card-text btn btn-light"><FaEllipsisVertical style={{"color": "black"}}/></button>
                  
        </div>
        <br/>
    
        <hr/>

        <br/>
      <ModuleList />
    </div>
  );
}
export default Modules;