import {Container,Row,Col} from "reactstrap";
import img1 from './images/img1.jpg'
function Mid(){
    const imgStyle={
        alignItems:'left',
        height:'100%',
        width:'100%'
    }
    return(
        <div>
        <Container>
            <Row>
                <Col lg='2' md='2' sm='12'>
                    <div style={{imgStyle}}>
                        <img src={img1}/>
                    </div>
                </Col>
                <Col lg='2' md='2'></Col>
                <Col lg='8' md='8' sm='12'>
                    <br/>
                    <br/>
                    <br/>
                    <p>Cleaning and servicing of air filters</p>
                    <p>Inspecting and cleaning condenser coils</p>
                    <p>Checking and repairing electrical components</p>
                    <p>Examining and repairing thermostat issues</p>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
export default Mid;