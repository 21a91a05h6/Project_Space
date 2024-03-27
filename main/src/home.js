import Header from "./header";
import Carousel from "./carousel";
import Mid from "./mid_div";
import Author from "./authors";
import Footer from "./footer";
function Home(){
    return(
        <>
        <Header/>
        <Carousel/>
        <br/>
        <Mid/>
        <br/>
        <Author/>
        <Footer/>
        </>
    )
}
export default Home;