import Header from "./header";
import {Container,Row,Col} from "reactstrap";
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';
import Footer from "./footer";
import f_1 from "./images/fridge_imgs/f1.jpg"
import f_2 from "./images/fridge_imgs/f_2.jpg"
import f_3 from "./images/fridge_imgs/f_3.jpg"
import f_4 from "./images/fridge_imgs/f4.jpg"
import f_5 from "./images/fridge_imgs/f5.jpg"
import f_6 from "./images/fridge_imgs/f6.jpg"
import CommonDiv from "./CommonDiv";
function Fridge(){
    const r=[
        {
            id:1,
            d:'Cooling Issue',
            i:f_1,
            t:"Our fridge repair services include thorough diagnostics, efficient repairs, and genuine part replacements to restore your refrigerator's functionality."

        },
        {
            id:2,
            d:'Over freezing ',
            i:f_2,
            t:"Our fridge repair services include thorough diagnostics, efficient repairs, and genuine part replacements to restore your refrigerator's functionality."
        },
        {
            id:3,
            d:'Water Leakage',
            i:f_3,
            t:"Our fridge repair services include thorough diagnostics, efficient repairs, and genuine part replacements to restore your refrigerator's functionality."
        },
        {
            id:4,
            d:'Condenser Fan Problem',
            i:f_4,
            t:"Our fridge repair services include thorough diagnostics, efficient repairs, and genuine part replacements to restore your refrigerator's functionality."
        },
        {
            id:5,
            d:'Loud Noise',
            i:f_5,
            t:"Our fridge repair services include thorough diagnostics, efficient repairs, and genuine part replacements to restore your refrigerator's functionality."
        },
        {
            id:6,
            d:'Water dispenser malfunction',
            i:f_6,
            t:"Our fridge repair services include thorough diagnostics, efficient repairs, and genuine part replacements to restore your refrigerator's functionality."
        }
    ]
    return (
        <div>
        <Header/>
        <br/>
        <CommonDiv/>
        <br/>
            <Container>
                <Row>
                    {
                        r.map((ele)=>{
                            return(
                                <Col lg='4' md='4' sm='12' style={{paddingBottom:'20px'}}>
                                <Card
                                    // style={{
                                    //   width: '20rem'
                                    // }}
                                >
                                <img alt="Sample" src={ele.i} style={{height:'200px'}}/>
                                <CardBody>
                                <CardTitle tag="h5">{ele.d}</CardTitle>
                                {/* <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle> */}
                                <CardText>{ele.t}</CardText>
                                <Button>Raise Ticket</Button>
                                </CardBody>
                                </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
            <br/>
            <Footer/>
        </div>
    )
}
export default Fridge;