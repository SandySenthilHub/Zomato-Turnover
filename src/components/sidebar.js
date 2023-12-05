import { useState } from "react";
import {  BsGrid1X2Fill } from "react-icons/bs";
// import Home from "./home";
// import App from "../App";

function Sidebar() {
const [showState, setShowState] = useState(false);

function stateshow(){
    setShowState(true);
}
    return (
        <div className="sidebar">
            <div className="sidebar-title">
                <div className="sidebar-brand">
                 Dashboard
                </div>
                
            </div>

            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <a href="" onClick={stateshow} style={{fontSize:'25px'}}>
                        <BsGrid1X2Fill className="icon" /> Analytics
                    </a>
                    {/* <App showState = {showState}/> */}
                   
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
