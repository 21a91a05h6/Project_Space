import Sidebar from "./Sidebar"
import Header from "./Header"
import { useState,useEffect } from "react"
import {Container,Row,Col} from 'reactstrap'
import { useParams } from "react-router-dom";
import {Input,FormGroup,Label,Button,Form} from "reactstrap";
import axios from "axios";
import './App.css';
function Maintenanceinfo(){
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
      const[request,setRequest]=useState({
        'mid':'',
        'material':'', 
        'cap':'',
        'clg':'',
        'itype':'',
        'desc':'',
        'ldate':'',
        'ndate':'',
        'date':'',
        'works':'',
    })
      const {id}=useParams()
    // console.log("test");
    useEffect(()=>{
        axios.get('http://localhost:5000/getreqdatabyid/'+id)
            .then((res)=>{
            //console.log(res.data.studentdata)
            setRequest(res.data.reqid);
        }).catch((err)=>console.log(err))
    },[]);
    // const[formdata,setFormdata]=useState({
    //     'name':'',
    //     'clg':'',
    //     'material':'',
    //     'mid':'',
    //     'cap':'',
    //     'itype':'',
    //     'desc':'',
    //     'brand':''
    // })
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(request)
        axios.post('http://localhost:5000/addmaintenancedata',{request}).then((result)=>{console.log(result.body)}, alert('data added to inventory successfully'), window.location.reload())
    }
    function incre(dateString){
    const date = new Date(dateString);
    // Add 1 day to the date
    let m=6;
    date.setMonth(date.getMonth() + m);
    // Format the date as dd-mm-yyyy
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    // let day = date.getDate();
    //   let month = date.getMonth() + 1;
    //   let year = date.getFullYear();
    return  `${day}-${month}-${year}`;
    }
    function change(cdate){
        const dateParts = cdate.split('-');
        // Reorder the parts (day, month, year)
        return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    }
    return(
        <>
            <Header OpenSidebar={OpenSidebar}/>
            {/* <Header/> */}
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <Container>
                {/* <Row>
                    <Col lg='12' md='12' sm='12'>
                        
                    </Col>
                </Row> */}
                <h2>MAINTENANCE FORM</h2>
                <Form onSubmit={handlesubmit}>
                <Row >
                    <Col lg='12' md='12' sm='12' >
                    <FormGroup>
                    <tr>
                        <td><Label style={{align:'left', fontWeight:'bold'}}>Material ID:</Label></td>
                    </tr>
                    <Input name="text" placeholder="Enter device name" type="text" value={request.mid} onClick={(e)=>setRequest({...request,mid:e.target.value})}/>
                    </FormGroup>
                    </Col>
                    <Col lg='12' md='12' sm='12' >
                    <FormGroup>
                    <tr>
                        <td><Label style={{align:'left', fontWeight:'bold'}}>Material Type:</Label></td>
                    </tr>
                    <Input name="text" placeholder="Enter company name" type="text" value={request.material} onClick={(e)=>setRequest({...request,material:e.target.value})}/>
                        
                    </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col lg='12' md='12' sm='12'>
                    <FormGroup>
                        <tr>
                            <td><Label style={{align:'left', fontWeight:'bold'}}>Capacity:</Label></td>
                        </tr>
                        <Input name="text" placeholder="Enter company name" type="text" value={request.cap} onClick={(e)=>setRequest({...request,cap:e.target.value})}/>
                    </FormGroup>
                    </Col>
                    <Col lg='12' md='12' sm='12'>
                    <FormGroup>
                    <tr>
                        <td><Label style={{align:'left', fontWeight:'bold'}}>College:</Label></td>
                    </tr>
                    <Input name="text" placeholder="Capacity" type="text" value={request.clg} onClick={(e)=>setRequest({...request,clg:e.target.value})}/>                   
                    </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <FormGroup>
                    <tr>
                        <td><Label style={{align:'left', fontWeight:'bold'}}>Issue Type:</Label></td>
                    </tr>
                    <Input name="text" placeholder="Issuetype" type="text" value={request.itype} onClick={(e)=>setRequest({...request,itype:e.target.value})}/>  
                    </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <tr>
                                <td><Label style={{align:'left', fontWeight:'bold'}}>Description:</Label></td>
                            </tr>
                            <Input name="text" placeholder="Description" type="text" value={request.desc} onClick={(e)=>setRequest({...request,desc:e.target.value})}/>  
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <tr>
                                <td><Label style={{align:'left', fontWeight:'bold'}}>Last Serviced Date:</Label></td>
                            </tr>
                            <Input name="ldate"  type="text" value={change(request.date)} onClick={(e)=>setRequest({...request,ldate:e.target.value})}/>  
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <tr>
                                <td><Label style={{align:'left', fontWeight:'bold'}}>Next Servicing Date:</Label></td>
                            </tr>
                            <Input name="ndate"  type="text" value={incre(request.date)} onClick={(e)=>setRequest({...request,ndate:e.target.value})}/>  
                            {/* <tr>{incre("2024-03-20")}</tr> */}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <tr>
                                <td><Label style={{align:'left', fontWeight:'bold'}}>Work Status:</Label></td>
                            </tr>
                            <Input name="itype"  type="select"  onChange={(e)=>setRequest({...request,works:e.target.value})}>
                                <option>--select an option--</option>
                                <option>Pending</option>
                                <option>Completed</option>
                                {/* <option>Parts Replacement Issues</option> */}
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <input type="submit" value="submit"/>
                    </Col>
                </Row>
                </Form>
            </Container>
            
        </>
    )
}
export default Maintenanceinfo;