import Header from "./header";
import {Link} from "react-router-dom"
import {Container,Row,Col} from "reactstrap";
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';
import Footer from "./footer";
import CommonDiv from "./CommonDiv";
import a_1 from "./images/ac_imgs/a1.jpg"
import a_2 from "./images/ac_imgs/a2.jpg"
import a_3 from "./images/ac_imgs/a3.png"
import a_4 from "./images/ac_imgs/ac4.jpg"
import a_5 from "./images/ac_imgs/a5.jpg"
import a_6 from "./images/ac_imgs/a6.jpg"
function AC(){
    const r=[
        {
            id:1,
            d:'Refrigerant Leaks',
            i:a_1,
            t:"Our fridge repair services include thorough diagnostics, efficient repairs, and genuine part replacements to restore your refrigerator's functionality."

        },
        {
            id:2,
            d:'Poor air cooling',
            i:a_2,
            t:"Our fridge repair services include thorough diagnostics, efficient repairs, and genuine part replacements to restore your refrigerator's functionality."
        },
        {
            id:3,
            d:'Weird loud noises',
            i:a_3,
            t:"Our fridge repair services include thorough diagnostics, efficient repairs, and genuine part replacements to restore your refrigerator's functionality."
        },
        {
            id:4,
            d:'Fan Malfunction',
            i:a_4,
            t:"Our fridge repair services include thorough diagnostics, efficient repairs, and genuine part replacements to restore your refrigerator's functionality."
        },
        {
            id:5,
            d:'Weird odor',
            i:a_5,
            t:"Our fridge repair services include thorough diagnostics, efficient repairs, and genuine part replacements to restore your refrigerator's functionality."
        },
        {
            id:6,
            d:'Indoor water leaks',
            i:a_6,
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
export default AC;