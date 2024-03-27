import {Row, Container, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';
import r_f from './images/re_fr.jpg';
import r_a from './images/re_ac.jpg';
import r_fi from './images/re_fi.jpg';
import "./styles/services.css";
function Author(){
  return (
    <div>
      <Container>
      <Row>
        <Col lg='12' md='12' sm='12'>
          <h1>Our Services</h1>
          <br/>
        </Col>
      </Row>
        <Row>
          <Col lg='4' md='4' sm='12'>
            <Card
              // style={{
              //   width: '20rem'
              // }}
            >
            <img alt="Sample" src={r_a} className='i1'/>
            <CardBody>
            <CardTitle tag="h5">AC Repairs</CardTitle>
            {/* <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle> */}
            <CardText>Our AC repair services encompass swift diagnosis, precision repairs, and genuine part replacements, ensuring your unit operates at optimal efficiency.</CardText>
            <Button><Link to='/ac' style={{color:'white', textDecoration:'none'}}>Know More</Link></Button>
            </CardBody>
            </Card>
          </Col>
          <Col lg='4' md='4' sm='12'>
          <Card
              // style={{
              //   width: '20rem'
              // }}
            >
            <img
              alt="Sample" src={r_fi} className='i1'/>
            <CardBody>
            <CardTitle tag="h5">Filter Repairs</CardTitle>
            {/* <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle> */}
            <CardText>Our filter repair services encompass comprehensive inspections, precise repairs, and replacement of damaged components, ensuring optimal filtration efficiency.</CardText>
            <Button><Link to='/filters' style={{color:'white', textDecoration:'none'}}>Know More</Link></Button>
            </CardBody>
            </Card>
          </Col>
          <Col lg='4' md='4' sm='12'>
          <Card
              // style={{
              //   width: '20rem'
              // }}
            >
            <img
              alt="Sample" src={r_f} className='i1'/>
            <CardBody>
            <CardTitle tag="h5">Fridge Repairs</CardTitle>
            {/* <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle> */}
            <CardText>Our fridge repair services include thorough diagnostics, efficient repairs, and genuine part replacements to restore your refrigerator's functionality.</CardText>
            <Button><Link to='/fridges' style={{color:'white', textDecoration:'none'}}>Know More</Link></Button>
            </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <br/>
    </div>
  )
}
export default Author;