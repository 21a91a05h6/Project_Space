import Header from "./header";
import {Container,Row,Col} from "reactstrap";
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';
import Footer from "./footer";
import fi_1 from "./images/filter_imgs/fi1.jpg"
import fi_2 from "./images/filter_imgs/fi2.jpg"
import fi_3 from "./images/filter_imgs/fi3.jpg"
import fi_4 from "./images/filter_imgs/fi4.jpg"
import CommonDiv from "./CommonDiv";
function Filter(){
    const r=[
        {
            id:1,
            d:'Water Leakage',
            i:fi_1,
            t:"Our fridge repair services include thorough diagnostics, efficient repairs, and genuine part replacements to restore your refrigerator's functionality."

        },
        {
            id:2,
            d:'Filteration Problem',
            i:fi_2,
            t:"Our fridge repair services include thorough diagnostics, efficient repairs, and genuine part replacements to restore your refrigerator's functionality."
        },
        {
            id:3,
            d:'Weird Taste',
            i:fi_3,
            t:"Our fridge repair services include thorough diagnostics, efficient repairs, and genuine part replacements to restore your refrigerator's functionality."
        },
        {
            id:4,
            d:'Metallic Taste',
            i:fi_4,
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
                                <img alt="Sample" src={ele.i} style={{height:'250px'}}/>
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
export default Filter;