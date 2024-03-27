import {Input,FormGroup,Label,Button,Form} from "reactstrap";
import {Container,Row,Col} from "reactstrap";
import {Link} from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
function Modal(){
    const[formdata,setFormdata]=useState({
        'name':'',
        'clg':'',
        'material':'',
        'mid':'',
        'date':'',
        'cap':'',
        'itype':'',
        'desc':'',
        'brand':''
    })
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(formdata)
        axios.post('http://localhost:5000/adduserreq',{formdata}).then((result)=>{console.log(result.body)}, alert('Ticket Raised Successfully'), window.location.reload())
    }
    const date = new Date();

      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      // This arrangement can be altered based on how we want the date's format to appear.
      let cdate = `${year}-${month}-${day}`;
      console.log(cdate); // "17-6-2022"
    return (
        <>
            <br/>
            <Container>
                <Row>
                    <Col lg='12' md='12' sm='12'>
                        <h2>Fill the Details</h2>
                    </Col>
                </Row>
                <Form onSubmit={handlesubmit}>
                <Row>
                    <Col lg='6' md='6' sm='12'>
                    <FormGroup>
                    <tr>
                        <td><Label style={{align:'left', fontWeight:'bold'}}>Name:</Label></td>
                    </tr>
                    <Input placeholder="Please fill your Name" type="text" name="name" onChange={(e)=>setFormdata({...formdata,name:e.target.value})}/>
                    </FormGroup>
                    </Col>
                    <Col lg='6' md='6' sm='12'>
                    <FormGroup>
                    <tr>
                        <td><Label style={{align:'left', fontWeight:'bold'}}>College:</Label></td>
                    </tr>
                    <Input name="clg"  type="select"  onChange={(e)=>setFormdata({...formdata,clg:e.target.value})}>
                        <option>--select an option--</option>
                        <option>AEC</option>
                        <option>ACET</option>
                        <option>ACE</option>
                    </Input>
                    </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col lg='4' md='4' sm='12'>
                    <FormGroup>
                        <tr>
                            <td><Label style={{align:'left', fontWeight:'bold'}}>Material Type:</Label></td>
                        </tr>
                        <Input name="material"  type="select"  onChange={(e)=>setFormdata({...formdata,material:e.target.value})}>
                        <option>--select an option--</option>
                        <option>AC</option>
                        <option>Water Cooler</option>
                        <option>Fridge</option>
                    </Input>
                    </FormGroup>
                    </Col>
                    <Col lg='4' md='4' sm='12'>
                    <FormGroup>
                    <tr>
                        <td><Label style={{align:'left', fontWeight:'bold'}}>Material ID:</Label></td>
                    </tr>
                    <Input name="mid" placeholder="Please fill machine ID" type="text"  onChange={(e)=>setFormdata({...formdata,mid:e.target.value})}/>
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                    <tr>
                        <td><Label style={{align:'left', fontWeight:'bold'}}>Date:</Label></td>
                    </tr>
                    <Input name="date" value={cdate}   onClick={(e)=>setFormdata({...formdata,date:e.target.value})}/>
                    </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col lg='6' md='6' sm='12'>
                    <FormGroup>
                    <tr>
                        <td><Label style={{align:'left', fontWeight:'bold'}}>Capacity:</Label></td>
                    </tr>
                    <Input name="cap" placeholder="Enter Capacity" type="text"  onChange={(e)=>setFormdata({...formdata,cap:e.target.value})}/>
                    </FormGroup>
                    </Col>
                    <Col lg='6' md='6' sm='12'>
                    <FormGroup>
                    <tr>
                        <td><Label style={{align:'left', fontWeight:'bold'}}>Issue Type:</Label></td>
                    </tr>
                    <Input name="itype"  type="select"  onChange={(e)=>setFormdata({...formdata,itype:e.target.value})}>
                        <option>--select an option--</option>
                        <option>Repair Issues</option>
                        <option>Gas Filling Issues</option>
                        <option>Parts Replacement Issues</option>
                    </Input>
                    </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <FormGroup>
                    <tr>
                        <td><Label style={{align:'left', fontWeight:'bold'}}>Description about repair:</Label></td>
                    </tr>
                    <Input name="desc" placeholder="Write about the repair" type="textarea" rows={7}  onChange={(e)=>setFormdata({...formdata,desc:e.target.value})}/>
                    </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <tr>
                                <td><Label style={{align:'left', fontWeight:'bold'}}>Brand:</Label></td>
                            </tr>
                            <Input name='brand' placeholder="Please give the model " type="text"  onChange={(e)=>setFormdata({...formdata,brand:e.target.value})}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {/* <Button><Link to='/' style={{color:'white', textDecoration:'none'}}>Submit</Link></Button> */}
                    <input type="submit" value='submit'/>
                    </Col>
                </Row>
                </Form>
            </Container>
        </>
    )
}
export default Modal;