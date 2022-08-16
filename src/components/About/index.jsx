import { useEffect } from 'react';
import {  useState } from 'react';
import {datas,backgroundConfig} from '../../Api/index'
import NavBar from '../Navbar';
import { Section,Info,Button } from './syled';
export default function About() {
    const[post, setPost] = useState("");
    const [title, setTitle] = useState("")  
    const [genres, setGenred] = useState([])
    const [about, setAbout] = useState('')
    const [background, setBackground] = useState("")
    setTimeout(()=>{
            setPost(`https://image.tmdb.org/t/p/original/${backgroundConfig[0].poster_path}`)
            setTitle(backgroundConfig[0].title)
            setAbout(backgroundConfig[0].overview)
            setGenred(backgroundConfig[0].genres)
            setBackground(`https://image.tmdb.org/t/p/original/${backgroundConfig[0].backdrop_path}`)
        },300)
        setTimeout(()=>{
            
        },300)
        return(
        <>
        <Section background={background}>  
        <NavBar/>
        <div>
            <div>
                <img src={post}/> 
                <div>
                    <h1>{title}</h1>
                    <div>
                        {genres.map((i)=>{
                        return(
                            <p key={i.id}>{i.name}</p>
                        )
                        })}
                    </div>
                    <Info> {about} </Info>
                    <Button>Assistir</Button>
                </div>
            </div>
        </div>
        </Section>

        </>
    )
}