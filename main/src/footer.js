import { Container,Row ,Col} from "reactstrap";
import "./styles/footer.css";
function Footer(){
    return(
        <div className="footer">
           <Container>
           <br/>
                <Row>
                    <Col lg='3' md='3' sm='12'>
                        <div className="footer_logo">
                            <h3>FROST-HUB</h3>
                            <p id="p" className="d-flex">At FROST-HUB, we're passionate about bringing the joy of reading to everyone. We offer a carefully curated selection of books to ignite your imagination and fuel your next adventure.</p>
                        </div>
                    </Col>
                    <Col lg='3' md='3' sm='12'>
                        <div className="footer_links">
                            <h4>Quick Links</h4>
                            <a href="#">Home</a><br/>
                            <a href="#">AC</a><br/>
                            <a href="#">Filters</a><br/>
                            <a href="#">Fridges</a><br/>
                            <a href="#">Contacts</a><br/>
                        </div>
                    </Col>
                    <Col lg='3' md='3' sm='12'>
                    <div className="footer_links">
                            <h4>Support</h4>
                            <a href="#">Order Track</a><br/>
                            <a href="#">Contact Us</a><br/>
                            <a href="#">Find My Product</a><br/>
                            <a href="#">Guide</a><br/>
                            <a href="#">FAQ</a><br/>
                            <a href="#">Help Desk</a><br/>
                            <a href="#">Writer/Publisher Request</a>
                        </div>
                    </Col>
                    <Col lg='3' md='3' sm='12'>
                    <div className="footer_links">
                            <h4>Policies</h4>
                            <a href="#">Terms of Use</a><br/>
                            <a href="#">Privacy Policy</a><br/>
                            <a href="#">Happy Return</a><br/>
                            <a href="#">Refund Policy</a>
                        </div>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col lg='12'>
                        <div className="footer_copyrights">
                            <p>&copy; 2024 FROST-HUB | All Rights Reserved</p>
                        </div>
                    </Col>
                </Row>
           </Container>
        </div>
    )
}
export default Footer;