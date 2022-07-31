import { Link } from 'react-router-dom'
import {Img,Section} from './styled'
export default function Card({title, img,id}) {
    return(
        <Section>
            <Link to={`/details/${id}`}><Img src={img}/></Link>
            <p>{title}</p>
        </Section>
    )
}