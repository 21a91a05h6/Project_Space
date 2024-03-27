import {Container,Row,Col} from "reactstrap";
import c_i from './images/call_img.jpg'
import Header from "./header";
import './styles/contactus.css';
import Footer from "./footer";
import {Input,FormGroup,Label,Button,Form} from "reactstrap";
import {FaPhoneAlt,FaEnvelope} from 'react-icons/fa'
function ContactUs(){
    return(
        <>
        <Header/>
            <br/><br/>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='12'>
                        <img src={c_i} className="c_i1"/>
                    </Col>
                    <Col lg='6' md='6' sm='12'>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail" style={{align:'left'}}>Name</Label>
                                    <Input id="exampleEmail" name="text" placeholder="Name" type="text"/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePassword">Email</Label>
                                    <Input id="examplePassword" name="email" placeholder="Email" type="email"/>
                                </FormGroup>
                            </Col>
                        </Row>
                            <FormGroup>
                                <Label for="exampleAddress">Description</Label>
                                <Input id="exampleAddress" name="desc" type='textarea' placeholder="Write your thoughts..." rows={5}/>
                            </FormGroup>
                        <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleCity">College</Label>
                                <Input  id="exampleCity" name="college"/>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleState">State</Label>
                                <Input id="exampleState" name="state"/>
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="exampleZip">Zip</Label>
                                <Input id="exampleZip" name="zip"/>
                            </FormGroup>
                        </Col>
                    </Row>
                        <Button>Send</Button>
                </Form>
                    </Col>
                </Row>
                <br/>
                <br/>
                <Row>
                    <Col lg='6' md='6' sm='12'>
                        <h4>Contact Us At</h4>
                        <p><FaEnvelope/>   forst.hub@gmail.com</p>
                        <p><FaPhoneAlt/>   +91 91008 21355</p>
                    </Col>
                    <Col lg='6' md='6' sm='12'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15254.468790513827!2d82.0686328!3d17.0913673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3782e23e8dc385%3A0x9916ae57f5d1f1ad!2sAditya%20University!5e0!3m2!1sen!2sin!4v1710579791888!5m2!1sen!2sin" style={{width:"600px", height:"350px"}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
                    </Col>
                </Row>
            </Container>
            <br/>
            <Footer/>
        </>
    )
}
export default ContactUs;