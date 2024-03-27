import Header from "./Header";
import Sidebar from "./Sidebar";
import Routers from "./router";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
function Layout(){
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

      const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
      }
    return(
        <>
         <Header OpenSidebar={OpenSidebar}/>
        {/* <Header/> */}
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <BrowserRouter>
        <Routers/>
        </BrowserRouter>
        </>
    )
}
export default Layout;