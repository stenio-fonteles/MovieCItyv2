import axios from 'axios'
import { useState } from 'react'

export const datas = []

async function datasa(){
    const key = "api_key=758d90bb10802747712fd860965c0320"
    var {data} = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?${key}&language=en-US&page=1`)
    var arrData = data.results
    const numero = Math.floor(Math.random() * arrData.length);
    var findPost = arrData[numero]
    datas.push(findPost)
    
        async function getGenres(){
            const {data} = await  axios.get(`https://api.themoviedb.org/3/movie/${findPost.id}?api_key=758d90bb10802747712fd860965c0320&language=pt-BR`)
            datas.push(data)
        } getGenres()

        async function getSeries(){
            const {data} = await axios.get("https://api.themoviedb.org/3/discover/tv?api_key=758d90bb10802747712fd860965c0320&language=pt-BR&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0")
            datas.push(data)
        }   getSeries()

    async function getMoviesPopulares(){
        const {data} = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=758d90bb10802747712fd860965c0320&language=pt-BR&page=1")
        datas.push(data)
    }getMoviesPopulares()

}

//console.log(datas)
// function teste(){
//     setName(findPost.name)
//     setPost(findPost.poster_path)
// }
// useEffect(()=>{
//     teste()
// },[])
datasa()
// getGenres()
// async function getImage() {
//     let key = "api_key=758d90bb10802747712fd860965c0320"
//     let {data} = await axios.get(`https://api.themoviedb.org/t/p/original/1006478/images?${key}&language=en-US`)
//     datas.push(data)
// }
//ultimo filme lançado == https://api.themoviedb.org/3/movie/latest?${key}&language=pt-BR
//get imagem == https://image.tmdb.org/t/p/original/${imagemPath}
//get imagem 500px == https://image.tmdb.org/t/p/w500/${imagemPath}   
//getImage()

   



//dados do filme == https://api.themoviedb.org/3/movie/157336?api_key=758d90bb10802747712fd860965c0320&append_to_response=videos,images