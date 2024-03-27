import Sidebar from "./Sidebar"
import Header from "./Header"
import { useState } from "react"
import {Input,FormGroup,Label,Button,Form} from "reactstrap";
import {Container,Row,Col} from "reactstrap";
function NewDataInsertion(){
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

      const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
      }
    return(
        <>
            <Header OpenSidebar={OpenSidebar}/>
            {/* <Header/> */}
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <div style={{textAlign:'center'}}>
            <Container>
                <Row>
                    <Col lg='12' md='12' sm='12'>
                        <h2>INSERTION FORM</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg='12' md='12' sm='12'>
                    <FormGroup>
                    <tr>
                        <td><Label style={{align:'left', fontWeight:'bold'}}>Device name:</Label></td>
                    </tr>
                    <Input name="text" placeholder="Enter device name" type="text"/>
                    </FormGroup>
                    </Col>
                    <Col lg='12' md='12' sm='12'>
                    <FormGroup>
                    <tr>
                        <td><Label style={{align:'left', fontWeight:'bold'}}>Company Name:</Label></td>
                    </tr>
                    <Input name="text" placeholder="Enter company name" type="text"/>
                        
                    </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col lg='12' md='12' sm='12'>
                    <FormGroup>
                        <tr>
                            <td><Label style={{align:'left', fontWeight:'bold'}}>Material ID:</Label></td>
                        </tr>
                        <Input name="text" placeholder="Enter company name" type="text"/>
                    </FormGroup>
                    </Col>
                    <Col lg='12' md='12' sm='12'>
                    <FormGroup>
                    <tr>
                        <td><Label style={{align:'left', fontWeight:'bold'}}>Capacity</Label></td>
                    </tr>
                    <Input name="text" placeholder="Capacity" type="text"/>                   
                    </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <FormGroup>
                    <tr>
                        <td><Label style={{align:'left', fontWeight:'bold'}}>Last service Date:</Label></td>
                    </tr>
                    <Input name="date"/>
                    </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <tr>
                                <td><Label style={{align:'left', fontWeight:'bold'}}>Next service Date:</Label></td>
                            </tr>
                            <Input name='date'/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Button>Submit</Button>
                    </Col>
                </Row>
            </Container>
            </div>

            
        </>
    )
}
export default NewDataInsertion;