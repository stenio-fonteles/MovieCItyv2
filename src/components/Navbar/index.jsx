import { Link } from "react-router-dom";
import { Section } from "./styled";

export default function NavBar(){
    return(
        <Section>
            <h2>MoviesDoc</h2>
            <ul>
                <Link to={"/"}>Home</Link> 
                <Link to={'/'}>Movies</Link>
                <Link to={'/'}>TV Series</Link>
            </ul>
           
        </Section>
    )
}