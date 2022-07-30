import About from "../../components/About";
import Footer from "../../components/Footer";
import Movies_Popular from "../../components/Movies_Popular";
import Series from "../../components/Series";

export default function Home(){
    return(
        <>
            <About/>
            <Series/>
            <Movies_Popular/>
            <Footer/>
        </>
    )
}