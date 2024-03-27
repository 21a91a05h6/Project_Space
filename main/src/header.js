import {Container,Row,Col} from "reactstrap";
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,} from 'reactstrap';
import "./styles/header.css";
import { Link } from "react-router-dom";
import logo from "./images/logo.png"
function Header(){
    const username = localStorage.getItem('uname');
    console.log(username);
    return (
        <div className="header_top">
            <Container>
                <Row>
                    <Col lg="4" md='4' sm='12'>
                        <div>
                            <Row>
                                <Col lg='1' md='1' sm='12'></Col>
                                <Col lg='3' md='3' sm='12'>
                                    <img src={logo} style={{width:'95px', height:'80px'}}/>
                                </Col>
                                <Col lg='8' md='8' sm='12'>
                                <br/>
                                <span className="header_top_left">FROST-HUB</span>
                                {/* <span>{username}</span> */}
                                </Col>
                            </Row>
                            
                        </div>
                    </Col>
                    <Col lg='2' md='2' sm='1'></Col>
                    <Col lg="1" md='1' sm='12'>
                        <div className="header_top_login" >
                            {/* <a href="#">HOME</a> */}
                            <br/>
                            <Link to='/' >HOME</Link>
                        </div>
                    </Col>
                    <Col lg="1" md='1' sm='12'>
                        <div className="header_top_login" >
                            {/* <a href="/ac">AC</a> */}
                            <br/>
                            <Link to='/ac' >AC</Link>
                        </div>
                    </Col>
                    <Col lg="1" md='1' sm='12'>
                        <div className="header_top_login" >
                            {/* <a href="#">FILTERS</a> */}
                            <br/>
                            <Link to='/filters' >FILTERS</Link>
                        </div>
                    </Col>
                    <Col lg="1" md='1' sm='12'>
                        <div className="header_top_login" >
                            {/* <a href="#">FRIDGES</a> */}
                            <br/>
                            <Link to='/fridges' >FRIDGES</Link>
                        </div>
                    </Col>
                    <Col lg='1' md='1' sm='12'>
                        <div className="header_top_login" >
                            {/* <a href="#">CONTACTS</a> */}
                            <br/>
                            <Link to='/contactus' >CONTACTS</Link>
                        </div>
                    </Col>
                    <Col lg='1' md='1' sm='12'>
                        <div className="header_top_login" >
                            {/* <a href="#">CONTACTS</a> */}
                            <br/>
                            <Link to='/' >LOGOUT</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Header;