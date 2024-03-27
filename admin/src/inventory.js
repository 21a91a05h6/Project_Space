import Sidebar from "./Sidebar"
import Header from "./Header"

import {Container,Row,Col} from 'reactstrap'
import axios from "axios";
import React,{useState,useEffect} from "react";

function Inventory(){
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
    let [reque,setReque]=useState([])
    //let api='http://localhost:5000/getstudents';
    useEffect(()=>{
        axios.get('http://localhost:5000/getmaintenancedata').then((response)=>{
            console.log(response.data.main)
            setReque(response.data.main);
        });
    },[]);
    const Deletereq=(id)=>{
        console.log(id);
        axios.delete('http://localhost:5000/deleterequestcomplete/'+id)
        .then(res=>{console.log(res)
        alert("data deleted successfully")
        window.location.reload()
        })
        .catch(err=>{console.log(err)})
    }
    return(
        <>
            <Header OpenSidebar={OpenSidebar}/>
            {/* <Header/> */}
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <Container>
            <Row>
            <Col lg='12' md='12' sm='12'>
            <h2>Inventory</h2>
            </Col>
            </Row>
            
            
                <Row>
                    <Col>
                        <table className='bordered table'  align="center" border={1} cellPadding={1}  style={{width:'1010px'}}>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Material id</th>
                                <th>Material type</th>
                                <th>Capacity</th>
                                {/* <th>Last serviced Date</th>
                                <th>Next serviced Date</th> */}
                                <th>College</th>
                                <th>Issue type</th>
                                <th>Description</th>
                                <th>Last Date</th>
                                <th>Next Date</th>
                                <th>Work status</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                            {
                                reque && reque.map((ele,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            {/* <td>{ele.name}</td>
                                            <td>{ele.clg}</td> */}
                                            <td>{ele.mid}</td>
                                            <td>{ele.material}</td>
                                            <td>{ele.cap}</td>
                                            <td>{ele.clg}</td> 
                                            <td>{ele.itype}</td>
                                            <td>{ele.desc}</td>
                                            <td>{ele.ldate}</td>
                                            <td>{ele.ndate}</td>
                                            <td>{ele.works}</td>
                                            <td><button className='btn btn-danger' onClick={()=>Deletereq(ele._id)}>Delete</button></td>
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
export default Inventory;