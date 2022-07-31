import About from "../../components/About";
import Footer from "../../components/Footer";
import Movies_Popular from "../../components/Movies_Popular";
import Plutto from "../../components/Plutto";
import Series from "../../components/Series";

export default function Home(){
    return(
        <>
            <About/>
            <Plutto/>
            <Series/>
            <Movies_Popular/>
            <Footer/>
        </>
    )
}