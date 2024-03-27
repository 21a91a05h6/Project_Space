import React, {useState} from 'react';
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsBoxArrowDownRight, BsBoxArrowRight, BsDatabaseCheck, BsHammer, BsPlusCircle, BsSnow}
 from 'react-icons/bs'
 import { Link } from 'react-router-dom'
 import './styles/admin.css';
 import { ReactDOM } from 'react';
 
//  import ViewListIcon from '@mui/icons-material/ViewList';
// import ViewModuleIcon from '@mui/icons-material/ViewModule';
// import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
// import ToggleButton from '@mui/material/ToggleButton';
// import { ToggleButtonGroup } from 'react-bootstrap';


 

function Sidebar({openSidebarToggle, OpenSidebar}) {
    // const [view,setView]=React.useState('list');
    // const handleChange=(event,nextView)=>{
    //     setView(nextView);
    // }
    
    
    // const ToggleSidebar=()=>{
    //     const [isOpen, setIsopen]=useState(false);
    //     const ToggleSidebar=()=>{
    //     const isOpen === true ? setIsopen(false):setIsopen(true);
    // }

    
  return (
    
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand' style={{color:'white'}}>
                <BsSnow style={{color:'white'}} className='icon_header'/> FROS<span style={{color:'orange'}}>T-HUB</span>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            {/* <ToggleButtonGroup
                orientation="vertical"
                value={view}
                exclusive
                onChange={handleChange}
            >
            <ToggleButton value="list" aria-label='list'>
                <ViewListIcon/>
            </ToggleButton>
            <ToggleButton value="module" aria-label='module'>
                <ViewModuleIcon/>
            </ToggleButton>
            <ToggleButton value="quilt" aria-label='quilt'>
                <ViewQuiltIcon/>
            </ToggleButton>
            
                </ToggleButtonGroup> */}
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> <Link to='/adminhome' style={{color:'white', textDecoration:'none'}}>Dashboard</Link>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> <Link to='/newrequests' style={{color:'white', textDecoration:'none'}}>New Requests</Link>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPlusCircle className='icon'/> <Link to='/newdatainsertion' style={{color:'white', textDecoration:'none'}}>New Data Insertion</Link>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsHammer className='icon'/> <Link to='/Maintenanceinfo' style={{color:'white', textDecoration:'none'}}>Maintenance Info</Link>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsDatabaseCheck className='icon'/> <Link to='/inventory' style={{color:'white', textDecoration:'none'}}> Inventory</Link>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsBoxArrowRight className='icon'/> Logout
                </a>
            </li>
            {/* <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li> */}
        </ul>
    </aside>
  )
}

export default Sidebar