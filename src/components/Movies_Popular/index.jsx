import { useState } from "react"
import { datas } from "../../Api"
import Card from "../Card"
import { Section,Title } from "./styled"

export default function Movies_Popular() {
    const [infos, setInfos] = useState([])
    setTimeout(()=>{
        setInfos(datas[3].results)
    },300)
    console.log(infos)
    return(
        <>
            <Title>Popular</Title>
            <Section>
                {infos.map((data)=>{
                    return(
                        <>
                            <Card title={data.name}img={`https://image.tmdb.org/t/p/original/${data.poster_path}`}/>
                        </>
                    )
                })}
            </Section>
        </>
    )
}