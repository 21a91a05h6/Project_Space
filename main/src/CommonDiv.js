import { Container,Row,Col,Button } from "reactstrap";
import { Link } from "react-router-dom";

function CommonDiv(){
    return(
        <>
            <Container>
                <Row>
                    <Col lg='10' md='10' sm='10'>
                        <p>In case if the repair you want to mention is not listed below click this button to raise your own custom ticket, Thank You.</p>
                    </Col>
                    <Col lg='2' md='2' sm='2'>
                        {/* <Button>Raise Ticket</Button> */}
                        <Button><Link to='/form' style={{color:'white', textDecoration:'none'}}>Raise Ticket</Link></Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default CommonDiv;