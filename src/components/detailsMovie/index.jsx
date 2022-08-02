import { useParams } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react";
import { Section,Perfil } from "./styled";
export default function DetailsMovies(){
    const {id} = useParams();
    const [datas,setDatas] = useState([])
    const [background,setBackground] = useState('')
    const [image, setImage] = useState('')
    async function getMovies(){
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=758d90bb10802747712fd860965c0320&append_to_response=videos,images`)
        setDatas(data)
        console.log(data)
    }
    setTimeout(()=>{
        setBackground(`https://image.tmdb.org/t/p/original${datas.backdrop_path}`)
        setImage(`https://image.tmdb.org/t/p/original${datas.poster_path}`)
    },300)
    
    useEffect(()=>{getMovies()},[])
    return(
        <Section background={background}> 
            <Perfil src={image}/>
        </Section>
    )
}