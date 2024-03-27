import {Container,Row,Col} from "reactstrap";
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle } from 'reactstrap';
import {Input,FormGroup,Label,Button,Form} from "reactstrap";
import {Link} from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
function Login(){
    const[formdata,setFormdata]=useState({
        'uname':'',
        'pwd':'',
    })
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(formdata)
        axios.post('http://localhost:5000/logincheck',{formdata}).then((result)=>{console.log(result.body)
        if(result.status==200){
            // alert(result.data.msg)
            window.location.href = '/home';
            localStorage.setItem('username', result.data.reg);
        }
        else{
            alert(result.data.msg)
        }
    })
    }
    return (
        <>
            <Container style={{position: "absolute",
        top: "50%",
        transform: "translate(0px, -50%)",}}>
                <Row>
                    <Col lg='6' md='6' sm='12'>
                        <h1>FROST-HUB</h1>
                    </Col>
                    <Col lg='6' md='6' sm='12'>
                    <Card
                        // style={{
                        //width: '20rem'
                        // }}
                    >
                    {/* <img alt="Sample" src={r_a} className='i1'/> */}
                    <CardBody>
                    <CardTitle tag="h5">Login</CardTitle>
                    {/* <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle> */}
                    <CardText>
                        <Form onSubmit={handlesubmit}>
                            <FormGroup>
                                <label>Username:</label>
                                <input type="text" name="uname" onChange={(e)=>setFormdata({...formdata,uname:e.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <label>Password:</label>
                                <input type="password" name="pwd" onChange={(e)=>setFormdata({...formdata,pwd:e.target.value})}/>
                            </FormGroup>
                            {/* <Button><Link to='/ac' style={{color:'white', textDecoration:'none'}}>Login</Link></Button> */}
                            <input type="submit" value="Login"/><br/>
                            <Link to='/adminlogin'>Admin Login</Link>
                        </Form>
                    </CardText>
                    
                    </CardBody>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Login;