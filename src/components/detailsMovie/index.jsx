import { useParams } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react";
import { Section,Perfil,Genres,Button,Grid } from "./styled";
export default function DetailsMovies(){
    const {id} = useParams();
    const [datas,setDatas] = useState([])
    const [background,setBackground] = useState('')
    const [image, setImage] = useState('')
    const[genres,setGenres] = useState([])
    const [grid,setGrid] = useState([])
    const [site,setSite] = useState('')
    async function getMovies(){
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=758d90bb10802747712fd860965c0320&append_to_response=videos,images`)
        setDatas(data)
        console.log(data)
    }
    setTimeout(()=>{
        setBackground(`https://image.tmdb.org/t/p/original${datas.backdrop_path}`)
        setImage(`https://image.tmdb.org/t/p/original${datas.poster_path}`)
        setGenres(datas.genres)
        setGrid(datas.images.posters)
        setSite(datas.homepage)
    },300)

    // console.log(genres)
    
    useEffect(()=>{getMovies()},[])
    return(
        <Section background={background}> 
        <div>
            <Perfil src={image}/>
            <Genres>
                {genres.map((genero) =>{
                    return(
                        <Button>{genero.name}</Button>
                    )
                })}
            </Genres>
        </div>
            <a href={site}>Visitar site oficial</a>
        <Grid>
            {grid.map((i) =>{
                return(
                    <img src={`https://image.tmdb.org/t/p/original${i.file_path}`}/>
                    )
                })}
        </Grid>
        </Section>
    )
}