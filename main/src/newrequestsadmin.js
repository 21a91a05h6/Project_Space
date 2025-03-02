import Sidebar from "./Sidebar"
import AdminHeader from "./adminHeader";
import {Container,Row,Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {Table } from 'react-bootstrap';  
import axios from "axios";
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

function NewRequests(){
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

      const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
      }
    //   const t=[
    //     {
    //         id:1,
    //         clg:'AEC',
    //         desc:'qwertyuio',
    //         date:'17-03-2024'
    //     },
    //     {
    //         id:2,
    //         clg:'AEC',
    //         desc:'qwertyuio',
    //         date:'17-03-2024'
    //     }
    //   ]
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = (rid) => {
        // setIsClicked(!isClicked);
        acceptRequest(rid);
    };
    const acceptRequest=(id)=>{
        console.log(id);
    //     e.preventDefault();
    //     console.log(formdata)
    //     axios.post('http://localhost:5000/bookinginfo',{formdata}).then((res)=>{console.log(res.body)
    //     if(res.status==200){
    //       alert(res.data.msg)
    //     }
    // })
    };
    let [request,setRequest]=useState([])
    //let api='http://localhost:5000/getstudents';
    useEffect(()=>{
        axios.get('http://localhost:5000/getrequests').then((response)=>{
            console.log(response.data.reqs)
            setRequest(response.data.reqs);
        });
    },[]);
    const Deletereq=(id)=>{
        console.log(id);
        axios.delete('http://localhost:5000/deleterequest/'+id)
        .then(res=>{console.log(res)
        alert("request deleted successfully")
        window.location.reload()
        })
        .catch(err=>{console.log(err)})
    }

    // const Acceptreq=(id)=>{
    //     console.log(id);
    //     axios.put('http://localhost:5000/acceptrequest/'+id)
    //     .then(res=>{console.log(res)
    //     alert("request deleted successfully")
    //     window.location.reload()
    //     })
    //     .catch(err=>{console.log(err)})
    // }
    var now = new Date();
    var isoString = now.toISOString();
    return(
        <>
            <AdminHeader OpenSidebar={OpenSidebar}/>
            {/* <Header/> */}
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <Container>
                <Row>
                    <Col>
                        <table className='bordered table'  align="center" border={1} cellPadding={1} >
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Ticket Raised Date</th>
                                <th>Material Type</th>
                                <th>College</th>
                                <th>Description</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                            {
                                request && request.map((ele,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{ele.name}</td>
                                            <td>{ele.date}</td>
                                            <td>{ele.material}</td>
                                            <td>{ele.clg}</td>
                                            <td>{ele.desc}</td>
                                            <td><button className='btn btn-success' style={{backgroundColor:isClicked ?'white':'green'}} onClick={handleClick(ele._id)}>{isClicked?'Accepted':'Accept'}</button>
                                            <Link to={`/maintenanceinfo/${ele._id}`}><button className="btn btn-warning">Update</button></Link></td>
                                            
                                            {/* <td><button className='btn btn-success' onClick={()=>Acceptreq(ele._id)}>Deny</button></td> */}
                                            {/* <td><button className='btn btn-danger' onClick={()=>Deletereq(ele._id)}>Deny</button></td> */}
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default NewRequests