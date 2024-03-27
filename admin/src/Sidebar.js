import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsBoxArrowDownRight, BsBoxArrowRight, BsDatabaseCheck, BsHammer, BsPlusCircle, BsSnow}
 from 'react-icons/bs'
 import { Link } from 'react-router-dom'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand' style={{color:'white'}}>
                <BsSnow style={{color:'white'}} className='icon_header'/> FROS<span style={{color:'orange'}}>T-HUB</span>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> <Link to='/' style={{color:'white', textDecoration:'none'}}>Dashboard</Link>
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