import {Img,Section} from './styled'
export default function Card({title, img}) {
    return(
        <Section>
            <Img src={img}/>
            <p>{title}</p>
        </Section>
    )
}